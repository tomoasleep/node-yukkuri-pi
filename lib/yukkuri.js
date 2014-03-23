(function() {
  var exec;

  exec = require('child_process').exec;

  module.exports = {
    play: function(str, callback) {
      var command;
      command = "AquesTalkPi " + str + " | aplay";
      this._log(command);
      if (this.options.doPlay) {
        return exec(command, function(error, stdout, stderr) {
          if (callback) {
            return callback(error);
          }
        });
      } else {
        if (callback) {
          return callback(null);
        }
      }
    },
    options: {
      doPlay: true
    },
    _log: function(str) {
      return console.log(str);
    }
  };

}).call(this);
