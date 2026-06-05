import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-40">
      <div className="container-narrow flex items-center justify-between h-20">
        <Link href="/" aria-label="cardfinder24 Startseite" className="flex items-center">
          <Image src="/logo.svg" alt="cardfinder24" width={200} height={38} priority className="h-8 w-auto" />
        </Link>
        <a href="#karten" className="btn-ghost !py-2.5 !px-5 !min-h-0 text-sm">
          Karten ansehen
        </a>
      </div>
    </header>
  );
}
