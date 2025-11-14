import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import UserMenu from "./UserMenu";
import logo from "../../../public/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
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
          <span className="text-sm font-medium">Rupali Vide</span>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>RV</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm" onClick={() => navigate("/")}>
            Logout
          </Button>
        </div>

        {/* mobile view */}
        <div className="md:hidden">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
