var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Brian"]
var aNames = names.filter(name => name.match(/[a]/i))
var name2
var revNames = names.map(name => name.split("").reverse().join("").toLowerCase())

console.log(aNames)
console.log(revNames)

function onlyA(n) {
       /* for (i = 0; i < n.length; i++) {
            if (n.charAt(i) === 'a') {
                return true;
            }
        }*/
    if(n.indexOf("a")>-1){
        return true
    }
    return false;
}

function revString(n){
    return n.split("").reverse().join("").toLowerCase()
}

function myFilter(arr, callback) {
    var newArr = []
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

function myMapper(arr, callback){
    for(i = 0; i<arr.length;i++){
        arr[i] = (callback(arr[i]))
    }
    return arr
}

console.log(myFilter(names, onlyA))
console.log(myMapper(names, revString))

Array.prototype.myFilter = function(callback){
    return myFilter(this,callback)
}


console.log(names.myFilter(onlyA))


