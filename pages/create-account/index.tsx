import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import Input from "../../components/input";
import Title from "../../components/title";
import useMutation from "../../lib/client/useMutation";

interface IForm {
  email: string;
  name: string;
}

interface MutationResult {
  ok: boolean;
}

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isDirty, isValid }
  } = useForm<IForm>({
    mode: "all"
  });
  const [create, { loading, data, error }] = useMutation<MutationResult>(
    "api/create"
  );
  const onValid = (form: IForm) => {
    if (loading) return;
    create(form);
  };

  useEffect(() => {
    trigger();
    if (data?.ok === false && error) {
      alert("Fail to create user");
    }
    if (data?.ok === false && !error) {
      alert("email address already exists, please log in!");
      router.push("/log-in");
    } else if (data?.ok === true && !error) {
      alert("Account created, please log in!");
      router.push("/log-in");
    }
  }, [data]);
  return (
    <div>
      <Title label={"Create Account"} />
      <form onSubmit={handleSubmit(onValid)}>
        <Input
          label={"Name"}
          name={"name"}
          errors={errors?.name}
          register={register("name", {
            required: "Please write down your name."
          })}
        />
        <span>
          <Input
            label={"Email"}
            name={"email"}
            errors={errors?.email}
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
          />
        </span>
        <input
          type="submit"
          value="Create Account"
          disabled={!isDirty || !isValid}
        />
      </form>
    </div>
  );
}
