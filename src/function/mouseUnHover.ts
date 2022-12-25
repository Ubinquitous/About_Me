import { changeImg } from "./changeImg";

export const mouseUnHover = (e: React.MouseEvent<HTMLImageElement>, num: string, src: string) => {
    changeImg(e, num, src)
    const card = document.querySelector(`.c${num}`) || null
    if (card !== null) {
        card.classList.add('ff');
    }
    setTimeout(() => {
        if (card !== null) {
            card.classList.remove('ff');
        }
    }, 300)
}