import { ChangeEvent } from "react";

export interface Iprops {
  label: string;
  value: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Iprops) => {
  const { label, value, type, onChange } = props;
  return (
    <div className="elm">
      <label htmlFor="">{label}:</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};
