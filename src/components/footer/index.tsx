import Container from "@/components/container";
import Link from "next/link";

export default function Footer() {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearRange = currentYear === startYear ? startYear : `${startYear} - ${currentYear}`;

  return (
    <footer className="bg-slate-700 text-white py-4">
      <Container>
        <div className="flex flex-col items-center justify-center">
          {/* @TODO: Add icon here */}
          <p>Reading Loop</p>
          <p className="text-xs mt-2 text-zinc-300">© {yearRange} Reading Loop. All Rights Reserved. <Link href="/privacy-policy" className="underline">Privacy Policy</Link></p>
        </div>
      </Container>
    </footer>
  );
}