export const changeImg = (e: any, num: string, src: string) => {
    const card = document.querySelector(`.s${num}`) || null as any
    if (card !== null) {
        card.classList.remove(`s${num}`);
    }
    e.target.src = src;
}