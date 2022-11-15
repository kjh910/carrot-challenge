import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input";
import Title from "../../components/title";
import useMutation from "../../lib/client/useMutation";

interface IForm {
  email: string;
}

interface MutationResult {
  ok: boolean;
}

export default function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    trigger
  } = useForm<IForm>({
    mode: "all"
  });
  const [login, { loading, data, error }] = useMutation<MutationResult>(
    "api/login"
  );

  const onValid = (form: IForm) => {
    if (loading) return;
    login(form);
  };

  useEffect(() => {
    trigger();
    if (data?.ok === false && error) {
      alert("Fail to login user");
    }
    if (data?.ok === false && !error) {
      alert("Email doesn`t exist");
    } else if (data?.ok === true && !error) {
      router.push("/");
    }
  }, [data]);
  return (
    <div>
      <Title label={"Login"} />
      <form onSubmit={handleSubmit(onValid)}>
        <Input
          label={"Email"}
          name={"email"}
          register={register("email", {
            required: "Please write down your email.",
            validate: {
              message: (value) => {
                if (
                  !/^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(
                    value
                  )
                ) {
                  return "Please correct email format";
                }
              }
            }
          })}
          errors={errors?.email}
        />
        <input type="submit" value="Login" disabled={!isDirty || !isValid} />
      </form>
    </div>
  );
}
