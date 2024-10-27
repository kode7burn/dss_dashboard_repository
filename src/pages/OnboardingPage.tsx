import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../contexts/AuthContext';
import { Loader2, ArrowRight, Upload } from 'lucide-react';

const steps = ['Basic Info', 'Profile Details', 'Preferences'] as const;

const basicInfoSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required')
});

const profileSchema = z.object({
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  avatar: z.string().optional()
});

const preferencesSchema = z.object({
  emailNotifications: z.boolean(),
  theme: z.enum(['light', 'dark', 'system'])
});

type BasicInfoData = z.infer<typeof basicInfoSchema>;
type ProfileData = z.infer<typeof profileSchema>;
type PreferencesData = z.infer<typeof preferencesSchema>;

export function OnboardingPage() {
  const [step, setStep] = useState(0);
  const { updateUser } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    avatar: '',
    emailNotifications: true,
    theme: 'system' as const
  });

  const basicInfoForm = useForm<BasicInfoData>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName
    }
  });

  const profileForm = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      bio: formData.bio,
      avatar: formData.avatar
    }
  });

  const preferencesForm = useForm<PreferencesData>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: {
      emailNotifications: formData.emailNotifications,
      theme: formData.theme
    }
  });

  const handleBasicInfoSubmit = async (data: BasicInfoData) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(1);
  };

  const handleProfileSubmit = async (data: ProfileData) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(2);
  };

  const handlePreferencesSubmit = async (data: PreferencesData) => {
    const finalData = { ...formData, ...data };
    await updateUser({
      name: `${finalData.firstName} ${finalData.lastName}`,
      onboarded: true
    });
  };

  const getCurrentForm = () => {
    switch (step) {
      case 0:
        return (
          <form onSubmit={basicInfoForm.handleSubmit(handleBasicInfoSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                {...basicInfoForm.register('firstName')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {basicInfoForm.formState.errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{basicInfoForm.formState.errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                {...basicInfoForm.register('lastName')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              {basicInfoForm.formState.errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{basicInfoForm.formState.errors.lastName.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        );

      case 1:
        return (
          <form onSubmit={profileForm.handleSubmit(handleProfileSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                {...profileForm.register('bio')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows={4}
              />
              {profileForm.formState.errors.bio && (
                <p className="mt-1 text-sm text-red-600">{profileForm.formState.errors.bio.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Avatar</label>
              <div className="mt-1 flex items-center">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Upload className="h-5 w-5 mr-2" />
                  Upload Photo
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        );

      case 2:
        return (
          <form onSubmit={preferencesForm.handleSubmit(handlePreferencesSubmit)} className="space-y-6">
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...preferencesForm.register('emailNotifications')}
                  className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Receive email notifications
                </span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Theme Preference</label>
              <select
                {...preferencesForm.register('theme')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {preferencesForm.formState.isSubmitting ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                'Complete Setup'
              )}
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Complete your profile
        </h2>
        
        <div className="mt-4">
          <div className="flex justify-between items-center w-full mb-8">
            {steps.map((s, i) => (
              <div
                key={s}
                className={`flex items-center ${
                  i < steps.length - 1 ? 'w-full' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                    i <= step
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-gray-300 text-gray-500'
                  }`}
                >
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`h-0.5 w-full ${
                      i < step ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {getCurrentForm()}
        </div>
      </div>
    </div>
  );
}