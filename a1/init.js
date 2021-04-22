var runtimeInitialized = false;
var initialInitDone = false;
var docReady = false;

window.wsmanager = {
  status: "",
}

var apiBasePath = 'https://api.lekh.app/v1';
//var apiBasePath = 'http://localhost:3000/v1';

const docUrl = 'wss://api.lekh.app/v1/connect/ds1/c267362c-84b1-48bb-9d48-fb05f97ec0fe';

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
  startDoc();
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

function startDoc() {
  var url = new URL(window.location);
  var docid = url.searchParams.get('docid');
  if (docid) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var obj = JSON.parse(xhttp.responseText);
          wsmanager.start(docid, obj.location);
        }
      };
      var url = apiBasePath + "/docs/" + docid;
      xhttp.open("POST", url);
      xhttp.send();
  } else {
    var np = url.searchParams.get('_new');
    if (np == 'true') {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var obj = JSON.parse(xhttp.responseText);
          var url = new URL(window.location);
          var newUrl = url.origin + "/?docid=" + obj.docid;
          window.location = newUrl;
        }
      };
      var url = apiBasePath + "/docs"
      xhttp.open("POST", url);
      xhttp.send();
    }
  }
}

wsmanager.start = function (docid, location) {
  var timer;

  const ws = new window.WebSocket(location);
  Module.startDoc(docid);

  wsmanager.send = function(docid, data) {
    ws.send(data);
    return true;
  }

  ws.onopen = function(event) {
      console.log('connection opened: ', event);
      timer = window.setInterval(function() {
          ws.send('{}');
      }, 15000);
  };

  ws.onmessage = function(event) {
      window.Module.updateDoc(event.data);
      drawCanvas();
  };

  ws.onclose = function(event) {
      console.log('connection closed:', event);
      window.clearInterval(timer);
  };

  ws.onerror = function(event) {
      console.log('connection error: ', event);
      window.clearInterval(timer);
  };
}