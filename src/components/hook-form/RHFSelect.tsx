import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "./select";

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  options: Option[];
  placeholder?: string;

  leftIcon?: React.ReactNode; // ✅ add
  rightIcon?: React.ReactNode; // ✅ add
};

const RHFSelect: React.FC<Props> = ({
  name,
  options,
  placeholder,
  leftIcon,
  rightIcon,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Select
          value={field.value}
          onChange={field.onChange}
          options={options}
          placeholder={placeholder}
          error={fieldState.error?.message}
          leftIcon={leftIcon} // ✅ pass
          rightIcon={rightIcon} // ✅ pass
        />
      )}
    />
  );
};

export default RHFSelect;
