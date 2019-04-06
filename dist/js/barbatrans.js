import barba from '@barba/core'; // Or nothing if loaded via the browser

// Basic default transition, with no rules and minimal hooks…
barba.init({
    transitions: [{
        leave({
            current,
            next,
            trigger
        }) {
            // Do something with `current.container` for your leave transition
            // then return a promise or use `this.async()`
        },
        enter({
            current,
            next,
            trigger
        }) {
            // Do something with `next.container` for your enter transition
            // then return a promise or use `this.async()`
        },
    }, ],
});

// Dummy example to illustrate rules and hooks…
barba.init({
    transitions: [{
        name: 'dummy transitions',
        // Apply only when leaving `[data-barba-namespace="home"]`.
        namespace: 'home',
        // Apply only when transitioning to `[data-barba-namespace="products | contact"]`.
        to: {
            namespace: ['products', 'contact'],
        },
        // Apply only if clicked link contains `.cta`.
        custom: ({
                current,
                next,
                trigger
            }) =>
            trigger.classList && trigger.classList.contains('cta'),
        // Do leave and enter concurrently.
        sync: true,
        // Available hooks…
        beforeAppear() {},
        appear() {},
        afterAppear() {},
        beforeLeave() {},
        leave() {},
        afterLeave() {},
        beforeEnter() {},
        enter() {},
        afterEnter() {},
    }, ],
});
