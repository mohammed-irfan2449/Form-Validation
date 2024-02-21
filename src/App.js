import React, { useState } from 'react';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
    age: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let errorsCopy = { ...errors };

    switch (fieldName) {
      case 'email':
        errorsCopy.email = !/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email address' : '';
        break;
      case 'password':
        errorsCopy.password = value.length < 8 ? 'Password must be at least 8 characters long' : '';
        break;
      case 'name':
        errorsCopy.name = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'age':
        errorsCopy.age = value.trim() === '' ? 'Age is required' : '';
        break;
      case 'country':
        errorsCopy.country = value.trim() === '' ? 'Country is required' : '';
        break;
      default:
        break;
    }

    setErrors(errorsCopy);
    setFormValid(Object.values(errorsCopy).every((error) => error === ''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" className={`submit-button ${formValid ? 'submit-button-green' : ''}`} disabled={!formValid}>Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
