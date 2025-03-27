import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface StepTwoProps {
  form: UseFormReturn<any>;
}

const StepTwo: React.FC<StepTwoProps> = ({ form }) => {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">College & Academic Information</h2>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          College Name
        </label>
        <input
          type="text"
          {...register('collegeName')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your college name"
        />
        {errors.collegeName && (
          <p className="mt-1 text-sm text-red-400">{errors.collegeName.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          College Location (City & State)
        </label>
        <input
          type="text"
          {...register('collegeLocation')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter college location"
        />
        {errors.collegeLocation && (
          <p className="mt-1 text-sm text-red-400">{errors.collegeLocation.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Current Course
        </label>
        <select
          {...register('course')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your course</option>
          <option value="btech">B.Tech</option>
          <option value="mba">MBA</option>
          <option value="bba">BBA</option>
          <option value="other">Other</option>
        </select>
        {errors.course && (
          <p className="mt-1 text-sm text-red-400">{errors.course.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Current Year
        </label>
        <select
          {...register('year')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
        {errors.year && (
          <p className="mt-1 text-sm text-red-400">{errors.year.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Student ID (Optional)
        </label>
        <input
          type="text"
          {...register('studentId')}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your student ID"
        />
        {errors.studentId && (
          <p className="mt-1 text-sm text-red-400">{errors.studentId.message as string}</p>
        )}
      </div>
    </div>
  );
};

export default StepTwo;