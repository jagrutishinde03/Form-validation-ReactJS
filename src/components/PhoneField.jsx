import React from 'react';

const PhoneField = ({ label, name, value, countryCode, onChange, error, countryCodeOptions }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <div className="input-group">
      <select className="form-select" name="countryCode" value={countryCode} onChange={onChange}>
        {countryCodeOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <input type="text" className={`form-control ${error ? 'is-invalid' : ''}`} name={name} value={value} onChange={onChange} />
    </div>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default PhoneField;
