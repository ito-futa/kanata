import { Inter } from "next/font/google";
import { Kiwi_Maru } from "next/font/google";

// InterフォントとKiwi Maruフォントを設定
const inter = Inter({ subsets: ["latin"] });
const kiwiMaru = Kiwi_Maru({ weight: "400", subsets: ["latin"] });

import Header from './components/Header';
import Footer from './components/Footer';

// CSSファイルのインポート
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

export const metadata = {
  title: "彩雲カナタ公式サイト",
  description: "vTuber彩雲カナタの公式サイトです♪",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main className={kiwiMaru.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
