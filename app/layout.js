import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <Link href = "/">Home</Link>
            </li>
            <li>
              <Link href = "/reservar">Reservar</Link>
            </li>
            <li>
              <Link href = "/quienes-somos">Quienes somos</Link>
            </li>
            <li>
              <Link href = "/ayuda">Ayuda</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
