import Title from "../components/title";
import useUser from "../lib/client/useUser";

export default function Home() {
  const data = useUser();

  return (
    <div>
      <Title label={`Welcome ${data?.user?.name}!!`} />
      <div>
        <h4>Your email is: {data?.user?.email}</h4>
      </div>
    </div>
  );
}
