// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.gradient.basic
// Description:Shadows are drawn for gradient fills
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Shadows are drawn for gradient fills");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var gradient = ctx.createLinearGradient(0, 0, 100, 0);
gradient.addColorStop(0, '#f00');
gradient.addColorStop(1, '#f00');
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowColor = '#0f0';
ctx.shadowOffsetY = 50;
ctx.fillStyle = gradient;
ctx.fillRect(0, -50, 100, 50);
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();
