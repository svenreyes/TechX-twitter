'use server'

import { Calendar, CircleUserRound, icons, House, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "User",
    url: "/private",
    icon: CircleUserRound,
  },
  {
    title: "Home",
    url: "/home",
    icon: House,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export async function AppSidebar() {
return (
    <Sidebar className="font-roboto text-white divide-x-4 border-sky-400	">
        <SidebarContent className="bg-black ">
            <SidebarGroup>
                <SidebarGroupLabel className="py-7 tracking-tighter	font-roboto font-bold text-white text-2xl	"> TechX </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem className="py-3"key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span className="font-bold">{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
)
}
