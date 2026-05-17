import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Compare } from "@/components/Compare";
import { Farms } from "@/components/Farms";
import { Invest } from "@/components/Invest";
import { Sustainability } from "@/components/Sustainability";
import { Footer } from "@/components/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dairyfy — Pure Milk. No Middlemen." },
      {
        name: "description",
        content:
          "Fresh ethical dairy delivered directly from our farms to your home. No preservatives. No middlemen. Just milk, the way it was meant to be.",
      },
      { property: "og:title", content: "Dairyfy — Pure Milk. No Middlemen." },
      {
        property: "og:description",
        content:
          "Premium farm‑to‑home dairy. Transparent. Ethical. Scientifically farmed since 2016.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Story />
      <Compare />
      <Farms />
      <Invest />
      <Sustainability />
      <Footer />
    </main>
  );
}
