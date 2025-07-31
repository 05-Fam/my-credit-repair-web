export const metadata = {
  title: "My Credit Repair Web",
  description: "A simple landing page built with Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Credit Repair Web</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
