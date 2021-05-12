import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import OlTileLayer from 'ol/layer/Tile.js';
import OlView from 'ol/View.js';
import Vector  from 'ol/source/Vector.js';
import VectorLayer  from 'ol/layer/Vector.js';
import { Circle } from 'ol/geom.js';
import Feature  from 'ol/Feature.js';
import { Style,Stroke,Fill, Text } from 'ol/style.js';
import point from 'ol/geom/Point';

var pnt = new point([126,37]).transform('EPSG:4326', 'EPSG:3857');
var changePoints = pnt.getCoordinates();

var layer = new OlTileLayer({ 
    source: new OSM()  
  });

var source = new Vector();  

var vector = new VectorLayer({ 
source: source
});

var map = new Map({
layers: [layer, vector], 
target: 'map',
view: new OlView({
    center: changePoints,
    zoom: 8  
})
});

var vectorSource = new Vector({projection: 'EPSG:4326'}); //새로운 벡터 생성
var circle = new Circle(changePoints, 12000);  //좌표, 반경 넓이
var CircleFeature = new Feature(circle); //구조체로 형성
vectorSource.addFeatures([CircleFeature]); // 벡터소스에 추가

var vectorLayer =new VectorLayer({  //추가할 벡터레이어
  source: vectorSource,
  style: [
  new Style({
      stroke: new Stroke({   //두께
          color: 'rgba( 240, 79, 79 ,0.9)',
          width: 2
      }),
      fill: new Fill({  //채우기
          color: 'rgba( 255, 133, 133 ,0.5)'
      }),
      text : new Text({  //텍스트
        text: 'Test!',
        textAlign: 'center',
        font: '15px roboto,sans-serif'            
      })
  })]
});
map.addLayer(vectorLayer); //만들어진 벡터를 추가



