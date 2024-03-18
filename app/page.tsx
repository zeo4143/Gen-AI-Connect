"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ChangeTheme from "@/components/theme/change-theme";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes";

export default function Home() {
  const {setTheme} = useTheme()
  return (
    <main>
     <ChangeTheme/>
    </main>
  );
}
