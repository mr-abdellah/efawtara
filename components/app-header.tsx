"use client";

import type React from "react";

import { ChevronDown, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Make sure to import the ThemeToggle component
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export function AppHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  // You can replace this with your actual auth logic
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: null,
  };

  const handleLogout = async () => {
    // Replace with your actual logout logic
    console.log("Logging out...");
  };

  return (
    <header
      className={cn(
        "flex h-16 items-center justify-between gap-4 border-b bg-background px-4 w-full",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <SidebarTrigger />
      </div>
      <div className="flex flex-1 items-center justify-end gap-4">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 p-1 hover:bg-accent"
            >
              <Avatar className="size-8">
                <AvatarImage src={user?.avatar || ""} />
                <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <span className="hidden md:block">{user?.name}</span>
              <ChevronDown className="size-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild>
              <Link className="flex items-center" href="/dashboard/profile">
                <User className="mr-2 size-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
