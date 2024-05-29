import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";

export const metadata = {
    title: "Mr.X Blog",
    description:
        "Welcome to my blog. I hope you will find something helpful here",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
