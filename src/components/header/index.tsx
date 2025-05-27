import Link from "next/link";
import Container from "@/components/container";

export default function Header() {
  return (
    <header className="bg-green-50 py-8">
      <Container>
        <Link href="/">
          <p>Reading Loop AI</p>
        </Link>
      </Container>
    </header>
  );
}
