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

PointModel.prototype.toMapPoint = function() {
	return {
		type:"",
		lat: this.latlon[0],
		lon: this.latlon[1],
		value: this.value
	};
}

PointModel.prototype.toString = function() {
	return "point: (" + this.latlon[0] + ", " + this.latlon[1] + ", " + this.value + ")";
}


