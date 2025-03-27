import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface StepThreeProps {
  form: UseFormReturn<any>;
}

const StepThree: React.FC<StepThreeProps> = ({ form }) => {
  const { register, formState: { errors }, watch } = form;
  const hasBeenAmbassador = watch('hasBeenAmbassador');
  const isPartOfClub = watch('isPartOfClub');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Experience & Skills</h2>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Have you been a Campus Ambassador before?
        </label>
        <select
          {...register('hasBeenAmbassador')}
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
            {...register('previousAmbassadorCompany')}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company/program name"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Are you a part of any College Club/Society?
        </label>
        <select
          {...register('isPartOfClub')}
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
            {...register('clubDetails')}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter club/society name and your role"
            rows={3}
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Rate your skills in Marketing & Promotions (1-5)
        </label>
        <input
          type="range"
          min="1"
          max="5"
          {...register('marketingSkills')}
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
          {...register('eventManagementSkills')}
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
          {...register('socialMediaSkills')}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>
    </div>
  );
};

export default StepThree;