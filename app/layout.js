// app/layout.js
export const metadata = {
  title: "My Credit Repair Web",
  description: "A simple landing page built with Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
