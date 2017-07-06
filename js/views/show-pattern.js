(function (Views) {

  Views.ShowPattern = function (context) {

    this.create = function() {
      var vertices = generatePolygonVertices({x: 50, y: 50}, 40, 3);
      for(var i = 0; i < vertices.length; i++) {
        context.draw().circle(10).center(vertices[i].x, vertices[i].y).fill("#f06");
      }
      //context.changeView(new Views.DrawPattern(context));
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

})(Game.Views);
