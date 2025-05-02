'use client';

import React from 'react';
import { Field } from 'formik';

export default function InputField({ label, id, text = '' }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        text={text}
        id={id}
        className="p-3 h-11 text-sm border border-gray-300"
      />
    </div>
  );
}
