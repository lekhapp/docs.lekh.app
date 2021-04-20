var runtimeInitialized = false;
var initialInitDone = false;
var docReady = false;

function doInitialInit(columns) {
  if (initialInitDone) {
    return;
  }
  if (!runtimeInitialized || !docReady) {
    return;
  }
  var panel = document.getElementById("gridCanvas");
  if (!panel) {
    return;
  }
  setCanvasSize();
  drawGrid(panel);
  var canvas = document.getElementById("drawCanvas");
  initialInitDone = true;
  Module.init(canvas);
  loadBasicTemplates(columns);
  attachEventHandlers();
  /*
  
  $.get("test.lekh", function (data) {
    //console.log(data);
    Module.loadDoc(data);
    setTimeout(function () {
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Module.drawCanvas(ctx);
    }, 0);
  });*/
}

function setCanvasSize() {
  var dpr = window.devicePixelRatio || 1;
  var fx = function (cnv, width, height) {
    cnv.width = width * dpr;
    cnv.height = height * dpr;
    cnv.style.width = width + "px";
    cnv.style.height = height + "px";
    var ctx = cnv.getContext("2d");
    ctx.scale(dpr, dpr);
  }

  var vport = document.getElementById("viewport");
  var rect = vport.getBoundingClientRect();
  var panel = document.getElementById("gridCanvas");
  fx(panel, rect.width, rect.height);
  var canvas = document.getElementById("drawCanvas");
  fx(canvas, rect.width, rect.height);
}

$(function () {
  docReady = true;
  doInitialInit(3);
});

var Module = {
  onRuntimeInitialized: function () {
    runtimeInitialized = true;
    doInitialInit(3);
  }
};