function updateCarousel(currentIndex) {
    const h1 = document.querySelectorAll('h1');
    h1.forEach((list) => {list.classList.remove('selected');})
    h1[currentIndex + 1].classList.add('selected');

    const tile = document.querySelectorAll('.tile');
    tile.forEach((list) => {list.classList.remove('selected');})
    tile[currentIndex].classList.add('selected');

    const slider = document.querySelector('.tiles');
    const searchbar = document.querySelector('.searchbar');
    if (currentIndex == 0) {
        const bigTile = document.querySelectorAll('.tile.big');
        bigTile.forEach((list) => {list.style.margin = '3vw 7vw';})
        slider.style.transform = 'translateX(0)';
        searchbar.style.display = 'flex';
    }
    if (currentIndex > 0 && currentIndex < 3) {
        const tileWidth = document.querySelector('.tile').offsetWidth;
        const bigTile = document.querySelectorAll('.tile.big');
        bigTile.forEach((list) => {list.style.margin = '3vw 7vw';})
        const newPosition = (-currentIndex * tileWidth) - (window.innerWidth * .14 * currentIndex);
        slider.style.transform = `translateX(${newPosition}px)`;
        searchbar.style.display = 'none';
    }
    if (currentIndex > 2) {
        const tileWidth = document.querySelector('.tile').offsetWidth;
        const tileBigWidth = document.querySelector('.tile.big').offsetWidth;
        const behindIndex = currentIndex - 2;
        const bigTile = document.querySelectorAll('.tile.big');
        bigTile.forEach((list) => {list.style.margin = '3vw 7vw';})
        bigTile[currentIndex - 3].style.margin = '3vw 0.05vw';
        
        const newPosition = (-2 * tileWidth) - (window.innerWidth * .14 * (currentIndex - 1)) - (tileBigWidth * behindIndex) - (window.innerWidth * .001);
        slider.style.transform = `translateX(${newPosition}px)`;
        searchbar.style.display = 'none';
    }
}