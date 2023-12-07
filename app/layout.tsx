// Main Navbar layout
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // AuthProvider check if user is in session
        <AuthProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Navbar />
                    {children}
                </body>
            </html>
        </AuthProvider>
    );
}
