import { MilkWave } from "./MilkWave";

export function Footer() {
  return (
    <footer className="relative bg-[var(--cream)] pt-0">
      <div className="rotate-180">
        <MilkWave />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display text-3xl font-extrabold tracking-tight">Dairyfy</div>
            <p className="mt-3 text-muted-foreground max-w-sm">
              Pure milk. No middlemen. Built from soil up since 2016.
            </p>
          </div>
          <FooterCol title="Company" links={["About", "Story", "Press", "Careers"]} />
          <FooterCol title="Connect" links={["Farms", "Investors", "Support", "Contact"]} />
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Dairyfy. Crafted with care.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Sustainability report</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--moss)]">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
