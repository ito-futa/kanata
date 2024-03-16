import { Inter } from "next/font/google";
import Header from './components/Header';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "彩雲カナタ公式サイト",
  description: "vTuber彩雲カナタの公式サイトです♪",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main className={inter.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
