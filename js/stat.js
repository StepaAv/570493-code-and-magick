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
var barHeight = CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(CORD_X, CORD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';


  for (var i = 0; i < players.length; i++) {
   ctx.fillText(players[i], CLOUD_X + GAP *  i, 260);
   ctx.fillRect(CLOUD_X + GAP * i, CLOUD_Y / 2, TEXT_WIDTH, barHeight);
  }
};

