//
// Datarabbit model.js
//

//
// PointModel
//


function PointModel (Point) {
	this.parse( Point);
}

PointModel.prototype.parse = function( Point) {
	this.source = Point;
	this.latlon = [ Point.lat, Point.lon];
	this.value = Point.value;
	// this.view = // Leaflet object?
}

PointModel.prototype.toString = function() {
	return "latlon: " + this.latlon[0] + "," + this.latlon[1];
}

//
// Loading with jQuery
//

var my_url = "./data/input.json";
$.getJSON( my_url, function(data) {
	input_json = data;
	console.log( "model.ks: got json data")
	console.log( "model.js: check 2" + input_json)

    var modelList = [];
    for (var i = 0; i < input_json.length; i++)
    { 
        modelList.push( new PointModel(input_json[i]));
    }

    console.log( "model.js: check 3" + modelList)
});

PointModel.prototype.dispatch = function (e) {
}

//input_json = [ 
//{
//	  type: "Data0",
//	  lat: 150,
//	  lon: 150,
//	  value: 888
//	},
//	{
//	  type: "Data1",
//	  lat: 151,
//	  lon: 151,
//	  value: 888
//	},
//	{
//	  type: "Data2",
//	  lat: 153,
//	  lon: 153,
//	  value: 888
//	},
//	{
//	  type: "Data3",
//	  lat: 154,
//	  lon: 154,
//	  value: 888
//	}
//];
//for (var model in modelList)
//{ 
//	document.write( input_json[i] + "<br />");
//}
