import Image from "next/image";
import Background from './components/Background';
import ParallaxEffect from './components/ParallaxEffect';
import Button from './components/Button';
import Heading from './components/Heading';
import Xtimeline from './components/Xtimeline';
import MainVisual from './components/MainVisual';
import Pickup from './components/Pickup';
import ArticlesListHighlight from './components/ArticlesListHighlight'

export default function Home() {

  return (
    <>
      {/* Background */}
      <Background />

      {/* ParallaxEffect */}
      <ParallaxEffect />

      {/* MainVisual */}
      <MainVisual />

      {/* Pickup */}
      <Pickup />

      {/* News */}
      <ArticlesListHighlight />

      {/* about */}
      <section className="max-w-[1200px] mx-auto" >
        <div className="w-full flex justify-center ">
          <div className="py-24 px-24 bg-primary rounded-xl items-center gap-16 inline-flex">
            <Image
              src="/img/chara_with_camera-01.png"
              alt="カメラを持つ彩雲カナタ"
              width={420}
              height={500}
            />
            <div className="flex-col items-start gap-4 inline-flex">
              <div className="text-secondary text-[64px] font-bold font-['Yu Gothic']">What is Kanata?</div>
              <div className="pb-4 flex-col items-start flex gap-2">
                <div className="text-accessible text-[32px] font-bold font-['Yu Gothic']">「絶景を一緒に探しましょう」</div>
                <div className="text-accessible text-base font-bold font-['Yu Gothic']">探検好きな狐耳Vtuber、彩雲カナタ<br />“楽しい”を探す旅にあなたも加わりませんか？</div>
              </div>
              <Button buttonText="プロフィールを見る" link="/profile" />
            </div>
          </div>
        </div>
      </section>

      {/* SNS */}
      <section className="max-w-[1200px] mx-auto mt-24 mb-48 relative" >
        <div className="w-full">
          <Heading title="SNS" subtitle="“今”をともに旅しよう" />
        </div>
        <div className="max-w-[640px] mx-auto mt-24">
          <Xtimeline />
        </div>
        <div className="absolute right-0">
          <Image
            src="/img/chara_sd-01.png"
            alt="アイキャッチ"
            width={300}
            height={300}
          />
        </div>
      </section>

    </>
  );
}
