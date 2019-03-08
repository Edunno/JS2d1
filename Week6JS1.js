// DAG 1
// Opg1

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Brian"]
var aNames = names.filter(name => name.match(/[a]/i))
var name2
var revNames = names.map(name => name.split("").reverse().join("").toLowerCase())

console.log(aNames)
console.log(revNames)

// Opg2

function onlyA(n) {
    /* for (i = 0; i < n.length; i++) {
         if (n.charAt(i) === 'a') {
             return true;
         }
     }*/
    if (n.indexOf("a") > -1) {
        return true
    }
    return false;
}

function revString(n) {
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

function myMapper(arr, callback) {
    var newArr = []
    for (i = 0; i < arr.length; i++) {
        newArr.push((callback(arr[i])))
    }
    return newArr
}

console.log(myFilter(names, onlyA))
console.log(myMapper(names, revString))

// Opg3

Array.prototype.myFilter = function (callback) {
    return myFilter(this, callback)
}


console.log(names.myFilter(onlyA))

//Opg 4
// A

var numbers = [1, 3, 5, 10, 11]

function fiboIsh(value, index, arr) {
    if (index + 1 < arr.length) {
        return value + arr[index + 1]
    } else {
        return value
    }
}

const count = numbers.map(fiboIsh)
console.log(count)


// B

var namesNumbers = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

function splitNames(value){
    return value.name
}
function splitPhones(value){
    return value.phone
}

var asHTML = "<div class=\"row\"><div class=\"column\">"+namesNumbers.map(splitNames).join("<br>")+"</div>"+"<div class=\"column\">"+namesNumbers.map(splitPhones).join("<br>")+"</div></div>"
console.log(asHTML)


// Reduce

var htmlString = "<nav>" + names.map(name => "<a href=\"\">" + name + "</a>").join("") + "</nav>"

console.log(htmlString)

var all = ["Lars", "Peter", "Jan", "Bo"];

var allComma = all.join(",")
var allSpace = all.join(" ")
var allDot = all.join(".")
var allTag = all.join("#")

console.log(allComma)
console.log(allSpace)
console.log(allDot)
console.log(allTag)

// B

var numbers1 = [2, 3, 67, 33];
function getSum(total, num) {
    return total + num;
}
var totes = numbers1.reduce(getSum); //What in the actual F????

console.log(totes)

// C

var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }]

function getAvgAge(total, value, index, arr) {
    if (index < arr.length - 1) {
        return total + value.age
    } else {
        return (total + value.age) / arr.length
    }
}

console.log(members.reduce(getAvgAge, 0))

// D
/*
var a = {}
if (a["clinton"])
    console.log("I Will Not Print")
a["clinton"] = 1;
console.log("Value of clinton " + a["clinton"]);
*/
var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
/*
function getVotes(total, value, index, arr) {
    var a = total
    if (a[arr[index]] > 0) {
        a[arr[index]] = 1 + a[arr[index]]
        return a
    }
    else {
        a[arr[index]] = 1
        return a
    }
} //Works, but cray cray syntax
*/

function getVotes1(total, value) {
    if (total[value] > 0) {
        total[value] = 1 + total[value]
        return total
    }
    else {
        total[value] = 1
        return total
    }
}

console.log(votes.reduce(getVotes1, {}))
