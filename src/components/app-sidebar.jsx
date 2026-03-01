"use client";

import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Megaphone,
  SquareTerminal,
  Users,
  Wallet,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Campaigns",
      url: "#",
      icon: Megaphone,
      items: [
        {
          title: "Create Campaign",
          url: "/admin/create-campaign",
        },
        {
          title: "All Campaigns",
          url: "#",
        },
      ],
    },
    {
      title: "Campaigners",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Create Campaigner",
          url: "/admin/create-campaigner",
        },
        {
          title: "All Campaigners",
          url: "#",
        },
      ],
    },
    {
      title: "Funders",
      url: "#",
      icon: Wallet,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
