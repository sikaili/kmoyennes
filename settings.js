function touchStarted() {
  state = 1;
}

function touchEnded() {
  if (Math.random() > 0.5) {
    for (let i = 0; i < k + 1; i++) {
      kMoyen[i] = createVector(random(0, width), random(0, height));
    }
  } else {
    kMoyen = points.slice(0, k + 1);
  }
  for (let i = 0; i < kMoyen.length; i++) {
    kPoints[i] = [];
    colors[i] = [random(100, 500), random(50, 255), random(100, 555), 200];
  }
  state = 0;
  if (state == -2) {
    if (mouseX < width / 2) {
      state = 0;
      rrr = Math.floor(Math.random() * 100);
    } else {
      state = -1;
      for (var e = 0; e < mm[drawsN].length; e++) {
        var dra = new Draw(e, mm[drawsN][e]);
        draws[e] = dra;
      }
    }
  }
}

function keyPressed() {
  if (keyCode == 189 || keyCode == 187) {

  }
}

function addSnapshot(id) {
  var dumps = [];
  console.log(dumps);
  localStorage.setItem("canvas-" + id, JSON.stringify(dumps))
}

function removeSnapshot(id) {
  localStorage.removeItem("canvas-" + id);
}

function getSnapshot(id) {
  var canvas = JSON.parse(localStorage.getItem("canvas-" + id));
  // var canvas = JSON.parse(myJSON);
  return canvas;
}

function resetAllSnapshots() {
  localStorage.clear();
}


function windowResized() {
  setTimeout(location.reload(), 200);
}