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
	this.type = Point.type ? Point.type : "_";
	this.latlon = [ Point.lat, Point.lon];
	this.value = Point.value;
	// this.view = // Leaflet object?
}

PointModel.prototype.toString = function() {
	return "latlon: " + this.latlon[0] + "," + this.latlon[1];
}

//


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
