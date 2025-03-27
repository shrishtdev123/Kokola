import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
import StepSeven from './StepSeven';

const formSchema = z.object({
  // Step 1: Basic Personal Information
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string(),
  linkedinUrl: z.string().url().optional(),

  // Step 2: College & Academic Information
  collegeName: z.string().min(2, 'College name is required'),
  collegeLocation: z.string().min(2, 'College location is required'),
  course: z.string(),
  year: z.string(),
  studentId: z.string().optional(),

  // ... additional fields will be added for other steps
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      gender: 'male',
      dateOfBirth: '',
      linkedinUrl: '',
      collegeName: '',
      collegeLocation: '',
      course: '',
      year: '',
      studentId: '',
    },
  });

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne form={form} />;
      case 2:
        return <StepTwo form={form} />;
      case 3:
        return <StepThree form={form} />;
      case 4:
        return <StepFour form={form} />;
      case 5:
        return <StepFive form={form} />;
      case 6:
        return <StepSix form={form} />;
      case 7:
        return <StepSeven form={form} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-xl p-8 shadow-xl"
        >
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Campus Ambassador Registration
          </h1>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-700 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
            <div className="mt-2 text-gray-400 text-sm text-center">
              Step {currentStep} of {totalSteps}
            </div>
          </div>

          {/* Form steps */}
          <form onSubmit={form.handleSubmit(console.log)}>
            {renderStep()}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                type="button"
                onClick={currentStep === totalSteps ? form.handleSubmit(console.log) : nextStep}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity ml-auto"
              >
                {currentStep === totalSteps ? 'Submit' : 'Next'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationForm;