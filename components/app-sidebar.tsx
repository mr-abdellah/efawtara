"use client";

import type * as React from "react";
import {
  BarChart3,
  CreditCard,
  FileText,
  LayoutDashboard,
  Receipt,
  ScrollText,
  Building,
  User,
  Wallet,
  ArrowDownUp,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavSection } from "./nav-section";
import { NavLink } from "./nav-link";
import { NavUser } from "./nav-user";

import { News, type NewsArticle } from "@/components/ui/sidebar-news";

const DEMO_ARTICLES: NewsArticle[] = [
  {
    href: "https://dub.co/changelog/regions-support",
    title: "Regions support in analytics",
    summary: "You can now filter your analytics by regions",
    image: "https://assets.dub.co/changelog/regions-support.png",
  },
  {
    href: "https://dub.co/blog/soc2",
    title: "Dub is now SOC 2 Type II Compliant",
    summary:
      "We're excited to announce that Dub has successfully completed a SOC 2 Type II audit to further demonstrate our commitment to security.",
    image: "https://assets.dub.co/blog/soc2.jpg",
  },
  {
    href: "https://dub.co/changelog/utm-templates",
    title: "UTM Templates",
    summary:
      "You can now create UTM templates to streamline UTM campaign management across your team.",
    image: "https://assets.dub.co/changelog/utm-templates.jpg",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const sidebarLinks = {
    main: [
      {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Statistics",
        url: "/dashboard/statistics",
        icon: BarChart3,
      },
    ],
    payments: [
      {
        title: "Spontaneous Payments",
        url: "/dashboard/spontaneous-payments",
        icon: CreditCard,
      },
      {
        title: "Payment Forms",
        url: "/dashboard/payment-forms",
        icon: ScrollText,
        comingSoon: true,
      },
      {
        title: "Express Invoices",
        url: "/dashboard/express-invoices",
        icon: Receipt,
      },
      {
        title: "Detailed Invoices",
        url: "/dashboard/detailed-invoices",
        icon: FileText,
      },
    ],
    finance: [
      {
        title: "Payouts",
        url: "/dashboard/payouts",
        icon: Wallet,
      },
      {
        title: "Transactions",
        url: "/dashboard/transactions",
        icon: ArrowDownUp,
      },
    ],
    account: [
      {
        title: "Company Profile",
        url: "/dashboard/company",
        icon: Building,
      },
      {
        title: "User Profile",
        url: "/dashboard/profile",
        icon: User,
      },
    ],
  };

  return (
    <Sidebar collapsible="offcanvas" variant="floating" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavSection label="Overview">
          {sidebarLinks.main.map((link) => (
            <NavLink key={link.title} href={link.url} icon={link.icon}>
              {link.title}
            </NavLink>
          ))}
        </NavSection>

        <NavSection label="Payments">
          {sidebarLinks.payments.map((link) => (
            <NavLink key={link.title} href={link.url} icon={link.icon}>
              {link.title}
            </NavLink>
          ))}
        </NavSection>

        <NavSection label="Finance">
          {sidebarLinks.finance.map((link) => (
            <NavLink key={link.title} href={link.url} icon={link.icon}>
              {link.title}
            </NavLink>
          ))}
        </NavSection>

        <NavSection label="Account">
          {sidebarLinks.account.map((link) => (
            <NavLink key={link.title} href={link.url} icon={link.icon}>
              {link.title}
            </NavLink>
          ))}
        </NavSection>
      </SidebarContent>
      <SidebarFooter>
        <News articles={DEMO_ARTICLES} />
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
