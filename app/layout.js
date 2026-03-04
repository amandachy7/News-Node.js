import "./globals.css";

export const metadata = {
    title: "News App",
    description: "Human Initiative News",
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}