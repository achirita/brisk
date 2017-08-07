var Game = (function () {

  var svg = null;
  var currentView = null;
  var level = 1;
  
  var initialize = function(element) {
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

  var draw = function() {
    return svg;
  };

  var getLevel = function() {
	return level;
  };
  
  var setLevel = function(newLevel) {
	level = newLevel;
  };
  
  var getWidth = function() {
	return svg.viewbox().width;
  };
  
  var getHeight = function() {
	return svg.viewbox().height;
  };
  
  return {
    Views: {},
	Styles: {},
    initialize: initialize,
    changeView: changeView,
    draw: draw,
	getLevel: getLevel,
	setLevel: setLevel,
	getWidth: getWidth,
	getHeight: getHeight
  };

})();
