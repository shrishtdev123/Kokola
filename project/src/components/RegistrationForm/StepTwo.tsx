import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StepTwo: React.FC = () => {
  const [collegeName, setCollegeName] = useState('');
  const [collegeLocation, setCollegeLocation] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [studentId, setStudentId] = useState('');
  const navigate=useNavigate();
  const location = useLocation();
 
  const {personalData}=location.state||{};

  const handlesecond=()=>{
    
     const Studentdata={

            collegeName,
            collegeLocation,
            course,
            year,
            studentId
     }
    
     

      const combinedata={
             personalData,
             Studentdata
      }
      
       console.log(combinedata);
       
    navigate(`/register/step-three`,{state:{combinedata}})
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">College & Academic Information</h2>

      {/* College Name */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          College Name
        </label>
        <input
          type="text"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your college name"
        />
      </div>

      {/* College Location */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          College Location (City & State)
        </label>
        <input
          type="text"
          value={collegeLocation}
          onChange={(e) => setCollegeLocation(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter college location"
        />
      </div>

      {/* Current Course */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Current Course
        </label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your course</option>
          <option value="btech">B.Tech</option>
          <option value="mba">MBA</option>
          <option value="bba">BBA</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Current Year */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Current Year
        </label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </div>

      {/* Student ID */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Student ID (Optional)
        </label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your student ID"
        />
      </div>

      <div className="flex justify-center gap-4 mb-6">
             <button
              
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handlesecond}
              >
                Next
              </button>
          </div>
    </div>
  );
};

export default StepTwo;
