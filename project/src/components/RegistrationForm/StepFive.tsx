import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StepFive: React.FC = () => {
  const [instagramUrl, setInstagramUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [hasGroups, setHasGroups] = useState('no');
  const [groupSize, setGroupSize] = useState('');
  const navigate=useNavigate();
 const location=useLocation();
 const {fourthData}=location.state||{};




  const handlefive=()=>{
      
      const SocialMeidadata={
           instagramUrl,
           twitterUrl,
           hasGroups,
           groupSize
      }

     const fifthData={
      SocialMeidadata,
      ExperianceData:fourthData.ExperianceData,
      personalData:fourthData.personalData,
      Studentdata:fourthData.Studentdata,
      Promotiondata:fourthData.Promotiondata
           
     }

     console.log(fifthData);
     
       
    navigate(`/register/step-six`,{state:{fifthData}});
  }
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Social Media & Outreach</h2>

      {/* Instagram Profile URL */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Instagram Profile URL
        </label>
        <input
          type="url"
          value={instagramUrl}
          onChange={(e) => setInstagramUrl(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Instagram profile URL"
        />
      </div>

      {/* Twitter/X Profile URL */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Twitter/X Profile URL
        </label>
        <input
          type="url"
          value={twitterUrl}
          onChange={(e) => setTwitterUrl(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Twitter/X profile URL"
        />
      </div>

      {/* WhatsApp/Telegram Groups Question */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Do you manage or have access to any large student WhatsApp/Telegram groups?
        </label>
        <select
          value={hasGroups}
          onChange={(e) => setHasGroups(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {/* Group Size Question (Shown Only If User Has Groups) */}
      {hasGroups === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            How many members are in those groups?
          </label>
          <select
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select range</option>
            <option value="<100">Less than 100</option>
            <option value="100-500">100-500</option>
            <option value="500-1000">500-1000</option>
            <option value="1000+">1000+</option>
          </select>
        </div>
      )}

<div className="flex justify-center gap-4 mb-6">
             <button
              
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handlefive}
              >
                Next
              </button>
          </div>
    </div>
  );
};

export default StepFive;
