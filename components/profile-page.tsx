import UserProfile from "@/components/user-profile";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}