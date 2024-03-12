import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { roboto } from "@/utils/font";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
	icons:'./favicon.png',
  title: "BABYYEP | I'll be the real-life porn star you want. Call me baby",
  description: "I'll be the real-life porn star you want. Call me baby",
  metadataBase: new URL('https://www.babyyep.com/'),
	category:'porn',
	 generator: 'babyyep',
  applicationName: 'babyyep',
  referrer: 'origin-when-cross-origin',
  keywords: ['babyyep', 'porn','portstar','xxx','star','baby','sex','sexy','18+','20+','x','xx'],
  authors: [{ name: 'Kong' }, { name: 'Kong Nontawat', url: 'https://www.facebook.com/kongnontawat.dev' }],
  creator: 'Kong Nontawat',
  publisher: 'Kong Nontawat',
	alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'th-TH': '/th-TH',
			'uk-UK':'/uk-UK'
    },
  },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<SpeedInsights/>
			<body
				className={`${roboto.className}`}
				x-data={{ open: true, darkMode: false }}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
		
	);
}
