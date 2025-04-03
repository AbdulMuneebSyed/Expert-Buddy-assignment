"use client";

import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface DatePickerExpertProps {
  value: string | null;
  setValue: (value: string | null) => void;
}

export default function DatePickerExpert({ value, setValue }: DatePickerExpertProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Pick a date"
        value={value ? dayjs(value) : null}
        onChange={(newValue) => setValue(newValue ? newValue.toISOString() : null)} // Store as ISO string
      />
    </LocalizationProvider>
  );
}
