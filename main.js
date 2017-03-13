$(document).ready(function(){
	'use strict';

	paper.install(window); //installs paper in global scope
	//attaches Paper.js to the canvas
	paper.setup(document.getElementById('mainCanvas'));

	//TODO
	var c = Shape.Circle(250, 100, 30);
	c.fillColor = 'orange';

	//64 circles
	var c2;
	for(var x=25; x<400; x+=50){
		for(var y=25; y<400; y+=50){
			c2 = Shape.Circle(x, y, 20);
			c2.fillColor = 'cyan';
		}
	}

	//asynchronous user input
	var tool = new Tool();

	var c = Shape.Circle(200, 200, 80);
	c.fillColor = 'black';
	var text = new PointText(200, 200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';

	tool.onMouseDown = function(event){
		var c3 = Shape.Circle(event.point.x, event.point.y, 15);
		//var c = Shape.Circle(event.point, 20);
		c3.fillColor = 'red';
	};

	paper.view.draw();

	console.log('main.js loaded');
});
