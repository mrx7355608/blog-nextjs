import AdminNavbar from "@/components/navbar/AdminNavbar";
import "@/styles/globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "300", "700"],
});

export const metadata = {
    title: "Mr.X Blog",
    description:
        "Welcome to my blog. I hope you will find something helpful here",
};

export default function DashboardLayout({ children }) {
    return (
        <html lang="en" data-theme="dark">
            <body>
                <AdminNavbar />
                <main className={`min-h-screen p-12 w-full ${ibm.className}`}>
                    {children}
                </main>
            </body>
        </html>
    );
}
