import type * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

interface NavSectionProps {
  label: string;
  children: React.ReactNode;
}

export function NavSection({ label, children }: NavSectionProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs font-normal text-muted-foreground">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>{children}</SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
