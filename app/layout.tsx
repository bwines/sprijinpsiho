import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SprijinPsiho | Cabinet de Psihologie Aungurence Mihaela Claudia",
  description:
    "Sprijin psihologic pentru adulți și adolescenți. Psihoterapie, consiliere psihologică și evaluare psihologică.",
  metadataBase: new URL("https://sprijinpsiho.ro"),
  openGraph: {
    title: "SprijinPsiho — Un spațiu pentru tine",
    description: "Ascultare. Înțelegere. Echilibru.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
