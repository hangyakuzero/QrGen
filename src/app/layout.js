import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Generate Qr code",
  description: "Made by Maharshi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <div data-theme="cmyk">
        {children}
        </div>
        </body>
    </html>
  );
}
