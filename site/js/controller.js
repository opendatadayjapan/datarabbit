function MapController (id){
    this.init(id);
    this.pointModelList = new Array();
    this.viewpadPointModels = new Array();

    this.load("./data/input.json");
}


MapController.prototype.init = function (id){
    this.view = new MapView(id);
}

MapController.prototype.load = function(src){
     var self = this;
    $.getJSON( src, function(data) {
        input_json = data;
        console.log( "model.ks: got json data")
        console.log( "model.js: check 2" + input_json)

        for (var i = 0; i < input_json.length; i++)
        {
           self.pointModelList.push( new PointModel(input_json[i]));
        }

        console.log( "model.js: check 3" + self.poitModelList)
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


