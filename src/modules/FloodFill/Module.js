/*
 * MS Paint like flood filling
 */
module.exports = function FloodFill(options,UI) {
  options = options || {};
  options.title = "Flood Fill";
  var output;
  var fill = require('flood-fill');
  var getPixels = require('get-pixels');
  var savePixels = require('save-pixels');
  UI.onSetup(options.step);

  function draw(input,callback) {
    UI.onDraw(options.step);
    const step = this;

    getPixels(input.src,function(err,pixels){
      if(err) throw err;
      document.result = fill(pixels,0,0,0);
    });

  }

  return {
    options: options,
    draw: draw,
    output: output,
    UI: UI
  }
}
