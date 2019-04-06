$(function () {

    $(".material-ripple").mousedown(function (e) {
        var ink = new Ink($(this), e);
    });

    function Ink(parent, e) {

        this.el = $("<span>", {
            class: "material-ink"
        });

        parent.prepend(this.el);

        d = Math.max(parent.outerWidth(), parent.outerHeight());
        this.el.css({
            height: d,
            width: d
        });

        x = e.pageX - parent.offset().left - d / 2;
        y = e.pageY - parent.offset().top - d / 2;

        this.el
            .css({
                top: y + "px",
                left: x + "px"
            })
            .addClass("material-ink-animate");

        this.destroy(500);

    }

    Ink.prototype.destroy = function (time) {

        var that = this; // Gotta love this (pun intended)

        setTimeout(function () {
            that.el.remove();
            that = undefined;
        }, time);
    };

});
