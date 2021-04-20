const TextAlignHorizontalDefault = 0;
const TextAlignHorizontalCenter = 1;
const TextAlignHorizontalLeft = 2;
const TextAlignHorizontalRight = 3;

function initShapeTextEditor() {
  var rect = Module.getTextEditRect();

  var cy = rect.y + rect.height / 2;
  var cx = rect.x + rect.width / 2;

  var tid = Math.random() + "t";
  var tnode = $("<textarea id='" + tid + "'></textarea>");
  tnode.val(Module.getTextForEditing());
  var style = Module.getTextEditStyle();
  var fontSize = 15;
  var isFLoating = Module.isEditingFloatingText();

  tattrs = {
    "resize": "none",
    "overflow": "hidden",
    "position": "absolute",
    "font-sze": fontSize + "px",
    "line-height": fontSize + "px",
    "background-color": "transparent",
    "left": rect.x + "px", 
    "top": rect.y + "px", 
    "width": rect.width + "px",
    "height": rect.height + "px",
    "z-index": "2"
  }

  switch (style.effectiveTextAlignHorizontal().value) {
    case TextAlignHorizontalDefault:
    case TextAlignHorizontalCenter:
      tattrs["text-align"] = "center";
      break;
    case TextAlignHorizontalLeft:
      tattrs["text-align"] = "left";
      break;
    case TextAlignHorizontalRight:
      tattrs["text-align"] = "right";
      break;
    default:
      break;
  }
  tnode.css(tattrs);
  $("#viewport").append(tnode);
  tnode.trigger("focus");
  tnode.on("blur", function(e) {
    Module.finishTextEditing(tnode.val());
    tnode.remove();
    drawCanvas();
  });

  function updateSize() {
    var text = tnode.val();
    var sz = Module.getTextEditSize(text, isFLoating);
    if (sz.height == 0) {
      sz.height = fontSize;
    }
    if (sz.width < 50) {
      sz.width = 50;
    }
    sz.height += fontSize / 2;
    tnode.css("top", (cy - sz.height / 2) + "px");
    tnode.css("height", sz.height + "px");
    if (isFLoating) {
      var width = sz.width + 150;
      tnode.css("width", width + "px");
      tnode.css("left", (cx - width / 2) + "px");
    }
    console.log(sz);
  }
 
  tnode.on('change keyup paste', updateSize);
  updateSize();
}

function attachResizeHandler() {
  $(window).on("resize", function() {
    setCanvasSize();
    drawCanvas();
    var panel = document.getElementById("gridCanvas");
    drawGrid(panel);
  });
}

