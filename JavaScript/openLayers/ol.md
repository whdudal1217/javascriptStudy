Use MarkDown Library
===

## April 29th 

## 1. How to Use OL

openLayer는 브라우저에서 지도를 활용한 정보를 표출하는 라이브러리이다.

네이버,다음,구글 처럼 GIS(Geographic Information System)라는 명칭으로 불리며 지형벙보 서버를 따로 구축 할 수 있어서 외부 인터넷이 안 되는 곳에서 종종 사용한다.

OL(OpenLayers)는 ES5, ES6 문법 지원.
##### ※ ES6는 IE에서 지원하지 않음 ※

이번 공부에선 Node.js의 npm을 활용해 개발하고자 함.

1. openLayer란 폴더 생성
2. 폴더 내에서 npm init 실행
3. 아래처럼 package.json 코드 실행 <br/>
```
{
  "name": "open_test",
  "version": "1.0.0",
  "description": "\"\"",
  "main": "map.js",
  "scripts": {
    "test": "\"\""
  },
  "repository": {
    "type": "git",
    "url": "\"\""
  },
  "keywords": [
    "1217"
  ],
  "author": "1217",
  "license": "ISC"
}<br/>
```
4. npm install ol 실행 
##### ※ 네트워크 연결된 곳에서 해야함 ※
5. npm install --save-dev parcel-bundler 실행 <br />
    ##### 자동으로 테스트 서버를 올려주고 결과파일을 만들어주는 라이브러리
6. package.json 수정 <br/>
```
"scripts": {
        "test": "echo\"Error: no test specified\" && exit 1",
        "start": "parcel index.html",
        "build": "parcel build --public-url . index.html"
},<br/>
``` 
<br />

7. olPrc1.html 
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            #map{
                width: 500px;
                height: 300px;
            }
        </style>
        <title>ol</title>
    </head>
    <body>
        <div id="map"></div>
        <script src="./map.js"></script>
    </body>
    </html>
```
8. map.js 
```
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
    target:'map',
    layers:[
        new TileLayer({
            source : new OSM()
        })
    ],
    view:new View({
        center:[0,0],
        zoom:0
    })
});
```
9. 만약 해당 파일을 다른 곳에서도 사용하고 싶다면 npm run Build 실행
  이 파일을 다른 곳에서도 사용하고 싶어진다면 npm run build 실행.
  build하는 순간 package.json이 동작합니다.
  parcel이라는 라이브러리가 openLayers에서 임포트한 내용을 알아서 정리하고 웹 서버에 사용 가능하도록 압축.

10. dist 폴더가 생성이 되면서 여러가지 파일이 같이 생성된다.
11. 실제 build한 파일을 http-server로 동작시키기

<br/>

---

<br/>

## April 29th

## 2. Latitude Longitude Transfer

ol/geom/Point -> Point가 위도/경도를 바꿔주는 클래스이다.

1. How to use the Point

- Javascript File
```
    import point from 'ol/geom/Point';

    var pnt = new point([126,37]).transform('EPSG:4326', 'EPSG:3857'); //위-경도 변환
    var changePoints = pnt.getCoordinates(); //1차원배열 크기 2개의 값 [x, y]

    var layer = new TileLayer({
        source: new OSM() //지형정보가 존재하는 객체, OpenLayer에서 제공하는 기본 레이어
    });

    var source = new VectorSource();

    var vector = new VectorLayer({
        source:source
    });

    var map = new Map({
        layers:[layer,vector], //사용하는 레이어, 벡터레이어를 추가해야 이벤트에 따른 원그리기, 선그리기 객체를 지도에 추가할 수 있다.
        target:'map',
        view:new View({
            center:changePoints, //center잡기
            zoom:8
        })
    })

```
- Html
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            #map{
                width: 500px;
                height: 300px;
            }
        </style>
        <title>ol</title>
    </head>
    <body>
        <div id="map" class="left"></div>
        <script src="./map.js"></script>
    </body>
    </html>
```


2. How to draw line or some Shape

- Javascript File
```
    // How to use the Point
    import Map from 'ol/Map.js';
    import View from 'ol/View.js';
    import Draw from 'ol/interaction/Draw.js';
    import {Tile as TileLayer, Vector as VectorLayer} from 'ol/Layer.js';
    import {OSM, Vector as VectorSource} from 'ol/source.js';
    import point from 'ol/geom/Point';

    var pnt = new point([126,37]).transform('EPSG:4326', 'EPSG:3857'); //위-경도 변환
    var changePoints = pnt.getCoordinates(); //1차원배열 크기 2개의 값 [x, y]

    var layer = new TileLayer({
        source: new OSM() //지형정보가 존재하는 객체, OpenLayer에서 제공하는 기본 레이어
    });

    var source = new VectorSource();

    var vector = new VectorLayer({
        source:source
    });

    var map = new Map({
        layers:[layer,vector], //사용하는 레이어, 벡터레이어를 추가해야 이벤트에 따른 원그리기, 선그리기 객체를 지도에 추가할 수 있다.
        target:'map',
        view:new View({
            center:changePoints, //center잡기
            zoom:8
        })
    })

    var selector = document.getElementById('type'); 
    var draw = null; //그림 객체

    function startEvent(){ //이벤트 시작 함수
        var value = selector.value;
        if(value !== 'None'){
            draw = new draw({
                source:source,
                type: selector.value
            });
            map.addInteraction(draw); //구현된 map 객체에 이벤트 위치를 스스로 추가하여 그리는 부분
        }
    }

    selector.onchange = function(){
        map.removeInteraction(draw);
        startEvent();
    }

    startEvent();
```

