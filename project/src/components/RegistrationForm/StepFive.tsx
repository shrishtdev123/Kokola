import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface StepFiveProps {
  form: UseFormReturn<any>;
}

const StepFive: React.FC<StepFiveProps> = ({ form }) => {
  const { register, formState: { errors }, watch } = form;
  const hasGroups = watch('hasGroups');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Social Media & Outreach</h2>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Instagram Profile URL
        </label>
        <input
          type="url"
          {...register('instagramUrl')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Instagram profile URL"
        />
        {errors.instagramUrl && (
          <p className="mt-1 text-sm text-red-400">{errors.instagramUrl.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Twitter/X Profile URL
        </label>
        <input
          type="url"
          {...register('twitterUrl')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your Twitter/X profile URL"
        />
        {errors.twitterUrl && (
          <p className="mt-1 text-sm text-red-400">{errors.twitterUrl.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Do you manage or have access to any large student WhatsApp/Telegram groups?
        </label>
        <select
          {...register('hasGroups')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {hasGroups === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            How many members are in those groups?
          </label>
          <select
            {...register('groupSize')}
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
    </div>
  );
};

export default StepFive;