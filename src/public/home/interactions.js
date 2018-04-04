let popOutShow = () => {
    const menu = document.getElementsByClassName('hamburger-menu')[0];
    const popout = document.getElementsByClassName('popout-menu')[0];

    menu.addEventListener('click', () => {
        const menuOpen = menu.classList.contains('menu-open');
        if (!menuOpen) {
            menu.classList.toggle('menu-open');
            popout.style.opacity = 1;
            popout.style.transform = "translate(0)";
            menu.children[0].style.transform = "translateY(10px)";
            menu.children[2].style.transform = "translateY(-10px)";

            setTimeout(() => {
                menu.children[0].style.transform = "translateY(10px) rotateZ(45deg)";
                menu.children[1].style.opacity = 0;
                menu.children[2].style.transform = "translateY(-10px) rotateZ(-45deg)";
            }, 200);
        } else {
            menu.classList.toggle('menu-open');
            popout.style.opacity = 0;
            popout.style.transform = "translateX(10px) translateY(-10px)";
            menu.children[0].style.transform = "translateY(10px)";
            menu.children[2].style.transform = "translateY(-10px)";

            setTimeout(() => {
                menu.children[0].style.transform = "none";
                menu.children[1].style.opacity = 1;
                menu.children[2].style.transform = "none";
            }, 200);
        }
    });
};

let btnOutlineGrow = () => {
    const signinBtn = document.getElementsByClassName('signin-btn');
    const getStartedBtn = document.getElementsByClassName('get-started-btn-row')[0].children[0];
    const outline = document.getElementsByClassName('btn-outline');
    const signupBtn = document.getElementsByClassName('signup-btn-row')[0].children[1];
    const createMenuBtn = document.getElementsByClassName('create-menu-btn-row')[0].children[0];

    signinBtn[0].addEventListener('mouseover', () => {
        outline[0].style.transform = "scale(1.05,1)";
    });

    signinBtn[0].addEventListener('mouseleave', () => {
        outline[0].style.transform = "none";
    });

    getStartedBtn.addEventListener('mouseover', () => {
        outline[1].style.transform = "scale(1.05,1)";
    });

    getStartedBtn.addEventListener('mouseleave', () => {
        outline[1].style.transform = "none";
    });

    signupBtn.addEventListener('mouseover', () => {
        outline[2].style.transform = "scale(1.05,1)";
    });

    signupBtn.addEventListener('mouseleave', () => {
        outline[2].style.transform = "none";
    });

    createMenuBtn.addEventListener('mouseover', () => {
        outline[3].style.transform = "scale(1.05,1)";
    });

    createMenuBtn.addEventListener('mouseleave', () => {
        outline[3].style.transform = "none";
    });
};

export {popOutShow, btnOutlineGrow}; 