import "./globals.css";
import { Red_Hat_Display as redHatDisplay } from "next/font/google";

const redHat = redHatDisplay({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body 
      className={`${redHat.className} bg-background-primary text-content-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}