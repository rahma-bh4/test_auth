import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input name="firstName" placeholder="John" required />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input name="lastName" placeholder="Doe" required />
            </div>
          </div>
          
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" type="email" required />
          
          <Label htmlFor="phone">Phone Number</Label>
<Input 
  name="phone" 
  placeholder="+1234567890" 
  type="tel" 
  pattern="^\+[0-9]{1,15}$"
  title="Phone number must start with + followed by country code and number"
  required 
/>
<p className="text-xs text-muted-foreground mt-1">Include country code with + prefix (e.g., +1 for US)</p>
  <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}