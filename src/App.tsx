"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "亲爱的，我真的很感激你在我生活中的存在，你让我的世界变得更加美好。",
      "今天看到你不开心，我心里也很难受。告诉我发生了什么，我会尽力让你感觉好一些。",
      "我爱你，不仅仅是因为你的外表，更是因为你那美好的灵魂。",
      "我愿意陪着你，无论是欢笑还是泪水，我都会在你身边。",
      "你是我的支柱，我的动力，我的一切。没有你，我的生活就不完整。",
      "请原谅我如果我有时候做错了事，我会努力改正的，因为我在乎你。",
      "和你在一起的每一刻都是我最珍贵的时光，我希望我们能一直走下去。",
      "你的微笑是我最喜欢的风景，我愿意为了看到你微笑而做任何事情。",
      "我相信我们之间的爱可以战胜一切，无论面对什么困难，我们都会一起度过。",
      "亲爱的，你知道吗？我为能够和你在一起感到无比幸福，我会永远珍惜我们的爱情。",
      "在你身边，我感觉到了安心和温暖，你是我生命中不可或缺的一部分。",
      ":((((",
      "你的存在让我的生活充满了意义和动力，我会永远珍惜我们之间的每一刻。",
      "每天醒来看到你的笑容，是我最大的幸福，我会用尽全力让你每天都开心。",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            WOOOOOO!!! I love you pookie!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my special person?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
