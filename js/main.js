(function () {

  var handleCanvasIcons = {
    icons: [],
    xStart: -85,
    yStart: 205,
    honeycombWidth: 126,
    honeycombHeight: 220,
    populateIcons: function () {
      var self = this;
      $('g[id^="cw"]').each(function () {
        self.icons.push($(this));
      });
    },
    randomizer: function (min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    },
    staggerPosition: function (x, y) {
      var $canvas = $('#cw-icons');
      var xCap = Math.floor($canvas.width() / this.honeycombWidth) + 1;
      var yCap = Math.floor($canvas.height() / this.honeycombHeight) - 2;
      var newCoordinates = {
        x: x + this.honeycombWidth * this.randomizer(0, xCap),
        y: y + this.honeycombHeight * this.randomizer(1, yCap)
      }
      return newCoordinates;
    },
    setPosition: function (index, icon) {
      var delay = this.randomizer(0,700);
      if (index < this.icons.length/2) {
        var coordinates = this.staggerPosition(this.xStart, this.yStart);
      } else if (index >= this.icons.length/2) {
        var coordinates = this.staggerPosition(this.xStart+63, this.yStart+110);
      }

      $(icon).css({
        'transform':'translate('+coordinates.x+'px,'+coordinates.y+'px)',
        'transition': 'opacity 1s ease '+delay+'ms'
      });

      $(icon).removeClass('hide');
    },
    init: function () {
      var self = this;
      this.populateIcons();
      $.each(self.icons, function (i, icon) {
        self.setPosition(i, icon);
      });
    }
  };

  $(window).on('load', function () {
    handleCanvasIcons.init();
  });
  
})();