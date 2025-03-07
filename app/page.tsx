import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex h-screen flex-col">
          <AppHeader />
          <main className="flex-1 p-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow">
                <h3 className="text-lg font-medium">Total Revenue</h3>
                <p className="text-3xl font-bold">$24,563.00</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow">
                <h3 className="text-lg font-medium">Transactions</h3>
                <p className="text-3xl font-bold">1,234</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow">
                <h3 className="text-lg font-medium">Active Customers</h3>
                <p className="text-3xl font-bold">543</p>
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
