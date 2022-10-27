
var userName = "";
var passWord = "";

function authenticateUser(user, password)
{
    var auth = user + ":" + password;
    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    var hash = btoa(auth); 
    return "Basic " + hash;
}

function CallWebAPI() {

    // New XMLHTTPRequest
    var request = new XMLHttpRequest();
	var autenticate = authenticateUser(userName, passWord);
	// alert("Encode d string pasword:"+autenticate);
    request.open("get", "https://gps.coltrack.com/gps/api.jsp", false);	
    request.setRequestHeader("Authorization", authenticateUser(userName, passWord));  	
    request.send();
    
    console.log(request)

    // view request status
    // alert(request.status);
    response.innerHTML = request.responseText;
};


// // -------------------------------------------------------------------------------------


const listData = async () => {
    const response = await fetch();
    const gps = await response.text();

    let tableBody = ``;
    gps.forEach((Object) => {
    
    tableBody +=`<tr>
    <td>${Object.NOMBRE}</td>
    <td>${Object.PLATE}</td>
    <td>${Object.LONGITUD}</td>
    <td>${Object.LATITUD}</td>
    <td>${Object.TIEMPO}</td>
    // <td>${Object.INACTIVO}</td>
    <td>${Object.UBICACION}</td>
    <td>${Object.CIUDAD}</td>
    <td>${Object.VELOCIDAD}</td>
    <td>${Object.RUMBO}</td>
    <td>${Object.POI}</td>
    <td>${Object.LUGAR}</td>
    <td>${Object.COS}</td>
    <td>${Object.EVENTO}</td>
    <td>${Object.IGNICION}</td>
    <td>${Object.ENTRADAS}</td>
    <td>${Object.TIPO}</td>
    <td>${Object.ODOMETRO}</td>
    <td>${Object.TEMPERATURA}</td>
    </tr>`
    
    });
    tableBody_Data.innerHTML = tableBody;
};

window.addEventListener("load", function() {
   CallWebAPI();
});