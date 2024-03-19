import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs }) {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            {blogs.map((b) => (
                <h3 key={b._id}>{b.title}</h3>
            ))}
        </main>
    );
}

export async function getStaticProps() {
    console.log(process.env.SERVER_URL);
    const response = await fetch(`${process.env.SERVER_URL}/published`);
    const result = await response.json();
    return {
        props: {
            blogs: result.data,
        },
    };
}
