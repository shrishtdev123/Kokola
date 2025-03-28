import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StepSix: React.FC = () => {
  const [canDedicate, setCanDedicate] = useState('');
  const [isComfortable, setIsComfortable] = useState('');
  const [understandsIncentives, setUnderstandsIncentives] = useState('');
   const navigate=useNavigate();
   const location=useLocation();
   const {fifthData}=location.state||{};


 
        
    const handleSix=()=>{
      
        const AvailabilityCommitmentData={
             canDedicate,
             isComfortable,
             understandsIncentives
        }

       const sixData={
        AvailabilityCommitmentData,
        SocialMeidadata:fifthData.SocialMeidadata,
        ExperianceData:fifthData.ExperianceData,
        personalData:fifthData.personalData,
        Studentdata:fifthData.Studentdata,
        Promotiondata:fifthData.Promotiondata

       }
        
      navigate(`/register/step-seven`,{state:{sixData}});
    }
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Availability & Commitment</h2>

      {/* Dedication Question */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Can you dedicate 3-5 hours per week for this program?
        </label>
        <select
          value={canDedicate}
          onChange={(e) => setCanDedicate(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your answer</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Promotion Question */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Are you comfortable promoting Ashna AI online & offline?
        </label>
        <select
          value={isComfortable}
          onChange={(e) => setIsComfortable(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your answer</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Incentives Understanding */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Do you understand that CA incentives are based on performance?
        </label>
        <select
          value={understandsIncentives}
          onChange={(e) => setUnderstandsIncentives(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your answer</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>


      <div className="flex justify-center gap-4 mb-6">
             <button
              
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleSix}
              >
                Next
              </button>
          </div>
    </div>
  );
};

export default StepSix;
