interface ITitle {
  label: string;
}

export default function Title({ label }: ITitle) {
  return (
    <div>
      <h1>{label}</h1>
    </div>
  );
}
