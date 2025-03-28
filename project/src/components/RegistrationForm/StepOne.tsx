import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StepOne: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
    linkedinUrl: '',
  });

   const navigate=useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleclick=()=>{
         console.log(formData);
         navigate(`/register/step-two`,{state:{personalData:formData}})
   }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Basic Personal Information</h2>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email ID (College Email Preferred)</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn Profile URL (Optional)</label>
        <input
          type="url"
          name="linkedinUrl"
          value={formData.linkedinUrl}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your LinkedIn profile URL"
        />
      </div>

    
      
       
      <div className="flex justify-center gap-4 mb-6">
             <button
              
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleclick}
              >
                Next
              </button>
          </div>
    </div>
  );
};

export default StepOne;
