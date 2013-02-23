function CircleView(point, map){

//	L.marker([point.lat,point.lon]).addTo(map)
//			.bindPopup("<b>" + point.value + "</b><br />" + point.type).openPopup();

	L.circle([point.lat,point.lon], point.value, {
		color: 'green',
		fillColor: '#green',
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
		this.points = [{type:"",lat:35.685326,lon:139.7531,value:50}];
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