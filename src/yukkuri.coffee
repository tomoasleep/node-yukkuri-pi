exec = require('child_process').exec

module.exports =
  play: (str, callback) ->
    command = "AquesTalkPi #{str} | aplay"
    @_log(command)
    if @options.doPlay
      exec command, (error, stdout, stderr) ->
        callback(error) if callback
    else
      callback(null) if callback

  options:
    doPlay: true

  _log: (str) ->
    console.log(str)