function attachEventHandlers() {
  attachResizeHandler();

  var canvas = document.getElementById("drawCanvas");

  function click(x, y) {
    var pt = {x: x, y: y }
    inputFilter.tap(pt, 1);
    drawCanvas();
  }

  function dbclick(x, y) {
    var pt = {x: x, y: y }
    inputFilter.tap(pt, 2);
    drawCanvas();
    if (inputReceiver.needTextEditing()) {
      initShapeTextEditor()
    }
  }

  function down(x, y) {
  }

  function up(x, y) {
  }

  function move(x, y) {
  }

  function drag(x, y, kind) {
    //console.log(x + ", " + y + "  ==  " + kind);
    var it = Module.InputType.START;
    if (kind == 1) {
      it = Module.InputType.OTHER;
    } else if (kind == 2) {
      it = Module.InputType.END
    }
    var pt = {x: x, y: y }
    inputFilter.pan(pt, it);
    drawCanvas();
  }

  function contextmenu(x, y) {
  }

  function enter(e) {
  }

  function leave(e) {
  }

  function dist(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx*dx + dy*dy);
  }

  var inputFilter = Module.inputFilter();
  var inputReceiver = Module.inputReceiver();
  var clickTimer = null;
  var mdown = false;
  var moved = false;
  var initialX = null;
  var initialY = null;
  var lastX = null;
  var lastY = null;
  var dragMinDist = 4;

  var attachBeanEvents = function () {
    bean.on(canvas, 'click', function (e) {
      if (e.button == 2) {
        contextmenu(e);
        return;
      }
      if (e.button != 0) {
        return;
      }
      if (moved) {
        moved = false;
        return;
      }

      if (clickTimer != null) {
        clearTimeout(clickTimer);
        clickTimer = null;
        dbclick(e.offsetX, e.offsetY);
      } else {
        clickTimer = setTimeout(function () {
          clickTimer = null;
          click(e.offsetX, e.offsetY);
        }, 350);
      }
    });

    bean.on(canvas, 'mousedown', function (e) {
      if (e.button != 0) {
        return;
      }
      initialX = e.offsetX;
      initialY = e.offsetY;
      mdown = true;
      down(initialX, initialY);
    });

    bean.on(canvas, 'mouseup', function (e) {
      if (e.button == 0) {
        mdown = false;
        up(e.offsetX, e.offsetY);
        if (moved) {
          drag(e.offsetX, e.offsetY, 2);
        }
      }
    });

    bean.on(canvas, 'mousemove', function (e) {
      if (mdown && e.button != 0) {
        return;
      }

      if (!mdown) {
        move(e.offsetX, e.offsetY);
        return;
      }
      if (moved) {
        drag(e.offsetX, e.offsetY, 1);
      } else {
        if (dist(initialX, initialY, e.offsetX, e.offsetY) >= dragMinDist) {
          moved = true;
          drag(initialX, initialY, 0);
          drag(e.offsetX, e.offsetY, 1);
        }
      }
    });

    bean.on(canvas, 'mouseenter', function (e) {
      //console.log('mouseenter');
    });

    bean.on(canvas, 'mouseleave', function (e) {
      if (moved) {
        drag(e.offsetX, e.offsetY, 2);
        moved = false;
        mdown = false;
      }
    });

    bean.on(canvas, 'contextmenu', function (e) {
      console.log('contextmenu');
    });

    //bean.on(canvas, 'dblclick', function (e) {
    //console.log('dblclick--' + e.timeStamp);
    //});
  }

  var touchEndFn = function(ev) {
    mdown = false;
    up(lastX, lastY);
    if (moved) {
      drag(lastX, lastY, 2);
      moved = false;
    }
  }

  var attachTouchEvents = function() {
    var eventLoc = function(ev) {
      var touch = ev.targetTouches[0];
      // FIXME: check whether to use clientX, clientY or pageX, pageY
      return [touch.clientX, touch.clientY];
    }

    canvas.addEventListener('touchstart', function(ev) {
      if (ev.targetTouches.length == 1) {
        [lastX, lastY] = eventLoc(ev);
        initialX = lastX;
        initialY = lastY;
        mdown = true;
        down(initialX, initialY);
      }
    });
    canvas.addEventListener('touchmove', function(ev) {
      //ev.preventDefault();
      if (ev.targetTouches.length == 1) {
        var touch = ev.targetTouches[0];
        [lastX, lastY] = eventLoc(ev);
        if (!mdown) {
          move(lastX, lastY);
          return;
        }
        if (moved) {
          drag(lastX, lastY, 1);
        } else {
          if (dist(initialX, initialY, lastX, lastY) >= dragMinDist) {
            moved = true;
            drag(initialX, initialY, 0);
            drag(lastX, lastY, 1);
          }
        }
      }
    });
    canvas.addEventListener('touchend', function(ev) {
      touchEndFn(ev);
    });
    canvas.addEventListener('touchleave', function(ev) {
      touchEndFn(ev);
    });
    canvas.addEventListener('touchcancel', function(ev) {
      touchEndFn(ev);
    });
  }

  attachBeanEvents();
  attachTouchEvents();
}


/*

var attachHammerEvents = function() {
    var hammertime = new Hammer(canvas, {});

    hammertime.on('panstart', function(ev) {
      drag(ev.center.x, ev.center.y, 0);
    });

    hammertime.on('panmove', function(ev) {
      drag(ev.center.x, ev.center.y, 1);
    });

    hammertime.on('panend', function(ev) {
      drag(ev.center.x, ev.center.y, 2);
    });

    hammertime.on('pancancel', function(ev) {
      drag(ev.center.x, ev.center.y, 2);
    });

    var singleTap = new Hammer.Tap({ event: 'singletap' });
    var doubleTap = new Hammer.Tap({ event: 'doubletap', taps: 2 });

    hammertime.add([doubleTap, singleTap]);

    doubleTap.recognizeWith(singleTap);
    singleTap.requireFailure(doubleTap);

    hammertime.on('singletap', function(ev) {
      //drag(ev.center.x, ev.center.y, 2);
      console.log(ev)
    });
  }

*/