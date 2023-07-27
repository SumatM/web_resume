import { redirect } from "next/navigation";

export default function Home() {
  redirect("/resume");

  return (
    <div>
      <h>Resume</h>
    </div>
  );
}
