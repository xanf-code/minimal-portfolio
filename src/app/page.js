import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Sidebar } from "@/components/Sidebar";
import { QueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-background min-h-screen">
      <div className="container max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Sidebar />
          <main className="md:col-span-2">
            <About />
            <Projects />
            <Experience />
          </main>
        </div>
      </div>
    </div>
  );
}