- Html File
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            #map{
                width: 500px;
                height: 300px;
            }
        </style>
        <title>ol</title>
    </head>
    <body>
        <div id="map" class="left"></div>
        <div class="left">
            <label> 타입 : &nbsp; </label>
            <select id="type">
                <option value="Point">점</option>
                <option value="LineString">선</option>
                <option value="Polygon">채우는 선</option>
                <option value="Circle">원형</option>
                <option value="None">없음</option>
            </select>
        </div>
        <script src="./map.js"></script>
    </body>
    </html>
```

2. +1 Collision Issue & Circle with Text

원 도형을 그리는데 있어 import 부분이 계속 충돌을 함.

import 할 때 별칭을 주어야 한다고 함.
그래서 2번 소스에 별칭도 추가하고 원형과 글씨를 추가한 소스.

- Javascript file
```
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

    var pnt = new Point([126,37]).transform('EPSG:4326','EPSG:3857');
    var changePoints = pnt.getCoordinates();

    var layer = new OlTileLayer({
        source : new OSM()
    });

    var source = new Vector();

    var vector = new VectorLayer({
        source:source
    });

    var map = new Map({
        layers: [layer, vector],
        target: 'map',
        view: new OlView({
            center: changePoints,
            zoom:8
        })
    });

    var vectorSource = new Vector({projection:'EPSG:4326'});
    var circle = new Circle(changePoints, 12000); //좌표, 반경 넓이
    var CircleFeature = new Feature(circle); //구조체로 형성
    vectorSource.addFeatures([CircleFeature]); //벡터소스에 추가

    var VectorLayer = new VectorLayer({
        source:vectorSource,
        style:[
            new Style({
                stroke: new Stroke({
                    color: 'rgba(240,79,79,0.9)',
                    width: 2
                }),
                fill: new Fill({
                    color: 'rgba(255,133,133,0.5',
                }),
                text: new Text({
                    text: 'MUYAHO',
                    textAlign: 'center',
                    font: '15px roboto,snas-serif'
                })
            })
        ]
    });

```

- Html file
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            #map{
                width: 500px;
                height: 300px;
            }
        </style>
        <title>ol</title>
    </head>
    <body>
        <div id="map" class="left"></div>
        <div class="left">
            <label> 타입 : &nbsp; </label>
            <select id="type">
                <option value="Point">점</option>
                <option value="LineString">선</option>
                <option value="Polygon">채우는 선</option>
                <option value="Circle">원형</option>
                <option value="None">없음</option>
            </select>
        </div>
        <script src="./map.js"></script>
    </body>
    </html>
```
<br/>

-----

<br/>

## 3. OpenLayers HeatMap

히트맵, 열지도 그리는 방법은 Heatmaplayer를 생성하면 할 수 있다.
해당 레이어는 .kml 확장자 파일이 필요하다

- Kml

```
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://earth.google.com/kml/2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <document>
        <name>2021 연습용 히트맵</name>
        <Folder>
            <name>AREA</name>
            <Placemark id="id1">
                <name>1</name>
                <magnitude>5.9</magnitude>
                <Point>
                    <coordinates>126.11, 37.12 </coordinates>
                </Point>
            </Placemark>
            <Placemark id="id2">
                <name>1</name>
                <magnitude>15.9</magnitude>
                <Point>
                    <coordinates>136.11, 38.12 </coordinates>
                </Point>
            </Placemark>
            <Placemark id="id3">
                <name>1</name>
                <magnitude>25.9</magnitude>
                <Point>
                    <coordinates>146.11, 39.12 </coordinates>
                </Point>
            </Placemark>
        </Folder>
    </document>
</kml>
```

- Javascript

```
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
    import VectorSource from 'ol/source/Vector.js';

    var pnt = new Point([126,37]).transform('EPSG:4326','EPSG:3857');
    var changePoints = pnt.getCoordinates();

    var layer = new OlTileLayer({
        source : new OSM()
    });

    var source = new Vector();

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
```

<br/>

-----

<br/>

## 4. View Object
