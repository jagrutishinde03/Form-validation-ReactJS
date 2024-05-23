import React from 'react';

const PasswordField = ({ label, name, value, onChange, showPassword, toggleShowPassword, error }) => (
  <div className="mb-3 position-relative">
    <label className="form-label">{label}</label>
    <input type={showPassword ? "text" : "password"} className={`form-control ${error ? 'is-invalid' : ''}`} name={name} value={value} onChange={onChange} />
    <button type="button" onClick={toggleShowPassword} className="btn btn-secondary position-absolute top-50 end-0 translate-middle-y">
      {showPassword ? "Hide" : "Show"}
    </button>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default PasswordField;
