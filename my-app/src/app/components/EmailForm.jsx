'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import InputField from './InputField';
import Button from './Button';
import SofiaFontText from './SofiaFontText';

const initialValues = {
  email: '',
};

export default function EmailForm({ onSubmit, isNeedTitle, isFooterForm }) {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form
          className={`${
            !isFooterForm && 'bg-gray-300 p-[25px]'
          } flex flex-col items-center`}
        >
          {isNeedTitle && (
            <p className="text-lg text-[#2d2d2d] font-medium mb-[24px]">
              {isNeedTitle}
            </p>
          )}
          <div className="flex flex-col gap-[10px] w-full">
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
