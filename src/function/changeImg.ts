export const changeImg = (e: React.MouseEvent<HTMLImageElement>, num: string, src: string) => {
    const card = document.querySelector(`.s${num}`) || null
    if (card !== null) {
        card.classList.remove(`s${num}`);
    }
    if (e.target instanceof HTMLImageElement) {
        e.target.src = src;
    }
}