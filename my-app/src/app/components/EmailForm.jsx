'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import InputField from './InputField';
import Button from './Button';

const initialValues = {
  title: '',
  description: '',
  joinedDate: '',
  categoryId: '',
  countryId: '',
};

export default function EmailForm({ onSubmit }) {
  // const queryClient = useQueryClient();

  // const { data: categories } = useQuery({
  //   queryKey: ['categories'],
  //   queryFn: getCategories,
  //   staleTime: 10 * 1000,
  // });

  // const { data: countries } = useQuery({
  //   queryKey: ['countries'],
  //   queryFn: getCountries,
  //   staleTime: 10 * 1000,
  // });

  // const { mutateAsync, isPending } = useMutation({
  //   mutationFn: createCompany,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ['companies'],
  //     });
  //   },
  // });

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="bg-gray-300 p-[25] flex flex-col items-center">
        <p className="text-lg text-[#2d2d2d] font-medium mb-[24]">
          Get Latest Updates
        </p>
        <div className="flex flex-col gap-[10]">
          <InputField />
          <Button>Subscribe</Button>
        </div>
      </Form>
    </Formik>
  );
}
