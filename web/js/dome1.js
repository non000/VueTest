
    var name = 'tom';
    export let hello = function() {
        console.log("hello" + name + "!!!")
    }
    var setname = function (newName) {
        name = newName;
    }
    export {name, setname};
    export default "this is dome1";
