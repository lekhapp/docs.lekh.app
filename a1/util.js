
function drawGrid(panel) {
  var wd = panel.width;
  var ht = panel.height;
  var ctx = panel.getContext('2d');
  var step = 16;
  ctx.lineWidth = 0.1;
  ctx.beginPath();
  for (i = 0; i < ht; i+= step) {
    ctx.moveTo(0, i);
    ctx.lineTo(wd, i);
  }
  for (i = 0; i < wd; i+= step) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, ht);
  }
  ctx.stroke();
}


