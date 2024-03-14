import Image from "next/image";
import Button from './components/Button';
import Heading from './components/Heading';
import NewsCard from './components/NewsCard';
import Xtimeline from './components/Xtimeline';
import GradientText from './components/GradientText';

export default function Home() {

  return (
    <>
      {/* MainVisual */}
      <section className="mx-auto pt-28 pb-24 max-w-[1200px] h-[930px] relative bg-white border-8">
        <div className="z-10 max-w-[1000px] h[600px] mx-auto">
          <Image
            src="/img/mv_bg-01.jpg"
            objectFit="cover"
            className="rounded-xl"
            alt="メインビジュアル背景の海"
            layout="responsive"
            width={1000}
            height={600}
          />
        </div>
        <div className="z-20 w-1/2 absolute transform -translate-y-1/4 top-[30%] left-1/2 -translate-x-1/2">
          <Image
            src="/img/mv-01.png"
            className=""
            alt="メインビジュアルのキャラ画像"
            layout="responsive"
            width={700}
            height={600}
            objectFit='contain'
          />
        </div>
        <div className="absolute z-30 transform -translate-y-1/4 top-[58%] left-[22%] -translate-x-1/2"><GradientText text="終わらない旅へ" /></div>
        <div className="absolute z-30 transform -translate-y-1/4 top-[70%] left-[28%] -translate-x-1/2"><GradientText text="ともに出かけよう" /></div>
      </section>



      {/* News */}
      <section className="max-w-[1200px] mx-auto" >
        <div className="w-full my-24 flex justify-center flex-col items-center">
          <div className="w-full mb-8">
            <Heading title="News" subtitle="最新情報" />
          </div>
          <div className="grid grid-cols-3 gap-y-20 justify-items-center w-full mb-20">
            <NewsCard
              imageUrl="https://via.placeholder.com/320x180"
              category="Blog"
              date="2024/03/07"
              title="初配信を行いました！今日も元気でご飯がおいしいです！"
            />
            <NewsCard
              imageUrl="https://via.placeholder.com/320x180"
              category="Blog"
              date="2024/03/07"
              title="初配信を行いました！今日も元気でご飯がおいしいです！"
            />
            <NewsCard
              imageUrl="https://via.placeholder.com/320x180"
              category="Blog"
              date="2024/03/07"
              title="初配信を行いました！今日も元気でご飯がおいしいです！"
            />
            <NewsCard
              imageUrl="https://via.placeholder.com/320x180"
              category="Blog"
              date="2024/03/07"
              title="初配信を行いました！今日も元気でご飯がおいしいです！"
            />
            <NewsCard
              imageUrl="https://via.placeholder.com/320x180"
              category="Blog"
              date="2024/03/07"
              title="初配信を行いました！今日も元気でご飯がおいしいです！"
            />
            <NewsCard
              imageUrl="https://via.placeholder.com/320x180"
              category="Blog"
              date="2024/03/07"
              title="初配信を行いました！今日も元気でご飯がおいしいです！"
            />
            <NewsCard
              imageUrl="https://via.placeholder.com/320x180"
              category="Blog"
              date="2024/03/07"
              title="初配信を行いました！今日も元気でご飯がおいしいです！"
            />
            <NewsCard
              imageUrl="https://via.placeholder.com/320x180"
              category="Blog"
              date="2024/03/07"
              title="初配信を行いました！今日も元気でご飯がおいしいです！"
            />
            <NewsCard
              imageUrl="https://via.placeholder.com/320x180"
              category="Blog"
              date="2024/03/07"
              title="初配信を行いました！今日も元気でご飯がおいしいです！"
            />
          </div>
          <Button buttonText="Profileを見る" link="/profile" />
        </div>
      </section>

      {/* about */}
      <section className="max-w-[1200px] mx-auto" >
        <div className="w-full flex justify-center ">
          <div className="py-24 px-24 bg-primary rounded-xl items-center gap-16 inline-flex">
            <Image
              src="/img/chara_with_camera-01.png"
              className="w-[420px]"
              alt="カメラを持つ彩雲カナタ"
              width={420}
              height={500}
              objectFit='contain'
            />
            <div className="flex-col items-start gap-4 inline-flex">
              <div className="text-secondary text-[64px] font-bold font-['Yu Gothic']">What is Kanata?</div>
              <div className="pb-4 flex-col items-start flex gap-2">
                <div className="text-accessible text-[32px] font-bold font-['Yu Gothic']">「絶景を一緒に探しましょう」</div>
                <div className="text-accessible text-base font-bold font-['Yu Gothic']">探検好きな狐耳Vtuber、彩雲カナタ<br />“楽しい”を探す旅にあなたも加わりませんか？</div>
              </div>
              <Button buttonText="Profileを見る" link="/profile" />
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
            className="w-[300px]"
            alt="アイキャッチ"
            width={300}
            height={300}
            objectFit='contain'
          />
        </div>
      </section>

    </>
  );
}
