(function () {

  var handleCanvasIcons = {
    icons: [],
    xStart: 104,
    yStart: 93,
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
      var xCap = Math.floor($('#cw-icons').width() / 126) - 1;
      var yCap = Math.floor($('#cw-icons').height() / 220) - 1;
      var coordinates = {
        x: x + 126 * this.randomizer(0, xCap),
        y: y + 220 * this.randomizer(0, yCap)
      }
      return coordinates;
    },
    setPosition: function (index, icon) {
      var delay = this.randomizer(0,700);
      if (index < this.icons.length / 2) {
        var coords = this.staggerPosition(this.xStart, this.yStart);
      } else if (index >= this.icons.length / 2) {
        var coords = this.staggerPosition(this.xStart+63, this.yStart+110);
      }

      $(icon).css({
        'transform':'translate('+coords.x+'px,'+coords.y+'px)',
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

  $(window).on('load resize', function () {
    handleCanvasIcons.init();
  });
  
})();