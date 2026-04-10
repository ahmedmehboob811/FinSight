import {
  LayoutDashboard, FlaskConical, Brain, Cpu,
  MessageSquare, FileBarChart, Lightbulb
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup,
  SidebarGroupContent, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Data Science Lab", url: "/ds-lab", icon: FlaskConical },
  { title: "ML Model Center", url: "/ml-center", icon: Brain },
  { title: "Deep Learning Studio", url: "/dl-studio", icon: Cpu },
  { title: "AI Advisor", url: "/ai-advisor", icon: MessageSquare },
  { title: "Reports", url: "/reports", icon: FileBarChart },
  { title: "Prompt Lab", url: "/prompt-lab", icon: Lightbulb },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarContent className="pt-4">
        <div className={`px-4 mb-6 ${collapsed ? "px-2" : ""}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold font-mono text-sm">F</span>
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-sm gradient-text-primary">FinSight AI</h1>
                <p className="text-[10px] text-muted-foreground">Financial Intelligence</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                      activeClassName="bg-primary/10 text-primary font-medium border border-primary/20"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto px-4 pb-4">
            <div className="glass-card p-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="pulse-dot" />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">System Status</span>
              </div>
              <p className="text-xs text-primary font-mono">All models online</p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
