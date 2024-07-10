import { Title } from "@solidjs/meta";
import Dashboard from "~/components/Dashboard";

export default function Home() {
  return (
    <main class={"min-w-min mx-auto px-4 mb-20 mt-10 relative"}>
      <Title>Dashboard</Title>
      <Dashboard />
    </main>
  );
}
