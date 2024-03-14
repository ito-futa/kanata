import Image from "next/image";
import Button from './components/Button';
import Heading from './components/Heading';
import NewsCard from './components/NewsCard';
import Xtimeline from './components/Xtimeline';

export default function Home() {
  return (
    <>

      <section className="max-w-[1200px] mx-auto">
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
          {/* ボタン部分も既存のコンポーネントをそのまま使用 */}
          <Button buttonText="Profileを見る" link="/profile" />
        </div >
      </section >

      <section className="max-w-1200 mx-auto">
        <div className="w-full flex justify-center ">
          <div className="py-24 px-24 bg-primary rounded-xl items-center gap-16 inline-flex">
            <img src="/img/chara.png"></img>
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

      <section className="max-w-[1200px] mx-auto mt-24 mb-48">
        <div className="w-full">
          <Heading title="SNS" subtitle="“今”をともに旅しよう" />
        </div>
        <div className="max-w-[640px] mx-auto mt-24">
          <Xtimeline />
        </div>
      </section>

    </>
  );
}
