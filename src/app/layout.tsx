import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahabub Mollah — Principal Software Engineer",
  description: "Portfolio of Mahabub Mollah, Principal Software Engineer with 8+ years building cloud-native applications, microservices, and full-stack systems on AWS and Azure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* Apply saved theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
