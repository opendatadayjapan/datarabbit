function MapController (id){
    this.init(id);
    this.pointModelList = new Array();
    this.viewpadPointModels = new Array();
}


MapController.prototype.init = function (id ){
    this.view = new MapView(id);
}

MapController.prototype.load = function(){
    
}

MapController.prototype.showPoints = function (type){
}

MapController.prototype.hidePoitns = function (type){
    
}

$(function(){
  var mapController = new MapController ("map");
});


