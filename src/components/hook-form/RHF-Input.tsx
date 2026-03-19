import React from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import Input, { InputProps } from "./input";

type Props<T extends FieldValues> = InputProps & {
  name: Path<T>; // 🔥 strong typing for field names
};

const RHFInput = <T extends FieldValues>({ name, ...other }: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Input
          {...other}
          value={field.value ?? ""} // ✅ avoid undefined crash
          onChangeText={field.onChange} // ✅ RN mapping
          onBlur={field.onBlur}
          error={fieldState.error?.message} // ✅ error handling
        />
      )}
    />
  );
};

export default RHFInput;
