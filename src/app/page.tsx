import Image from "next/image";
import Button from './components/Button';
import Heading from './components/Heading';
import NewsCard from './components/NewsCard';

export default function Home() {
  return (
    <>

      <section className="flex justify-center text-center my-24">
        <div className="w-[1200px] justify-between items-center flex">
          <Heading title="News" subtitle="最新情報" />
        </div>
      </section>


      <section className="max-w-1200">
        <div className="w-full my-24 flex justify-center flex-col justify-between items-center">
          <div className="flex justify-between items-center w-full mb-8">
            {/* タイトル部分は既存のコンポーネントをそのまま使用 */}
            <Heading title="News" subtitle="最新情報" />
          </div>
          <div className="grid grid-cols-3 gap-x-20 gap-y-8 w-full">
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
        </div>
      </section>

      <section className="max-w-1200">
        <div className="w-full flex justify-center ">
          <div className="py-24 px-20 bg-primary rounded-xl justify-center items-center gap-16 inline-flex">
            <img src="/img/chara.png"></img>
            <div className="w[510px] flex-col justify-center items-start gap-4 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-secondary text-[64px] font-bold font-['Yu Gothic']">What is Kanata?</div>
              </div>
              <div className="pb-4 flex-col justify-center items-start gap-2 flex">
                <div className="text-zinc-800 text-[32px] font-bold font-['Yu Gothic']">「絶景を一緒に探しましょう」</div>
                <div className="text-zinc-800 text-base font-bold font-['Yu Gothic']">探検好きな狐耳Vtuber、彩雲カナタ<br />“楽しい”を探す旅にあなたも加わりませんか？</div>
              </div>
              <Button buttonText="Profileを見る" link="/profile" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center text-center mt-24 mb-48">
        <div className="w-[1200px] justify-between items-center flex">
          <Heading title="SNS" subtitle="“今”をともに旅しよう" />
        </div>
      </section>

    </>
  );
}
