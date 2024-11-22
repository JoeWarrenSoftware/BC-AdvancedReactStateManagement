import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    hearOfUs: '',
    otherSource: ''
  });

  const [showOther, setShowOther] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Set value of showOther to be thee result of whether other is what is selected. True of False
    setShowOther((formData.hearOfUs === 'other'))
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='form-group'>
          <label>
            How did you hear of us?
            <select name="hearOfUs" value={formData.hearOfUs} onChange={handleChange}>
              <option value="searchengine">Search Engine</option>
              <option value="socialmedia">Social Media</option>
              <option value="wordofmouth">Word of Mouth</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        { formData.hearOfUs === 'other' && 
        <div className='form-group'>
          <label>
            Source of Other:
            <input
              type="text"
              name="otherSource"
              value={formData.otherSource}
              onChange={handleChange}
            />
          </label>
        </div>
        }
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Form;
