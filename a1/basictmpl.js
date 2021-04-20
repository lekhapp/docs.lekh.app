async function loadTemplate(name) {
  await fetch(name)
    .then(response => response.json())
    .then(response => {
      Module.libraryStore().initObjects(JSON.stringify(response));
    })
}

async function loadAll() {
  await loadTemplate("templates/v4/templates.json")
  await loadTemplate("templates/v4/basic.json")
  await loadTemplate("templates/v4/arrow.json")
  await loadTemplate("templates/v4/callout.json")
  await loadTemplate("templates/v4/flowchart.json")
  await loadTemplate("templates/v4/connection_arrows.json")
}

function loadBasicTemplates(columns) {
  loadAll()
    .then(function () {
      Module.libraryStore().init(columns);
      Module.libraryStore().onDisplaySettingChange();
      //collectAndPopulateShapeLibrary(columns);
    });
}

async function collectAndPopulateShapeLibrary(columns) {
  const shapeLibrary = await collectShapeLibrary(columns);
  populateShapeLibrary(shapeLibrary, columns);
  drawShapes(shapeLibrary, columns);
}

async function collectShapeLibrary(columns) {
  var cc = Module.libraryStore().categoryCount();
  const libraryDetails = {};
  for (var i = 0; i < cc; i++) {
    var name = Module.getCategoryName(i);
    if (!libraryDetails[name]) {
      libraryDetails[name] = [];
    }
    var rc = Module.libraryStore().rowCount(i);
    for (var j = 0; j < rc; j++) {
      for (var k = 0; k < columns; k++) {
        if (Module.libraryStore().hasObject(i, j, k)) {
          var nm = Module.getObjectName(i, j, k);
          libraryDetails[name].push({
            category: i,
            row: j,
            col: k,
            nm
          })
          // console.log(nm);
        }
      }
    }
  }
  return libraryDetails;
}

function populateShapeLibrary(shapeLib, columns) {
  let colKeys = Object.keys(shapeLib);
  for (let colKey of colKeys) {
    const colData = shapeLib[colKey];
    let d = `<li class="nav-item left-pane-li">
    <a class="nav-link" href="#">${colKey}</a>
    <div id="stdiv-${colKey}"></div></li>`;
    $("#shapeLibUl").append(d);
  }
}

function drawShapes(shapeLib, columns) {
  let colKeys = Object.keys(shapeLib);
  for (let colKey of colKeys) {
    const colData = shapeLib[colKey];
    const divEl = document.getElementById(`stdiv-${colKey}`);
    for (let data of colData) {
      const id = `st${data.category}${data.row}${data.col}`;
      var canv = document.createElement("canvas");
      canv.setAttribute('width', 50);
      canv.setAttribute('height', 50);
      canv.setAttribute('id', id);
      canv.setAttribute('data-category', data.category);
      canv.setAttribute('data-row', data.row);
      canv.setAttribute('data-col', data.col);
      canv.classList.add('draggable');
      canv.drop = function(x, y) {
        var objNum = columns * data.row + data.col;
        Module.libraryStore().addObjectToCanvas(data.category, objNum, x, y);
        drawCanvas();
      }
      divEl.appendChild(canv);
      //
      const panel = canv;
      const ctx = panel.getContext('2d');
      Module.drawCell(data.category, data.row, data.col, 35, 25, 25, ctx);

      $(canv).draggable({
        helper: "clone"
      });
    }
  }
}

function drawCanvas() {
  var canvas = document.getElementById("drawCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Module.drawCanvas(ctx);
}
