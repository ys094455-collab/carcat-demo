export const metadata = {
  title: "MyCarParts Demo",
  description: "Auto spare parts catalogue demo"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
