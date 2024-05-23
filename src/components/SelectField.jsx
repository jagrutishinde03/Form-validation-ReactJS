import React from 'react';

const SelectField = ({ label, name, value, onChange, options, error }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <select className={`form-select ${error ? 'is-invalid' : ''}`} name={name} value={value} onChange={onChange}>
      <option value="">Select {label}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default SelectField;
