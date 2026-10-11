import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahabub Mollah — Full Stack Developer",
  description: "Portfolio of Mahabub Mollah, Full Stack Developer specializing in PHP, Laravel, React.js, Node.js and MongoDB.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
