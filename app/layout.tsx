import "./globals.css";
import { Catamaran } from "next/font/google";

const catamaran = Catamaran({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-catamaran",
});

export const metadata = {
  title: "Scholauranstein Productivity Plug | Home",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${catamaran.className} font-sans text-grey_main`}>
        {children}
      </body>
    </html>
  );
}
