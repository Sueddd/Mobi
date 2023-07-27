import { useForm, Controller } from "react-hook-form";

function MyApp() {
  const { control } = useForm();

  return (
    <Controller
      render={({ field }) => <input {...field} />}
      name="firstName"
      control={control}
      defaultValue=""
    />
  );
}
export default MyApp;
