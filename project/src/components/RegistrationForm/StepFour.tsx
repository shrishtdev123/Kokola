import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StepFour: React.FC = () => {
  const [promotionPlan, setPromotionPlan] = useState('');
  const [reachEstimate, setReachEstimate] = useState('');
  const [willingToConduct, setWillingToConduct] = useState('no');
  const [workshopPlan, setWorkshopPlan] = useState('');
   const navigate=useNavigate();

   const location=useLocation();
   const {thirddata}=location.state||{};


   const handlefour=()=>{
       const Promotiondata={
           promotionPlan,
           reachEstimate,
           willingToConduct,
           workshopPlan
       }

      const fourthData={
        ExperianceData:thirddata.ExperianceData,
        personalData:thirddata.personalData,
        Studentdata:thirddata.Studentdata,
        Promotiondata,
      }

       console.log(fourthData);
       
       
    navigate(`/register/step-five`,{state:{fourthData}});
   }
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Promotion & Execution Plan</h2>

      {/* Promotion Plan */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          How would you promote Ashna AI at your college?
        </label>
        <textarea
          value={promotionPlan}
          onChange={(e) => setPromotionPlan(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your marketing approach"
          rows={4}
        />
      </div>

      {/* Reach Estimate */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          How many students can you reach in your college?
        </label>
        <select
          value={reachEstimate}
          onChange={(e) => setReachEstimate(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select range</option>
          <option value="100-500">100-500 students</option>
          <option value="500-1000">500-1000 students</option>
          <option value="1000+">1000+ students</option>
        </select>
      </div>

      {/* Willing to Conduct Workshop */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Are you willing to conduct an AI workshop in your college?
        </label>
        <select
          value={willingToConduct}
          onChange={(e) => setWillingToConduct(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {/* Workshop Plan (Shown Only If Willing To Conduct) */}
      {willingToConduct === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            How will you collaborate with clubs/societies for workshops?
          </label>
          <textarea
            value={workshopPlan}
            onChange={(e) => setWorkshopPlan(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your collaboration plan"
            rows={3}
          />
        </div>
      )}

<div className="flex justify-center gap-4 mb-6">
             <button
              
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handlefour}
              >
                Next
              </button>
          </div>
    </div>
  );
};

export default StepFour;
