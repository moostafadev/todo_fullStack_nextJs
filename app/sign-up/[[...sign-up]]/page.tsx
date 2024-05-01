import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container flex items-center justify-center mt-8">
      <SignUp path="/sign-up" fallbackRedirectUrl={"/"} />
    </div>
  );
}
