(function () {

  var handleCanvasIcons = {
    icons: [],
    xStart: -11,
    yStart: 27,
    populateIcons: function () {
      var self = this;
      $('g[id^="cw"]').each(function () {
        self.icons.push($(this));
      });
    },
    randomizer: function (min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    },
    staggerX: function (x) {
      var cap = Math.floor($('#cw-icons').width() / 84.8) - 1;
      return x + 84.8 * this.randomizer(1, cap);
    },
    staggerY: function (y) {
      var cap = Math.floor($('#cw-icons').height() / 84.8) - 1;
      return y + 84.5 * this.randomizer(0, cap);
    },
    setPosition: function (icon) {
      var x = this.staggerX(this.xStart);
      var y = this.staggerY(this.yStart);
      $(icon).css({'transform':'translate('+x+'px,'+y+'px)'});
      $(icon).removeClass('hide');
    },
    init: function () {
      var self = this;

      this.populateIcons();
      $.each(self.icons, function (i, icon) {
        self.setPosition(icon);
      });

    }
  };

  $(window).on('load resize', function () {
    handleCanvasIcons.init();
  });
  
})();