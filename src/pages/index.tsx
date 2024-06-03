import { history } from "umi";

export default function HomePage() {
  history.replace("/login");
  return (
   <div></div>
  );
}
