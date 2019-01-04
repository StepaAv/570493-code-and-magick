'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CORD_X = 100;
var CORD_Y = 10;

var CLOUD_X = 120;
var CLOUD_Y = 150;

var GAP = 50;
var FONT_GAP = 16;
var TEXT_WIDTH = 40;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var barHeight = 150;

var CONGRATULAION_GAP_LEFT = 20;
var CONGRATULAION_GAP_UP = 30;
var CONGRATULAION_FONT_GAP = 20;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(CORD_X, CORD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderCongratulation = function (ctx, x, y, color, font) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText('Ура вы победили!', x + CONGRATULAION_GAP_LEFT, y + CONGRATULAION_GAP_UP);
  ctx.fillText('Список результатов:', x + CONGRATULAION_GAP_LEFT, y + CONGRATULAION_GAP_UP + CONGRATULAION_FONT_GAP);
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



  for (var i = 0; i < players.length; i++) {

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var color = 'rgba(0, 0, 255,' + Math.random() + ')';
      ctx.fillStyle = color;
    }

    ctx.fillText(players[i], CLOUD_WIDTH / players.length * i + CORD_X + BAR_WIDTH, 260);
    ctx.fillRect(CLOUD_WIDTH / players.length * i + CORD_X + BAR_WIDTH, CLOUD_Y / 2, TEXT_WIDTH, (barHeight * times[i]) / maxTime);
  }
};
