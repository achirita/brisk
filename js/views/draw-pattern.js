(function (Views) {

  Views.DrawPattern = function (context) {

    this.create = function(data) {
	  var vertices = data;
	  var center = {x: context.getWidth() / 2, y: context.getHeight() / 2}
		
	  //ceate a circle for each polygon vertex
	  for(var i = 0; i < vertices.length; i++) {
        context.draw().circle().center(vertices[i].x, vertices[i].y).attr(context.Styles.Circle);
      }
	  
	  //create middle circle
	  var draggable = context.draw().circle().center(center.x, center.y).attr(context.Styles.Circle);
	  
	  draggable.draggable().on("dragmove", function(e) {
		e.preventDefault();
		this.cx(e.detail.p.x);
		this.cy(e.detail.p.y);
	  });
	  
	  
    };

    this.destroy = function() {

    };
  };

})(Game.Views);
