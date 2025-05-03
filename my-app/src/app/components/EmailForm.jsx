'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import InputField from './InputField';
import Button from './Button';
import SofiaFontText from './SofiaFontText';

const initialValues = {
  email: '',
};

export default function EmailForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className="bg-gray-300 p-[25] flex flex-col items-center">
          <p className="text-lg text-[#2d2d2d] font-medium mb-[24]">
            Get Latest Updates
          </p>
          <div className="flex flex-col gap-[10]">
            <InputField
              className="placeholder:text-[#2d2d2d]"
              required
              type="email"
              placeholder="Your email address"
              name="email"
              autoComplete="off"
              autoCorrect="off"
            />
            <Button type="submit" disabled={!values.email}>
              <SofiaFontText>Subscribe</SofiaFontText>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
