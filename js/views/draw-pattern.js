(function (Views) {

  Views.DrawPattern = function (context) {

    this.create = function() {
      console.log("drawing pattern");
    };

    this.destroy = function() {
      console.log("no longer drawing pattern");
    };
  };

})(Game.Views);
