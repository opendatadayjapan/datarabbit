//
// Datarabbit model.js
//


//
// PointModel
//

// for ( xxx)
// new PointModel(json[i]);

console.log("model.js: check 0")

function PointModel (Point) {
	this.parse( Point);
}

PointModel.prototype.parse = function( Point) {

	this.source = Point;
	
	this.latlon = [ Point.lat, Point.lon];
	
	// this.view = // Leaflet object?

}	

console.log( "model.js: check 1")

//var my_url = "http://www.google.com/"
//var json;
//$.getJSON(my_url, function(json) {
//  var my_json = json;
//});

input_json = [ 
{
	  type: "Data0",
	  lat: 150,
	  lon: 150
	},
	{
	  type: "Data1",
	  lat: 151,
	  lon: 151
	},
	{
	  type: "Data2",
	  lat: 153,
	  lon: 153
	},
	{
	  type: "Data3",
	  lat: 154,
	  lon: 154
	}
];

console.log( "model.js: check 2" + input_json)

var modelList = [];
for (var i = 0; i < input_json.length; i++)
{ 
	modelList.push( new PointModel(input_json[i]));
}

console.log( "model.js: check 3" + modelList)

for (var model in modelList)
{ 
	document.write( input_json[i] + "<br />");
}

//
// Loading with jQuery
//
// loadjson() => modelList =>  PointModel

// modelList.push( new PointModel(json[i])
