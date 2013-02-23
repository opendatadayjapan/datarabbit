function MapView(){
	var map = L.map('map').setView([35.694003,139.753595], 14);

	L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
		maxZoom: 20,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		transparent: true,
		format: 'image/png'
	}).addTo(map);

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

        var _this = this;
		function onMapClick(e) {
			_this.dispatch({type: "show_point"});
		}
		map.on('click', onMapClick);
}

MapView.prototype.showPoints = function( Points ) {

	this.source = Point;
	this.latlon = [ Point.lat, Point.lon]

}	

MapView.prototype.dispatch = function (e) {
    // ボタンクリックしたら、呼び出すだけ
    // こんとろーらに、eのtypeを渡す
    (e.type)
}

