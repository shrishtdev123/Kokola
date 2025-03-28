import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StepThree: React.FC = () => {
  const [hasBeenAmbassador, setHasBeenAmbassador] = useState('no');
  const [previousAmbassadorCompany, setPreviousAmbassadorCompany] = useState('');
  const [isPartOfClub, setIsPartOfClub] = useState('no');
  const [clubDetails, setClubDetails] = useState('');
  const [marketingSkills, setMarketingSkills] = useState(1);
  const [eventManagementSkills, setEventManagementSkills] = useState(1);
  const [socialMediaSkills, setSocialMediaSkills] = useState(1);
    const navigate=useNavigate();

    const location=useLocation();
    const {combinedata}=location.state||{};

    const handlethird=()=>{
         
         const ExperianceData={
               hasBeenAmbassador,
               previousAmbassadorCompany,
               isPartOfClub,
               clubDetails,
               marketingSkills,
               eventManagementSkills,
               socialMediaSkills
         }

        
        const thirddata={
               ExperianceData,
               personalData:combinedata.personalData,
               Studentdata:combinedata.Studentdata
        }
         console.log(thirddata);
         
         
      navigate(`/register/step-four`,{state:{thirddata}});
    }
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Experience & Skills</h2>

      {/* Campus Ambassador Question */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Have you been a Campus Ambassador before?
        </label>
        <select
          value={hasBeenAmbassador}
          onChange={(e) => setHasBeenAmbassador(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {hasBeenAmbassador === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            For which company/program?
          </label>
          <input
            type="text"
            value={previousAmbassadorCompany}
            onChange={(e) => setPreviousAmbassadorCompany(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company/program name"
          />
        </div>
      )}

      {/* College Club/Society Question */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Are you a part of any College Club/Society?
        </label>
        <select
          value={isPartOfClub}
          onChange={(e) => setIsPartOfClub(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {isPartOfClub === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Club/Society Name & Your Role
          </label>
          <textarea
            value={clubDetails}
            onChange={(e) => setClubDetails(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter club/society name and your role"
            rows={3}
          />
        </div>
      )}

      {/* Skill Ratings */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Rate your skills in Marketing & Promotions (1-5)
        </label>
        <input
          type="range"
          min="1"
          max="5"
          value={marketingSkills}
          onChange={(e) => setMarketingSkills(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Rate your skills in Event Management (1-5)
        </label>
        <input
          type="range"
          min="1"
          max="5"
          value={eventManagementSkills}
          onChange={(e) => setEventManagementSkills(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Rate your skills in Social Media Engagement (1-5)
        </label>
        <input
          type="range"
          min="1"
          max="5"
          value={socialMediaSkills}
          onChange={(e) => setSocialMediaSkills(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-6">
             <button
              
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handlethird}
              >
                Next
              </button>
          </div>
    </div>
  );
};

export default StepThree;
