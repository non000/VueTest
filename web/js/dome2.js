(function dome2(){
    export var name = 'jack';
    export var setName = function (newName) {
        name = newName;
    }
    export var hello = function () {
        console.log("hello" + name + "!!!");
    }
})()