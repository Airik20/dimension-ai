import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/ui/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { SignOutButton } from "@clerk/nextjs";
import { PowerIcon, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a pro plan."
            : "You are on a free plan."}
        </div>
        <div className="flex space-x-4 ">
          <SubscriptionButton isPro={isPro} />
          <Button variant="destructive" className="text-center space-x-2">
            <PowerIcon className="w-4 h-4" />
            <SignOutButton />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
