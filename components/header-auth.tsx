import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div className="flex gap-4 items-center">
          <div>
            <Badge
              variant={"default"}
              className="font-normal pointer-events-none"
            >
              Please update .env.local file with anon key and url
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              variant={"outline"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant={"default"}
              disabled
              className="opacity-75 cursor-none pointer-events-none"
            >
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    <div className="flex items-center gap-4">
      <div className="hidden sm:block">Hey, {user.user_metadata?.first_name}!</div>
      <div className="flex gap-2">
        <Button asChild size="sm" variant={"outline"} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-foreground hover:bg-foreground/5">
          <Link href="/protected/profile">My Profile</Link>
        </Button>
        <form action={signOutAction}>
          <Button type="submit" size="sm" variant={"outline"} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Sign out
          </Button>
        </form>
      </div>
    </div>
  ) : (
    <div className="flex gap-2">
      <div className="flex items-center space-x-4">
                        <Link href="/sign-in" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-foreground hover:bg-foreground/5">
                          Sign In
                        </Link>
                        <Link href="/sign-up" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                          Sign Up
                        </Link>
                      </div>
    </div>
  );
}