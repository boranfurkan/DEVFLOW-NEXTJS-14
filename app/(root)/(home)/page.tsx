import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div className="h1-bold">Welcome To Dewflow</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
