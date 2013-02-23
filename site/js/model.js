// hoge


//
// PointModel
//

// for ( xxx)
// new PointModel(json[i]);

function PointModel () {
	this.parse( Point);
}

PointModel.prototype.parse = function( Point ) {

	this.source = Point;
	
	this.latlon = [ Point.lat, Point.lon]

}	

//
// Loading with jQuery
//
// loadjson() => modelList =>  PointModel

// modelList.push( new PointModel(json[i])
