/* pageBody.js */
/*
 * get the content of a JSON file using JSONP
 * update every 2 seconds.
 *
 */

window.onload = init;

function init() {
	showName();
	webSocketTest();
	getData();
	showData();
}

var showName = function(){
	var p1=document.getElementById("dataShow_P1");
	var ctx=p1.getContext("2d");
	ctx.font = "1em  Arial"
	ctx.fillStyle = "green";
	ctx.textAlign = "left";
	ctx.fillText("stevekeol",30,30);

	var p2=document.getElementById("dataShow_P2");
	var ctx=p2.getContext("2d");
	ctx.font = "1em Arial"
	ctx.fillStyle = "green";
	ctx.textAlign = "left";
	ctx.fillText("ygc",30,30);

	var p3=document.getElementById("dataShow_P3");
	var ctx=p3.getContext("2d");
	ctx.font = "1em Arial"
	ctx.fillStyle = "green";
	ctx.textAlign = "left";
	ctx.fillText("skypupil",30,30);

	var p4=document.getElementById("dataShow_P4");
	var ctx=p4.getContext("2d");
	ctx.font = "1em Arial"
	ctx.fillStyle = "green";
	ctx.textAlign = "left";
	ctx.fillText("...",30,30);
}

//  // get data from server
// var getData = function(){
// 	var socket = new WebSocket();
// 	var now = new Date();
// }



// var webSocketTest = function(){
// 	if ("WebSocket" in window)
// 	{
// 	 alert("WebSocket is supported by your Browser!");
// 	 // Let us open a web socket
// 	 var ws = new WebSocket("ws://localhost:9998/echo");
// 	 ws.onopen = function()
// 	 {
// 	    // Web Socket is connected, send data using send()
// 	    ws.send("Message to send");
// 	    alert("Message is sent...");
// 	 };
// 	 ws.onmessage = function (evt) 
// 	 { 
// 	    var received_msg = evt.data;
// 	    alert("Message is received...");
// 	 };
// 	 ws.onclose = function()
// 	 { 
// 	    // websocket is closed.
// 	    alert("Connection is closed..."); 
// 	 };
// 	}
// 	else
// 	{
// 	 // The browser doesn't support WebSocket
// 	 alert("WebSocket NOT supported by your Browser!");
// 	}
}




