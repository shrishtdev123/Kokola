import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const StepSeven: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [source, setSource] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const location=useLocation();
  const {sixData}=location.state||{};

  
   const handleseven=()=>{

         const filedata={
             resume,
             video,
             source,
             agreeToTerms
         }

      const data={
        filedata,
        AvailabilityCommitmentData:sixData.AvailabilityCommitmentData,
        SocialMeidadata:sixData.SocialMeidadata,
        ExperianceData:sixData.ExperianceData,
        personalData:sixData.personalData,
        Studentdata:sixData.Studentdata,
        Promotiondata:sixData.Promotiondata


      }

      console.log(data);

      // now from here we send a post request to add the data in database
      
      const sendData=async()=>{

         const datasend=await axios.post("http://localhost:3400/api/user/adduser",data);

          console.log(datasend);
          

      }

      sendData();
        
   }
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">File Upload & Final Submission</h2>

      {/* Resume Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Upload Your Resume (Optional)
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files?.[0] || null)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-1 text-sm text-gray-400">Max size: 2MB, Format: PDF/DOC</p>
        {resume && <p className="mt-1 text-sm text-green-400">Selected: {resume.name}</p>}
      </div>

      {/* Video Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Upload a Short Video (30-60 sec) on Why You Want to Be a CA (Optional)
        </label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files?.[0] || null)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-1 text-sm text-gray-400">Max size: 10MB, Format: MP4</p>
        {video && <p className="mt-1 text-sm text-green-400">Selected: {video.name}</p>}
      </div>

      {/* Source Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          How did you hear about this program?
        </label>
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select source</option>
          <option value="instagram">Instagram</option>
          <option value="linkedin">LinkedIn</option>
          <option value="website">Website</option>
          <option value="referral">Referral</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Terms Agreement */}
      <div className="flex items-start">
        <input
          type="checkbox"
          checked={agreeToTerms}
          onChange={(e) => setAgreeToTerms(e.target.checked)}
          className="mt-1 mr-2"
        />
        <label className="text-sm text-gray-300">
          I agree to the Terms & Conditions and understand that my personal information will be processed in accordance with Ashna AI's Privacy Policy.
        </label>
      </div>

      <div className="flex justify-center gap-4 mb-6">
             <button
              
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleseven}
              >
                Submit
              </button>
          </div>
    </div>
  );
};

export default StepSeven;
