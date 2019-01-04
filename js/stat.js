'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CORD_X = 100;
var CORD_Y = 10;
var CLOUD_FONT = '16px PT Mono';
var TEXT_WIDTH = 40;
var BAR_WIDTH = 40;
var barHeight = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(CORD_X, CORD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CORD_X + 10, CORD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CORD_X + 10, CORD_Y + 10, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.font = CLOUD_FONT;
  ctx.fillText('Ура вы победили!', CORD_X + 20, CORD_Y + 30);
  ctx.fillText('Список результатов:', CORD_X + 20, CORD_Y + 45);


  for (var i = 0; i < players.length; i++) {

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var color = 'rgba(0, 0, 255,' + Math.random() + ')';
      ctx.fillStyle = color;
    }

    var currBarX = CLOUD_WIDTH / players.length * i + CORD_X + BAR_WIDTH;
    var currBarHeight = barHeight * times[i] / maxTime;
    var currBarY = 240 - currBarHeight;

    ctx.fillText(players[i], currBarX, 260);
    ctx.fillRect(currBarX, currBarY, TEXT_WIDTH, currBarHeight);
    ctx.fillText(Math.round(times[i]), currBarX, currBarY - 10);
  }
};
