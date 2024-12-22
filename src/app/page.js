import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import Header from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Sidebar } from "@/components/Sidebar";
import HeaderWrapper from "./header-wrapper";

export default function Home() {
  return (
    <HeaderWrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Sidebar />
        <main className="md:col-span-2">
          <About />
          <Projects />
          <Experience />
        </main>
      </div>
    </HeaderWrapper>
  );
}
