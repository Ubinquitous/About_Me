import { changeImg } from "./changeImg";

export const mouseUnHover = (e: any, num: string, src: string) => {
    changeImg(e, src)
    const card = document.querySelector(`.c${num}`) as any
    card.classList.add('ff');
    setTimeout(() => {
        card.classList.remove('ff');
    }, 300)
}