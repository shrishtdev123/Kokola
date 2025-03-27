import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface StepSixProps {
  form: UseFormReturn<any>;
}

const StepSix: React.FC<StepSixProps> = ({ form }) => {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Availability & Commitment</h2>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Can you dedicate 3-5 hours per week for this program?
        </label>
        <select
          {...register('canDedicate')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your answer</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.canDedicate && (
          <p className="mt-1 text-sm text-red-400">{errors.canDedicate.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Are you comfortable promoting Ashna AI online & offline?
        </label>
        <select
          {...register('isComfortable')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your answer</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.isComfortable && (
          <p className="mt-1 text-sm text-red-400">{errors.isComfortable.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Do you understand that CA incentives are based on performance?
        </label>
        <select
          {...register('understandsIncentives')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your answer</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.understandsIncentives && (
          <p className="mt-1 text-sm text-red-400">{errors.understandsIncentives.message as string}</p>
        )}
      </div>
    </div>
  );
};

export default StepSix;