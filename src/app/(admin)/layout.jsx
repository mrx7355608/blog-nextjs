import AdminNavbar from "@/components/navbar/AdminNavbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Mr.X Blog",
    description:
        "Welcome to my blog. I hope you will find something helpful here",
};

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AdminNavbar />
                <main
                    className={`bg-gray-100 min-h-screen p-12 w-full ${inter.className}`}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}
