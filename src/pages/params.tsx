import { useRouter } from "next/router";

export default function Items(props) {
  const { query } = useRouter();

  return (
    <div>
      <h1>{query.foo}</h1>
    </div>
  );
}
