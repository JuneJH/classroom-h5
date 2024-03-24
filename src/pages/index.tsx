import { history } from "umi";

export default function HomePage() {
  history.replace("/home");
  return (
   <div></div>
  );
}
