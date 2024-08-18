import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Blog",
    description:
        "Welcome to my blog. I hope you will find something helpful here",
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main
                    className={`bg-black min-h-screen flex items-start justify-center py-12 px-12 w-full ${inter.className}`}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}
