import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/store/userStore";

export default function UserMenu({ user }) {
  const navigate = useNavigate();
  const { clearUser } = useUserStore();

  const handleClickLogout = () => {
    navigate("/");
    clearUser();
  };
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage
              src={user?.photoURL || "https://github.com/shadcn.png"}
              alt={user?.displayName || "User"}
            />{" "}
            <AvatarFallback>
              {user?.displayName
                ? user.displayName.charAt(0).toUpperCase()
                : ""}
            </AvatarFallback>{" "}
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-20">
          <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => handleClickLogout()}
            >
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
