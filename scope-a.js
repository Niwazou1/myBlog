let a = 1;
console.log(a);

(function(){
    console.log(a);
})();

(function(){
    let a = 3;
    console.log(a);
    (function(){
        console.log(a);
    })();


})();

module.exports = {
    a: a
};