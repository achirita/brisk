var Game = (function () {

  var svg = null;
  var currentView = null;

  var initialize = function(element) {
    svg = SVG(element);
  };

  var changeView = function(view) {
    console.log("changing view");
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
