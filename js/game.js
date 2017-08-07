var Game = (function () {

    var svg = null;
    var currentView = null;
    var level = 1;

    var initialize = function(element) {
        //add the center function to ViewBox
        SVG.ViewBox.prototype.center = function () {
            return new SVG.Point(this.width / 2, this.height / 2);
        };

        svg = SVG(element);
        svg.viewbox(0, 0, 360, 640);
    };

    var changeView = function(view, data) {
        if(currentView) {
            currentView.destroy();
        }
        currentView = view;
        currentView.create(data);
    };

    var constants = {
        polygon: {
            width: 144
        },
        circle: {
            radius: 20,
            class: "circle"
        },
        path: {
            width: "2%",
            class: "path"
        },
        level: {
            width: 60,
            height: 70,
            radius: 5,
            class: "level-bg"
        }
    };

    var draw = function() {
        return svg;
    };

    var getLevel = function() {
        return level;
    };

    var setLevel = function(newLevel) {
        level = newLevel;
    };

    var viewbox = function() {
        return svg.viewbox();
    };

    return {
        Views: {},
        constants: constants,
        initialize: initialize,
        changeView: changeView,
        draw: draw,
        getLevel: getLevel,
        setLevel: setLevel,
        viewbox: viewbox
    };

})();
