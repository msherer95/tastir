// animations performed on page load

let pageLoad = () => {
    // fade in all 3 tiles
    tastirTileAppear();
    platterTileAppear();
    bottleTileAppear();

    // then fade in catch phrase and "Get Started" button
    catchPhraseAppear();
    getStartedBtnAppear();
};

// rotate in tastir tile
let tastirTileAppear = () => {
    let tastirTile = document.getElementById('tastir-tile');

    setTimeout(() => {
        tastirTile.style.opacity = 1;
        tastirTile.style.transform = "rotateX(0deg) rotateY(0deg)";
    }, 1);
};

// translate/fade in platter tile
let platterTileAppear = () => {
    let platterTile = document.getElementById('platter-tile');
    let platterShadow = document.getElementById('platter-tile-shadow');

    setTimeout(() => {
        platterTile.style.transform="translateX(0px)";
        platterTile.style.opacity = 1;
    }, 200);

    setTimeout(() => {
        platterShadow.style.opacity = 1;
    }, 520);
};

// translate/fade in bottle tile
let bottleTileAppear = () => {
    let bottleTile = document.getElementById('bottle-tile');
    let bottleShadow = document.getElementById('bottle-tile-shadow');

    setTimeout(() => {
        bottleTile.style.transform="translateX(0px)";
        bottleTile.style.opacity = 1;
    }, 200);

    setTimeout(() => {
        bottleShadow.style.opacity = 1;
    }, 520);
};

// translate/fade in catch phrase
let catchPhraseAppear = () => {
    let catchPhrase = document.getElementsByClassName('catchphrase-row');
    catchPhrase = catchPhrase[0].children[0];

    setTimeout(() => {
        catchPhrase.style.transform = "translateY(0px)";
        catchPhrase.style.opacity = 1;
    }, 700);
};

// translate/fade in "Get Started" button
let getStartedBtnAppear = () => {
    let getStartedBtn = document.getElementsByClassName('get-started-btn-row');
    getStartedBtn = getStartedBtn[0];

    setTimeout(() => {
        getStartedBtn.style.transform = "translateY(0px)";
        getStartedBtn.style.opacity = 1;
    }, 700);
};

export default pageLoad;
