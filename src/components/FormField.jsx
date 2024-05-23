import React from 'react';

const FormField = ({ label, type = "text", name, value, onChange, error }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <input type={type} className={`form-control ${error ? 'is-invalid' : ''}`} name={name} value={value} onChange={onChange} />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default FormField;
