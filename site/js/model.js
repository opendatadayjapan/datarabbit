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
	return "point: (" + this.latlon[0] + ", " + this.latlon[1] + ", " + this.value + ")";
}

//
// Loading JSON data
//
//	[ {
//	  type: "Data3",
//	  lat: 154,
//	  lon: 154,
//	  value: 888
//	} ]

var url = "data/input_01.json";
$.getJSON( my_url, function(data) {
	input_json = data;
	console.log( "model.js: got json data")
	console.log( "model.js: check 2" + input_json)
    var modelList = [];
    for (var i = 0; i < input_json.length; i++) { 
        modelList.push( new PointModel(input_json[i]));
    }
    console.log( "model.js: check 3" + modelList)
    //for (var model in modelList) { 
    //	document.write( model + "<br />");
    //}
});

PointModel.prototype.dispatch = function (e) {
}

