// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.draw.fill.maxWidth.zero
// Description:fillText handles maxWidth correctly
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("fillText handles maxWidth correctly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.font = '35px Arial, sans-serif';
ctx.fillText('fail fail fail fail fail', 5, 35, 0);
_assertGreen(ctx, 100, 50);
t.done();

});
done();
