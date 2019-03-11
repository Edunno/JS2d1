/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import 'bootstrap/dist/css/bootstrap.css'

const btnsend = document.getElementById("btnsend")
const btnsql = document.getElementById("btnsql")
const url = "http://uinames.com/api/"

btnsend.addEventListener("click", requestNames)
btnsql.addEventListener("click", requestSQL)



function requestNames() {
    var gender = document.getElementById("gender").value
    var region = document.getElementById("region").value
    var amount = document.getElementById("amount").value
    goFetch(url, gender, region, amount)
    document.getElementById("tblbody").innerHTML = a
}
var a
function goFetch(address, gender, region, amount) {
    
    address += "?amount=" + amount
    if(!(region === "All")){
    address += "&region=" + region.toLowerCase()
    }
    if(!(gender === "both")){
    address += "&gender=" + gender
    }
    fetch(address).then(function (response) {
        return response.json()
    }).then(function (myJson) {
        a = JSON.stringify(myJson)
    })
    return a
}

function requestSQL() {

}