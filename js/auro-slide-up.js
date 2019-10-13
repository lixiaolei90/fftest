!function () {
    let specialTags = document.querySelectorAll('[data-x]');
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
}

findClosestAndRemoveOffset();

window.addEventListener('scroll',function(){
    findClosestAndRemoveOffset();
})

function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for (let i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    // for (let i = 0; i < specialTags.length; i++) {
    //     specialTags[i].classList.remove('active');
    // }
    specialTags[minIndex].classList.remove('offset');
    // specialTags[minIndex].classList.add('active');
    let id = specialTags[minIndex].id;

    let a = document.querySelector('a[href=\"#' + id + '\"]');
    let li = a.parentNode;
    let brothersAdnme = li.parentNode.children;
    for (let i = 0; i < brothersAdnme.length; i++) {
        brothersAdnme[i].classList.remove('highlight');
    }
    li.classList.add('highlight');

}


let liTags = document.querySelectorAll('nav.menu > ul > li');
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (event) {
        let li = event.currentTarget
        li.classList.add('active')
    }
    liTags[i].onmouseleave = function (event) {
        let li = event.currentTarget
        li.classList.remove('active')
    }

}
}
.call()
