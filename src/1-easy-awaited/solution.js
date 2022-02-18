var myAwaited = Promise.resolve(function () { return 'string'; });
var a = typeof myAwaited === 'string';
console.log(a);
