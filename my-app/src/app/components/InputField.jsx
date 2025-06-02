'use client';

import React from 'react';
import { Field } from 'formik';

export default function InputField({ label, id, className = '', ...rest }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className={`${className} pl-[20px] placeholder:text-center h-[40px] text-sm outline-none`}
      />
    </div>
  );
}
