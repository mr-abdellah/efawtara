"use client";

import type * as React from "react";
import { usePathname } from "next/navigation";
import { Clock, type LucideIcon } from "lucide-react";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface NavLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  icon?: LucideIcon;
  children: React.ReactNode;
  isLink?: boolean;
  onClick?: () => void;
  comingSoon?: boolean;
}

export function NavLink({
  icon: Icon,
  children,
  isLink = true,
  onClick,
  comingSoon = false,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  const content = (
    <>
      {Icon && <Icon className="size-4" />}
      <span className="flex-grow mx-2 text-left">{children}</span>
      {comingSoon && (
        <Badge variant="outline" className="ml-auto">
          <Clock
            className="mr-1 opacity-60"
            size={12}
            strokeWidth={2}
            aria-hidden="true"
          />
          Coming Soon
        </Badge>
      )}
    </>
  );

  if (isLink) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className="w-full justify-start"
          isActive={isActive}
        >
          <Link {...props}>{content}</Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        className="w-full justify-start"
        isActive={isActive}
        onClick={onClick}
      >
        {content}
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
