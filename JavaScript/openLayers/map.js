// // Area Create
// var map = new ol.Map({
//     target:'map', //div id
//     layers: [
//         new ol.layer.Tile({
//             source: new ol.source.OSM() //OSM : Open Street Map
//         })
//     ],
//     view:new ol.View({
//         center: ol.proj.fromLonLat([127.00169, 37.56421]),
//         zoom: 6,
//         enableRotation: false
//     })
// });

// // Rotation Method
// function veiwRotation(direction){
//     var view = map.getView();
//     var rotation = view.getRotation();

//     if(direction=='left'){
//         view.setRotation(rotation-(Math.PI/6));
//     }else{
//         view.setRotation(rotation+(Math.PI/6));
//     }
// }

// import 'ol/ol.css';
// import {Map, View} from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';

// const map = new Map({
//     target:'map',
//     layers:[
//         new TileLayer({
//             source : new OSM()
//         })
//     ],
//     view:new View({
//         center:[0,0],
//         zoom:0
//     })
// });

// How to use the Point
// import Map from 'ol/Map.js';
// import View from 'ol/View.js';
// import Draw from 'ol/interaction/Draw.js';
// import {Tile as TileLayer, Vector as VectorLayer} from 'ol/Layer.js';
// import {OSM, Vector as VectorSource} from 'ol/source.js';
// import point from 'ol/geom/Point';

// var pnt = new point([126,37]).transform('EPSG:4326', 'EPSG:3857'); //위-경도 변환
// var changePoints = pnt.getCoordinates(); //1차원배열 크기 2개의 값 [x, y]

// var layer = new TileLayer({
//     source: new OSM() //지형정보가 존재하는 객체, OpenLayer에서 제공하는 기본 레이어
// });

// var source = new VectorSource();

// var vector = new VectorLayer({
//     source:source
// });

// var map = new Map({
//     layers:[layer,vector], //사용하는 레이어, 벡터레이어를 추가해야 이벤트에 따른 원그리기, 선그리기 객체를 지도에 추가할 수 있다.
//     target:'map',
//     view:new View({
//         center:changePoints, //center잡기
//         zoom:8
//     })
// })

// var selector = document.getElementById('type'); 
// var draw = null; //그림 객체

// function startEvent(){ //이벤트 시작 함수
//     var value = selector.value;
//     if(value !== 'None'){
//         draw = new draw({
//             source:source,
//             type: selector.value
//         });
//         map.addInteraction(draw); //구현된 map 객체에 이벤트 위치를 스스로 추가하여 그리는 부분
//     }
// }

// selector.onchange = function(){
//     map.removeInteraction(draw);
//     startEvent();
// }

// startEvent();

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import OlTileLayer from 'ol/layer/Tile.js';
import OlView from 'ol/View.js';
import Vector from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';
import Point from 'ol/geom/Point';
import {Circle} from 'ol/geom.js';
import Feature from 'ol/Feature.js';
import { Style,Stroke,Fill,Text} from 'ol/style.js';
import KML from 'ol/format/KML.js';
import {Heatmap as HeatmapLayer, Tile as TileLayer} from 'ol/layer.js';
import VectorSource from 'ol/source/Vector.js';2


var pnt = new Point([126,37]).transform('EPSG:4326','EPSG:3857');
var changePoints = pnt.getCoordinates();

var layer = new OlTileLayer({
    source : new OSM()
});

var source = new Vector();

// var vector = new VectorLayer({
//     source:source
// });

var Vector = new HeatmapLayer({ //heatMap을 만드는 레이어
    source: new VectorSource({
        url: '/heating.kml',
        format: new KML({
            extractStyles: false
        })
    }),
    blur: 15,
    radius: 20
})

var map = new Map({
    layers: [layer, vector],
    target: 'map',
    view: new OlView({
        center: changePoints,
        zoom:8
    })
});

// var vectorSource = new Vector({projection:'EPSG:4326'});
// var circle = new Circle(changePoints, 12000); //좌표, 반경 넓이
// var CircleFeature = new Feature(circle); //구조체로 형성
// vectorSource.addFeatures([CircleFeature]); //벡터소스에 추가

// var VectorLayer = new VectorLayer({
//     source:vectorSource,
//     style:[
//         new Style({
//             stroke: new Stroke({
//                 color: 'rgba(240,79,79,0.9)',
//                 width: 2
//             }),
//             fill: new Fill({
//                 color: 'rgba(255,133,133,0.5',
//             }),
//             text: new Text({
//                 text: 'MUYAHO',
//                 textAlign: 'center',
//                 font: '15px roboto,snas-serif'
//             })
//         })
//     ]
// });



