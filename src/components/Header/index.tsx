import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import UserMenu from "./UserMenu";
import logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import type { User } from "firebase/auth";

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const { getCurrentUser } = useUserStore();

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, [getCurrentUser]);

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 bg-background border-b shadow-sm w-full z-50">
      <div className="text-xl font-bold tracking-tight cursor-pointer">
        <img
          src={logo}
          alt=""
          height="46px"
          width="189px"
          onClick={() => navigate("/home")}
        />
      </div>
      <div className="flex items-center gap-4">
        {/* desk view */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-sm font-medium">
            {user?.displayName || 'User'}
          </span>
          <Avatar>
            <AvatarImage 
              src={user?.photoURL || 'https://github.com/shadcn.png'} 
              alt={user?.displayName || 'User'} 
            />
            <AvatarFallback>
              {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => {
              useUserStore.getState().clearUser();
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>

        {/* mobile view */}
        <div className="md:hidden">
          <UserMenu user={user} />
        </div>
      </div>
    </header>
  );
}
