var vizualizer = (function(){
    var map = null;
    function setMap(o) {
        map = o;
    }
    
    var layer = null;
    
    function highlight(zip, type) {
        if (layer !== null) {
            layer.setMap(null);
        }
        
        layer = new google.maps.FusionTablesLayer({
            query: {
                select: 'geometry',
                from: '1707058',
                where: type + "=" + zip
            },
            clickable: false,
            map: map
        });
    }
    
    return {
        highlight: highlight,
        setMap: setMap
    }
})();
$(document).ready(function(){
    var mapStyles = [
      {
        featureType: "road",
        stylers: [
          { visibility: "off" }
        ]
      },{
        featureType: "transit",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];
    
    
    var start = new google.maps.LatLng(47.4, 8.5);
    var myOptions = {
      zoom: 13,
      center: start,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: mapStyles
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    vizualizer.setMap(map);
    
    var layer = new google.maps.FusionTablesLayer({
      query: {
        select: 'geometry',
        from: '812706'
      },
      clickable: false,
      map: map
    });
    
    var zip_layer = new google.maps.FusionTablesLayer({
      query: {
        select: 'geometry',
        from: '1153810'
      },
      map: map,
      styles: [{
          polygonOptions: {
              fillOpacity: 0.0,
              strokeColor: '#112200',
              strokeWeight: 1
          }
      }]
    });
    
    google.maps.event.addListener(zip_layer, 'click', function(ev) {
        var zip4 = ev.row.zip4.value;
        ev.infoWindowHtml = 'Zip: ' + zip4 + '<br/><br/>';
        ev.infoWindowHtml += '<a href="#" onclick="vizualizer.highlight(' + zip4 + ', \'to\')">Move-ins</a><br/>';
        ev.infoWindowHtml += '<a href="#" onclick="vizualizer.highlight(' + zip4 + ', \'from\')">Move-outs</a>';
    });
    
});
