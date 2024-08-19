import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "300", "700", "900"],
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
        <html lang="en">
            <body>
                <Navbar />
                <main
                    className={`bg-black min-h-screen flex items-start justify-center py-12 px-12 w-full ${roboto.className}`}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}
