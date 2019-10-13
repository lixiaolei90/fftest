!function(){
    var view = document.querySelector('nav.menu');
    var controller = {
        view : null,
        aTags: null,
        initAnimation: function() {
            function animate(time) {
                requestAnimationFrame(animate);
                
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement:function(element){
            
            let top = element.offsetTop;

            let n = 20;//一共动25次
            // let duration = 500 / n //动一次多长时间
            let currentTop = window.scrollY;
            let targetTop = top - 80;
            var s = targetTop - currentTop;
            var t = Math.abs((s / 100) * 300);
            if (t > 500) { t = 500 }
            var coords = { y: currentTop };
            // console.log(coords)
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        },
        bindEvents: function() {
            let aTags = this.view.querySelectorAll('nav.menu > ul > li > a');
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick =  function(event) {
                    
                    event.preventDefault();
                    let a = event.currentTarget;
                    let href = a.getAttribute('href');
                    let element = document.querySelector(href);
                    
                    controller.scrollToElement(element);
                    
                   
                }
            }
        },
        init :function(view) {
            this.view = view;
            this.initAnimation();
            this.bindEvents();
        }
    }
    controller.init(view);

}.call()

