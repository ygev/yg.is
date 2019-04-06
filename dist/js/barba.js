import barba from '@barba/core'; // Or nothing if loaded via the browser

barba.init({
    transitions: [{
        name: 'legacy-example',
        leave: function (data) {
            var done = this.async();
            TweenMax.to(data.current.container, 1, {
                opacity: 0,
                onComplete: done,
            });
        },
        enter: function (data) {
            var done = this.async();
            TweenMax.from(data.next.container, 1, {
                opacity: 0,
                onComplete: done,
            });
        },
    }, ],
});
