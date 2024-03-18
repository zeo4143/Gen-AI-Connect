"use client";

import { usePathname } from "next/navigation";
import NavItems from "@/components/nav-items";
import { AiOutlineDashboard } from "react-icons/ai";
import ChangeTheme from "@/components/theme/change-theme";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {MdKeyboardArrowLeft, MdLogout, MdOutlineSettings } from "react-icons/md";



interface ProtectedRoutesLayoutProps {
  children: React.ReactNode;
}

const ProtectedRoutesLayout = ({ children }: ProtectedRoutesLayoutProps) => {
  const pathName = usePathname();
  return (
    <div className="w-full h-full flex">
      <aside className="px-2 border flex flex-col">
        <header className="px-5 py-4 flex items-center justify-between">
          <h3 className=" font-bold">Gen-AI Connect</h3>
          <ChangeTheme />
        </header>
        <nav className="flex-1 w-[250px] p-2 flex flex-col">
          <NavItems
            name="Dashboard"
            url="/dashboard"
            Icon={<AiOutlineDashboard className="w-[18px] h-[18px]" />}
            isActive={pathName === "/dashboard"}
          />
          <NavItems
            name="Database Configuration"
            url="/db-config"
            Icon={<AiOutlineDashboard className="w-[18px] h-[18px]" />}
            isActive={pathName === "/db-config"}
          />
        </nav>
        <footer className="pb-3.5">
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="hover:bg-accent data-[state=open]:bg-accent"
            >
              <div className="w-full p-2 flex items-center gap-2 rounded-lg cursor-pointer">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary">
                    <FaUser className="text-secondary" />
                  </AvatarFallback>
                </Avatar>
                <span className="font-semibold text-sm">
                  {"Shaik Mahammad Rafi"}
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="my-2 p-2 w-[250px]" align="center">
            <DropdownMenuItem className=" py-2 flex items-center gap-2 font-semibold cursor-pointer">
                <MdOutlineSettings className="h-5 w-5"/>
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="m-2"/>
              <DropdownMenuItem className="py-2 flex items-center gap-2 font-semibold cursor-pointer">
                <MdLogout className="h-5 w-5"/>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </footer>
      </aside>
      {/* <span>hello</span> */}
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default ProtectedRoutesLayout;
