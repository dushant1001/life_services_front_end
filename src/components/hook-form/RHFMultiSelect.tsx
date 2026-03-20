import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import MultiSelect from "./MultiSelect";

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  options: Option[];
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const RHFMultiSelect: React.FC<Props> = ({
  name,
  options,
  placeholder,
  leftIcon,
  rightIcon,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <MultiSelect
          value={field.value}
          onChange={field.onChange}
          options={options}
          placeholder={placeholder}
          error={fieldState.error?.message}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        />
      )}
    />
  );
};

export default RHFMultiSelect;
