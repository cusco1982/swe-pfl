import "@/styles/globals.css";
import { Suspense } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


export const metadata = {
  title: "Julian Ayllon | Software Developer",
  description: "Software Engineer | Backend Developer",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased tracking-tight bg-white`}>
        <div className="min-h-screen flex flex-col overflow-hidden grow">
          <Navbar />


          
          <Suspense fallback={<div>Loading...</div>}>

            {children}

          </Suspense>



          <Footer />
        </div>
      </body>
    </html>
  );
}
