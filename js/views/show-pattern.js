(function (Views) {

  Views.ShowPattern = function (context) {

    this.create = function() {
      var center = {x: context.getWidth() / 2, y: context.getHeight() / 2}
	  
	  context.draw().rect().attr(context.Styles.LevelBackground).cx(context.getWidth() / 2).cy(context.getHeight() - 33);
	  context.draw().plain(context.getLevel()).cx(context.getWidth() / 2).cy(context.getHeight() - 33);
	  
	  //generate polygon vertices
	  var vertices = generatePolygonVertices(center, 0.4 * context.getWidth(), 5);
      
	  //ceate a circle for each polygon vertex
	  for(var i = 0; i < vertices.length; i++) {
        context.draw().circle().center(vertices[i].x, vertices[i].y).attr(context.Styles.Circle);
      }
	  
	  //create middle circle
	  context.draw().circle().center(center.x, center.y).attr(context.Styles.Circle);

	  //shuffle the vertices in order to get random patterns
	  shuffleArray(vertices);
	  
	  //add the center point to the vertices array in order to generate animations easier
	  vertices.unshift(center);
	  
	  //create a path between the shuffled vertices and animate it
	  var path = context.draw().path(toPath(vertices)).attr(context.Styles.Path);
	  path.stroke({dasharray: path.length(), dashoffset: path.length()});
	  path.animate(1500).attr({'stroke-dashoffset': 0});
	  
	  //context.changeView(new context.Views.DrawPattern());
    };

    this.destroy = function() {
      console.log("no longer showing pattern");
    };

  };

  var generatePolygonVertices = function(center, radius, sides) {
    var polyPoints = [];
	var angle = 2 * Math.PI / sides;
	for (var i = 0; i < sides; i++) {
	  polyPoints.push({
	    x: center.x + radius * Math.sin(i * angle),
		y: center.y + radius * Math.cos(i * angle)
	  });
	}
	return polyPoints;
  };
  
  var toPath = function(points) {
	var path = "";
	path += "M" + points[0].x + " " + points[0].y + " ";
	for(var i = 1; i < points.length; i++) {
		path += "L" + points[i].x + " " + points[i].y + " ";
	}
	path += "Z";
	return path;
  };
  
  //shuffle an array in place
  //returns the shuffled array for convenience
  var shuffleArray = function(array) {
	for (var i = array.length - 1; i > 0; i--) {
	  var j = Math.floor(Math.random() * (i + 1));
	  var temp = array[i];
	  array[i] = array[j];
	  array[j] = temp;
	}
	return array;
  };

})(Game.Views);
