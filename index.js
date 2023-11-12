const myBtn = document.querySelector('.scroll-btn');

window.onscroll = function() {
    scrollF();
};

function scrollF() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

myBtn.addEventListener('click', function() {
    scrollToTop();
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
