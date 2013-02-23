function CircleView(point, map){

//	L.marker([point.lat,point.lon]).addTo(map)
//			.bindPopup("<b>" + point.value + "</b><br />" + point.type).openPopup();

    var _color = "#666";
    var _type = point.type;

    if(_type === "登録児童数小学1年生"){
    	_color = "green";
    } else if(_type === "登録児童数小学2年生"){
        _color = "blue";
    } else if(_type === "登録児童数小学3年生"){
        _color = "red";
    } 

	L.circle([point.lat,point.lon], point.value, {
		color: _color,
		fillColor: _color,
		fillOpacity: 0.5
	}).addTo(map).bindPopup("<b>" + point.value + "</b><br />" + point.type);
}

CircleView.prototype.show = function(){

}

CircleView.prototype.hide = function(){

}

function MapView(){
	this.map = L.map('map').setView([35.694003,139.753595], 14);

	L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
		maxZoom: 20,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		transparent: true,
		format: 'image/png'
	}).addTo(this.map);
/*
	L.marker([35.685326,139.7531]).addTo(map)
			.bindPopup("<b>皇居</b><br />明日は東京マラソン!").openPopup();

		L.circle([35.684006, 139.737613], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(map).bindPopup("I am a 麹町.");

		L.polygon([
			[35.692402, 139.722881],
			[35.687958, 139.720103],
			[35.689628, 139.721386]
		]).addTo(map).bindPopup("翔泳社ゾーン");

		var popup = L.popup();
*/		
		this.points = [{"type":"","lat":35.69327,"lon":139.768425,"value":null},{"type":"定員","lat":35.69327,"lon":139.768425,"value":70},{"type":"登録児童数総数","lat":35.69327,"lon":139.768425,"value":68},{"type":"登録児童数小学1年生","lat":35.69327,"lon":139.768425,"value":15},{"type":"登録児童数小学2年生","lat":35.69327,"lon":139.768425,"value":13},{"type":"登録児童数小学3年生","lat":35.69327,"lon":139.768425,"value":11},{"type":"登録児童数小学4年生","lat":35.69327,"lon":139.768425,"value":15},{"type":"登録児童数小学5年生","lat":35.69327,"lon":139.768425,"value":13},{"type":"登録児童数小学6年生","lat":35.69327,"lon":139.768425,"value":1},{"type":"","lat":35.685884,"lon":139.739699,"value":null},{"type":"定員","lat":35.685884,"lon":139.739699,"value":30},{"type":"登録児童数総数","lat":35.685884,"lon":139.739699,"value":36},{"type":"登録児童数小学1年生","lat":35.685884,"lon":139.739699,"value":16},{"type":"登録児童数小学2年生","lat":35.685884,"lon":139.739699,"value":13},{"type":"登録児童数小学3年生","lat":35.685884,"lon":139.739699,"value":5},{"type":"登録児童数小学4年生","lat":35.685884,"lon":139.739699,"value":2},{"type":"登録児童数小学5年生","lat":35.685884,"lon":139.739699,"value":0},{"type":"登録児童数小学6年生","lat":35.685884,"lon":139.739699,"value":0},{"type":"","lat":35.688208,"lon":139.734011,"value":null},{"type":"定員","lat":35.688208,"lon":139.734011,"value":40},{"type":"登録児童数総数","lat":35.688208,"lon":139.734011,"value":44},{"type":"登録児童数小学1年生","lat":35.688208,"lon":139.734011,"value":8},{"type":"登録児童数小学2年生","lat":35.688208,"lon":139.734011,"value":6},{"type":"登録児童数小学3年生","lat":35.688208,"lon":139.734011,"value":13},{"type":"登録児童数小学4年生","lat":35.688208,"lon":139.734011,"value":8},{"type":"登録児童数小学5年生","lat":35.688208,"lon":139.734011,"value":7},{"type":"登録児童数小学6年生","lat":35.688208,"lon":139.734011,"value":2},{"type":"","lat":35.688208,"lon":139.734011,"value":null},{"type":"定員","lat":35.688208,"lon":139.734011,"value":40},{"type":"登録児童数総数","lat":35.688208,"lon":139.734011,"value":44},{"type":"登録児童数小学1年生","lat":35.688208,"lon":139.734011,"value":12},{"type":"登録児童数小学2年生","lat":35.688208,"lon":139.734011,"value":6},{"type":"登録児童数小学3年生","lat":35.688208,"lon":139.734011,"value":12},{"type":"登録児童数小学4年生","lat":35.688208,"lon":139.734011,"value":7},{"type":"登録児童数小学5年生","lat":35.688208,"lon":139.734011,"value":5},{"type":"登録児童数小学6年生","lat":35.688208,"lon":139.734011,"value":2},{"type":"","lat":35.697391,"lon":139.760206,"value":null},{"type":"定員","lat":35.697391,"lon":139.760206,"value":30},{"type":"登録児童数総数","lat":35.697391,"lon":139.760206,"value":33},{"type":"登録児童数小学1年生","lat":35.697391,"lon":139.760206,"value":4},{"type":"登録児童数小学2年生","lat":35.697391,"lon":139.760206,"value":16},{"type":"登録児童数小学3年生","lat":35.697391,"lon":139.760206,"value":9},{"type":"登録児童数小学4年生","lat":35.697391,"lon":139.760206,"value":4},{"type":"登録児童数小学5年生","lat":35.697391,"lon":139.760206,"value":0},{"type":"登録児童数小学6年生","lat":35.697391,"lon":139.760206,"value":0},{"type":"","lat":35.699392,"lon":139.778421,"value":null},{"type":"定員","lat":35.699392,"lon":139.778421,"value":40},{"type":"登録児童数総数","lat":35.699392,"lon":139.778421,"value":39},{"type":"登録児童数小学1年生","lat":35.699392,"lon":139.778421,"value":9},{"type":"登録児童数小学2年生","lat":35.699392,"lon":139.778421,"value":10},{"type":"登録児童数小学3年生","lat":35.699392,"lon":139.778421,"value":10},{"type":"登録児童数小学4年生","lat":35.699392,"lon":139.778421,"value":5},{"type":"登録児童数小学5年生","lat":35.699392,"lon":139.778421,"value":3},{"type":"登録児童数小学6年生","lat":35.699392,"lon":139.778421,"value":2},{"type":"","lat":35.6993917,"lon":139.7784213,"value":null},{"type":"定員","lat":35.6993917,"lon":139.7784213,"value":40},{"type":"登録児童数総数","lat":35.6993917,"lon":139.7784213,"value":39},{"type":"登録児童数小学1年生","lat":35.6993917,"lon":139.7784213,"value":8},{"type":"登録児童数小学2年生","lat":35.6993917,"lon":139.7784213,"value":11},{"type":"登録児童数小学3年生","lat":35.6993917,"lon":139.7784213,"value":10},{"type":"登録児童数小学4年生","lat":35.6993917,"lon":139.7784213,"value":6},{"type":"登録児童数小学5年生","lat":35.6993917,"lon":139.7784213,"value":2},{"type":"登録児童数小学6年生","lat":35.6993917,"lon":139.7784213,"value":2},{"type":"","lat":35.6974803,"lon":139.7462825,"value":null},{"type":"定員","lat":35.6974803,"lon":139.7462825,"value":60},{"type":"登録児童数総数","lat":35.6974803,"lon":139.7462825,"value":70},{"type":"登録児童数小学1年生","lat":35.6974803,"lon":139.7462825,"value":28},{"type":"登録児童数小学2年生","lat":35.6974803,"lon":139.7462825,"value":22},{"type":"登録児童数小学3年生","lat":35.6974803,"lon":139.7462825,"value":12},{"type":"登録児童数小学4年生","lat":35.6974803,"lon":139.7462825,"value":8},{"type":"登録児童数小学5年生","lat":35.6974803,"lon":139.7462825,"value":0},{"type":"登録児童数小学6年生","lat":35.6974803,"lon":139.7462825,"value":0},{"type":"","lat":35.700914,"lon":139.755245,"value":null},{"type":"定員","lat":35.700914,"lon":139.755245,"value":40},{"type":"登録児童数総数","lat":35.700914,"lon":139.755245,"value":47},{"type":"登録児童数小学1年生","lat":35.700914,"lon":139.755245,"value":15},{"type":"登録児童数小学2年生","lat":35.700914,"lon":139.755245,"value":13},{"type":"登録児童数小学3年生","lat":35.700914,"lon":139.755245,"value":7},{"type":"登録児童数小学4年生","lat":35.700914,"lon":139.755245,"value":4},{"type":"登録児童数小学5年生","lat":35.700914,"lon":139.755245,"value":4},{"type":"登録児童数小学6年生","lat":35.700914,"lon":139.755245,"value":4}];
        var _this = this;

        _this.showPoints(_this.points);

		function onMapClick(e) {
			_this.dispatch({type: "hyde_point"});
			//_this.showPoints(_this.points);
		}
		this.map.on('click', onMapClick);
}

MapView.prototype.pickerList = [];
MapView.prototype.map = null;

MapView.prototype.showPoints = function( points ) {

    if(!points) return;
    for(i = 0; i < points.length; i++){
      // ポイント
        this.pickerList.push(new CircleView(points[i], this.map));
    }
    // ポイント
//	L.marker([point.lat, point.lon]).addTo(map)
//			.bindPopup("<b>SHOW</b><br />here!").openPopup();

}	

MapView.prototype.dispatch = function (e) {
    // ボタンクリックしたら、呼び出すだけ
    // こんとろーらに、eのtypeを渡す
    (e.type)
}