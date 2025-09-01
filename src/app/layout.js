import Header from "@/components/header";
import Loader from "@/components/Loader";
import { Toaster } from "@/components/ui/sonner";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import { checkUser } from "@/lib/checkUser";

// server-side auth + checkUser

// using our own font 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpendWise",
  description: "One Stop Finance Platform",
  icons:{
    icon:"/favicon.ico",
  }
};

export default async function RootLayout({ children }) {
  await checkUser();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Loader while Clerk initializes */}
          <ClerkLoading>
            <Loader />
          </ClerkLoading>

          {/* Actual app once Clerk is ready */}
          <ClerkLoaded>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Toaster richColors />
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
