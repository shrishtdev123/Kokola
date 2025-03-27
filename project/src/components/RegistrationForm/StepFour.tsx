import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface StepFourProps {
  form: UseFormReturn<any>;
}

const StepFour: React.FC<StepFourProps> = ({ form }) => {
  const { register, formState: { errors }, watch } = form;
  const willingToConduct = watch('willingToConduct');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Promotion & Execution Plan</h2>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          How would you promote Ashna AI at your college?
        </label>
        <textarea
          {...register('promotionPlan')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe your marketing approach"
          rows={4}
        />
        {errors.promotionPlan && (
          <p className="mt-1 text-sm text-red-400">{errors.promotionPlan.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          How many students can you reach in your college?
        </label>
        <select
          {...register('reachEstimate')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select range</option>
          <option value="100-500">100-500 students</option>
          <option value="500-1000">500-1000 students</option>
          <option value="1000+">1000+ students</option>
        </select>
        {errors.reachEstimate && (
          <p className="mt-1 text-sm text-red-400">{errors.reachEstimate.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Are you willing to conduct an AI workshop in your college?
        </label>
        <select
          {...register('willingToConduct')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {willingToConduct === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            How will you collaborate with clubs/societies for workshops?
          </label>
          <textarea
            {...register('workshopPlan')}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your collaboration plan"
            rows={3}
          />
        </div>
      )}
    </div>
  );
};

export default StepFour;