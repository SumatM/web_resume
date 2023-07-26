import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Sumat Mallick Web Resume",
  description:
    "Web developer with expertise in HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js & Next.js. Building robust and responsive web pages.",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
