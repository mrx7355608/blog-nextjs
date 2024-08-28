import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "300", "700"],
});

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
        <html lang="en" data-theme="dark">
            <body>
                <Navbar />
                <main
                    className={`min-h-screen flex items-start justify-center py-12 px-12 w-full ${ibm.className}`}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}
