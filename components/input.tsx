import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface IInput {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  errors: FieldError | undefined;
}

export default function Input({ label, name, errors, register }: IInput) {
  return (
    <>
      <div>
        <span className="label-style">{`${label} : `}</span>
        <span>
          <input type="text" {...register} name={name} />
        </span>
        {errors?.message}
      </div>
      <style>
        {`
            .label-style {
              font-weight: bold;
            }
          `}
      </style>
    </>
  );
}
