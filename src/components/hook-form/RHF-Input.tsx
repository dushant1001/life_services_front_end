import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Input, { InputProps } from "./input";

type Props = InputProps & {
  name: string; // ✅ no generic here
};

const RHFInput: React.FC<Props> = ({ name, ...other }) => {
  const { control } = useFormContext(); // ✅ no generic

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Input
          {...other}
          value={field.value ?? ""}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          error={fieldState.error?.message}
        />
      )}
    />
  );
};

export default RHFInput;
