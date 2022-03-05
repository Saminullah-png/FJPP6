(function() {
    console.log("from IIFE");
})();

(function(n, m) {
    console.log(n / m);
})(9, 2);

let a = function() {
    console.log("hello from function saved in a variablle");
}
a();