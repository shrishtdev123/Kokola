import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface StepSevenProps {
  form: UseFormReturn<any>;
}

const StepSeven: React.FC<StepSevenProps> = ({ form }) => {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">File Upload & Final Submission</h2>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Upload Your Resume (Optional)
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          {...register('resume')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-1 text-sm text-gray-400">Max size: 2MB, Format: PDF/DOC</p>
        {errors.resume && (
          <p className="mt-1 text-sm text-red-400">{errors.resume.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Upload a Short Video (30-60 sec) on Why You Want to Be a CA (Optional)
        </label>
        <input
          type="file"
          accept="video/*"
          {...register('video')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-1 text-sm text-gray-400">Max size: 10MB, Format: MP4</p>
        {errors.video && (
          <p className="mt-1 text-sm text-red-400">{errors.video.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          How did you hear about this program?
        </label>
        <select
          {...register('source')}
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
        {errors.source && (
          <p className="mt-1 text-sm text-red-400">{errors.source.message as string}</p>
        )}
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          {...register('agreeToTerms')}
          className="mt-1 mr-2"
        />
        <label className="text-sm text-gray-300">
          I agree to the Terms & Conditions and understand that my personal information will be processed in accordance with Ashna AI's Privacy Policy.
        </label>
      </div>
      {errors.agreeToTerms && (
        <p className="mt-1 text-sm text-red-400">{errors.agreeToTerms.message as string}</p>
      )}
    </div>
  );
};

export default StepSeven;