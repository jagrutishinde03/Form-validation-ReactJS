import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormField from './FormField';
import PasswordField from './PasswordField';
import SelectField from './SelectField';
import PhoneField from './PhoneField';
import '../styles.css';

const Form = () => {
  const navigate = useNavigate();
  
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    countryCode: '+91', // Default country code for India
    phone: '',
    country: '',
    city: '',
    pan: '',
    aadhar: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = (values) => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // Regex for 10-digit phone number
    const panRegex = /^\d{10}$/; // Updated regex for PAN number (10 digits only)
    const aadharRegex = /^\d{12}$/; // Updated regex for Aadhar number (12 digits only)

    if (!values.firstName) errors.firstName = 'First Name is required';
    else if (!/^[A-Z][a-z]*$/.test(values.firstName)) errors.firstName = 'First Name must start with a capital letter';
    
    if (!values.lastName) errors.lastName = 'Last Name is required';
    else if (!/^[A-Z][a-z]*$/.test(values.lastName)) errors.lastName = 'Last Name must start with a capital letter';

    if (!values.username) errors.username = 'Username is required';
    if (!values.email || !emailRegex.test(values.email)) errors.email = 'Valid E-mail is required';
    if (!values.password) errors.password = 'Password is required';
    if (!values.phone || !phoneRegex.test(values.phone)) errors.phone = 'Valid Phone No. is required';
    if (!values.country) errors.country = 'Country is required';
    if (!values.city) errors.city = 'City is required';
    if (!values.pan || !panRegex.test(values.pan)) errors.pan = 'Valid PAN No. is required';
    if (!values.aadhar || !aadharRegex.test(values.aadhar)) errors.aadhar = 'Valid Aadhar No. is required';

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors(validate({ ...formValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setIsSubmitting(true);
  };

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      navigate('/success', { state: formValues });
    }
  }, [errors, isSubmitting, navigate, formValues]);

  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    // Add other countries as needed
  ];

  const cityOptions = formValues.country === 'India'
    ? [
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Mumbai', label: 'Mumbai' }
      ]
    : formValues.country === 'USA'
    ? [
        { value: 'New York', label: 'New York' },
        { value: 'Los Angeles', label: 'Los Angeles' }
      ]
    : [];

  const countryCodeOptions = [
    { value: '+91', label: '+91 (India)' },
    { value: '+1', label: '+1 (USA)' },

  ];

  return (
    <form onSubmit={handleSubmit} className="form-container p-4 rounded shadow-lg bg-light">
      <h2 className="text-center mb-4">Registration Form</h2>
      
      <div className="row">
        <div className="col-md-6">
          <FormField label="First Name" name="firstName" value={formValues.firstName} onChange={handleChange} error={errors.firstName} />
        </div>
        <div className="col-md-6">
          <FormField label="Last Name" name="lastName" value={formValues.lastName} onChange={handleChange} error={errors.lastName} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <FormField label="Username" name="username" value={formValues.username} onChange={handleChange} error={errors.username} />
        </div>
        <div className="col-md-6">
          <PasswordField
            label="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            showPassword={showPassword}
            toggleShowPassword={() => setShowPassword(!showPassword)}
            error={errors.password}
          />
        </div>
      </div>
      
      <FormField label="E-mail" type="email" name="email" value={formValues.email} onChange={handleChange} error={errors.email} />
      
      <div className="row">
        <div className="col-md-6">
          <SelectField
            label="Country"
            name="country"
            value={formValues.country}
            onChange={handleChange}
            options={countryOptions}
            error={errors.country}
          />
        </div>
        <div className="col-md-6">
          <SelectField
            label="City"
            name="city"
            value={formValues.city}
            onChange={handleChange}
            options={cityOptions}
            error={errors.city}
          />
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6">
          <FormField label="PAN No." name="pan" value={formValues.pan} onChange={handleChange} error={errors.pan} />
        </div>
        <div className="col-md-6">
          <FormField label="Aadhar No." name="aadhar" value={formValues.aadhar} onChange={handleChange} error={errors.aadhar} />
        </div>
      </div>
      
      <PhoneField
        label="Phone No."
        name="phone"
        value={formValues.phone}
        countryCode={formValues.countryCode}
        onChange={handleChange}
        error={errors.phone}
        countryCodeOptions={countryCodeOptions}
      />
      
      <button type="submit" className="btn btn-primary w-100" disabled={Object.keys(errors).length > 0}>Submit</button>
    </form>
  );
};

export default Form;
