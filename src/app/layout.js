import Header from "@/components/header";
import Loader from "@/components/Loader";
import { Toaster } from "@/components/ui/sonner";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

// using our own font 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpendWise",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}
        > 
          {/* Till the time clerk is beign loaded i want to show a loader */}
          <ClerkLoading>
            <Loader/>
          </ClerkLoading>
          {/* When the clerk gets loader then show the enitre website content */}
          <ClerkLoaded>
            {/* Header */}
            <Header/>
            <main className="min-h-screen">
              {children}
            </main>
            <Toaster richColors/>
            {/* footer */}
            <footer className="bg-blue-50 py-12">
              <div className="container mx-auto px-4 text-center text-grey-600">
                <p>Made with 💗 by Priyanshu Saha</p>
              </div>
            </footer>
          </ClerkLoaded>

        </body>
      </html>
    </ClerkProvider>
  );
}
