import { changeImg } from "./changeImg";

export const mouseUnHover = (e: any, num: string, src: string) => {
    changeImg(e, num, src)
    const card = document.querySelector(`.c${num}`) || null as any
    if (card !== null) {
        card.classList.add('ff');
    }
    setTimeout(() => {
        if (card !== null) {
            card.classList.remove('ff');
        }
    }, 300)
}