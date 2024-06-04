const Icon = document.getElementById('coin');
const tossBtn = document.getElementById('toss-button');
const result = document.querySelector('.result');
Icon.insertAdjacentElement('afterend', result);
tossBtn.addEventListener('click', () => {
    tossBtn.disabled = true;
    tossCoinFunction();
});

function tossCoinFunction() {
    const randomVal = Math.random();
    const faceCoin = randomVal < 0.5 ? 'heads' : 'tails';
    const imageUrl = faceCoin === 'heads' ?
'heads.jpeg':
'tails.jpeg';

    Icon.classList.add('flip');
    setTimeout(() => {
        Icon.innerHTML =
            `<img src="${imageUrl}" alt="${faceCoin}">`;
        Icon.classList.remove('flip');
        setTimeout(() => {
            result.textContent = `Result: ${faceCoin}`;
            result.computedStyleMap.opacity = 1;
            tossBtn.disabled = false;

        }, 500);

    }, 1000);
}