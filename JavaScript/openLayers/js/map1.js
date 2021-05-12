import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Draw from 'ol/interaction/Draw.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import point from 'ol/geom/Point';

var pnt = new point([126,37]).transform('EPSG:4326', 'EPSG:3857'); //위-경도 변환
var changePoints = pnt.getCoordinates();  //1차원배열 크기 2개의 값 [x, y]
// changePoints : 14026255.83995247,4439106.787250586
console.log('changePoints : ' + changePoints);

var layer = new TileLayer({
    source: new OSM()  //지형정보가 존재하는 객체, Openlayers에서 제공하는 기본 레이어이다.
  });
   
var source = new VectorSource();  

var vector = new VectorLayer({  //벡터레이어, 가장 기본적인 오픈레이어스의 화면구성 레이어 값
    source: source
});

var map = new Map({
    layers: [layer, vector],  //사용하는 레이어, 벡터레이어를 추가해야 이벤트에 따른 원그리기, 선그리기 객체를 지도에 넣을 수 있다.
    target: 'map',
    view: new View({
      center: changePoints,  //중앙잡기
      zoom: 8  //줌
    })
  });

  var selector = document.getElementById('type');  //셀렉트 테그에 이벤트를 걸기위해

var draw = null;  //그릴 객체
function startEvent() {  //이벤트 시작 함수
  var value = selector.value;
  if (value !== 'None') {
    draw = new Draw({  //그리기
      source: source,
      type: selector.value
    });
    map.addInteraction(draw);  //구현된 map 객체에 이벤트 위치를 스스로 추가하여 그리는 부분
  }
}

selector.onchange = function() {
  map.removeInteraction(draw);
  startEvent();
};