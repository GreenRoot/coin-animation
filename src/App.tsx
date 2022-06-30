import React, { useRef, RefObject } from "react";
import { useStyles } from "./styles";
import coinIcon from "./assets/coin.svg";

export default function App() {
  const css = useStyles();

  // Игроки, к кому летят монеты
  const player1 = useRef<HTMLDivElement>(null);
  const player2 = useRef<HTMLDivElement>(null);

  // Банк, откуда летят монеты
  const coinStartPosition = useRef<HTMLImageElement>(null);

  // prettier-ignore
  function animateCoin(player: RefObject<HTMLDivElement>) {

    let count = 0;
    let rndHash = (Math.random() * 1000).toFixed(); //rnd для атрибута, чтоб вдальнейшем удалить лишние теги
    const intervalId = setInterval(function () {

      let styleEl = document.createElement("style");
      styleEl.setAttribute("data", "delCoin" + rndHash);
      if (!coinStartPosition.current || !player.current) {
        return
      }
      styleEl.innerHTML = `@keyframes coinAnimation${rndHash} {
        0% {
          top: ${coinStartPosition.current.getBoundingClientRect().top}px;
          left: ${coinStartPosition.current.getBoundingClientRect().left}px;
          opacity: 0;
          transform: scale(1);
        }        
        25% {
          opacity: 1;
          transform: scale(1.5);
        }        
        75% {
          opacity: 1;
          transform: scale(1.5);
        }
        100% {
          top: ${player.current.getBoundingClientRect().top + (player.current.getBoundingClientRect().height / 2) - (coinStartPosition.current.getBoundingClientRect().height / 2)}px;
          left: ${player.current.getBoundingClientRect().left + (player.current.getBoundingClientRect().width / 2) - (coinStartPosition.current.getBoundingClientRect().width / 2)}px;
          opacity: 0;
          transform: scale(1); 
        }
      }      
    `
      document.head.appendChild(styleEl);
      
      const newCoin = document.createElement("div");
      newCoin.setAttribute("data", "delCoin" + rndHash);
      newCoin.innerHTML = `<img src=${coinIcon} alt="" />`;
      newCoin.style.cssText = `
        animation-name: coinAnimation${rndHash};
        animation-timing-function: cubic-bezier(0.39, 0.82, 0.84, 0.16);
        animation-duration: .5s;
        animation-fill-mode: forwards;
        width: 20px;
        height: 20px;
        position: fixed;
      `;
      document.body.append(newCoin);
      
      count++;
      if (count >= 5) {
        clearInterval(intervalId);
      }
    }, 500 / 5);

    // Удаление лишних тегов через 2 секунды после анимации
    setTimeout(() => {
      const deletCoins = document.querySelectorAll(`[data="delCoin${rndHash}"]`);
      for(let i = 0; i < deletCoins.length; i++) {
        deletCoins[i].remove()
      }
    },2000)
  }

  // prettier-ignore
  return (
    <div className={css.container}>
      <div className={css.bank} style={{transform: 'translate(600px, 400px)'}}>
        <img ref={coinStartPosition} className={css.coin} src={coinIcon} alt="coin" />
        <div className={css.bank__emount}>20</div>
        <div className={css.bank__title}>bank</div>
      </div>
      <div onClick={() => animateCoin(player1)} className={css.btn}>Player 1</div>
      <div onClick={() => animateCoin(player2)} className={css.btn}>Player 2</div>
      <div ref={player1} className={css.player} style={{transform: 'translate(0px, 0px)'}}>a</div>
      <div ref={player2} className={css.player} style={{transform: 'translate(0px, 500px)'}}>b</div>
    </div>
  );
}
