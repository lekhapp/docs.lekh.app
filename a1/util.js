
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

function generateUUID() {
  var d = new Date().getTime();//Timestamp
  var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}



