var Game = (function () {

  var svg = null;
  var currentView = null;

  var initialize = function(element) {
    svg = SVG(element);
    svg.viewbox(0, 0, 100, 100);
  };

  var changeView = function(view) {
    if(currentView) {
      currentView.destroy();
    }
    currentView = view;
    currentView.create();
  };

  var draw = function() {
    return svg;
  };

  return {
    Views: {},
    initialize: initialize,
    changeView: changeView,
    draw: draw
  };

})();
