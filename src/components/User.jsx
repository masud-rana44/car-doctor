import { Popover, Button } from "@radix-ui/themes";
import { useAuth } from "../contexts/AuthContext";

export const User = () => {
  const { user, logOut } = useAuth();

  return (
    <Popover.Root>
      <Popover.Trigger>
        <div>
          <img
            src={user.photoURL}
            className="h-8 w-8 rounded-full object-cover cursor-pointer"
          />
        </div>
      </Popover.Trigger>
      <Popover.Content style={{ width: 260 }}>
        <div className="space-y-4">
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <Button onClick={logOut} className="cursor-pointer">
            Logout
          </Button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};
