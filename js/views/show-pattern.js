(function (Views) {

    Views.ShowPattern = function (context) {

      this.create = function() {
        console.log("showing pattern");
        context.changeView(new Views.DrawPattern(context));
      };

      this.destroy = function() {
        console.log("no longer showing pattern");
      };

    };

})(Game.Views);
