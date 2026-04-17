import type { FieldProps } from "../../types/Form/Form";

export const FormField: React.FC<FieldProps> = ({
  name,
  label,
  placeholder,
  inputType = "text",
  setFormValues,
  formValues,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const updatedValues = {
      ...formValues,
      [name]: value,
    };
    setFormValues(updatedValues);
  };

  const inputClasses =
    "bg-txt-2 rounded-lg p-2 text-bg-dark font-normal border-2 border-transparent focus:border-theme-aqua-900 focus:outline-none transition-colors";

  if (inputType === "textarea") {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="font-normal text-white">{label}</label>
        <textarea
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          rows={4}
          className={inputClasses}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-normal text-white">{label}</label>
      <input
        name={name}
        type={inputType}
        placeholder={placeholder}
        onChange={handleChange}
        className={inputClasses + " py-1.5"}
      />
    </div>
  );
};
