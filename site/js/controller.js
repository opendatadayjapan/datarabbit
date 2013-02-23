function MapController(id){
    this.init(id);
    this.pointModelList = {};
    this.viewpadPointModels = [];
    this.load("./data/input_01.json");
}


MapController.prototype.init = function (id){
    this.view = new MapView(id); 
    var self = this;
    this.view.dispatch = function (e){
        if(e.type === "hyde_points"){
			 mapController.view.hidePoints(mapController.pointModelList[e.etype]);
        }else if(e.type === "show_points"){
            mapController.view.showPoints(mapController.pointModelList[e.etype]);
        }
}
}

MapController.prototype.load = function(src){
    var self = this;
   
    $.getJSON( src, function(data) {
        var input_json = data;
		var hashList = [];
        for (var i = 0; i < input_json.length; i++)
        {
			var point = new PointModel(input_json[i]);
            if(self.pointModelList[(point.type)] == null){
               self.pointModelList[(point.type)] = []; 
            }
			console.log(point.type)
           self.pointModelList[(point.type)].push(point);
        }

    });
}

MapController.prototype.showPoints = function (type){
   
}

MapController.prototype.hidePoitns = function (type){

}
var mapController;
$(function(){
  mapController = new MapController ("map");
});


