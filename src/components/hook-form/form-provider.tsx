import React from "react";
import { FormProvider as RHFProvider, UseFormReturn } from "react-hook-form";

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
};

const FormProvider: React.FC<Props> = ({ children, methods }) => {
  return <RHFProvider {...methods}>{children}</RHFProvider>;
};

export default FormProvider;
