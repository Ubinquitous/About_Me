export const changeImg = (e: any, src: string) => {
    const card = document.querySelectorAll('.s') as any
    for (let i = 0; i < 8; i++) {
        card[i].classList.remove(`s${i + 1}`);
    }
    e.target.src = src;
}