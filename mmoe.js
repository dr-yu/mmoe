//Multi Map Object Editor
//Version: 0.2.2, 19.11.2014
//Version: 0.2.1, 17.11.2014
//Version: 0.2, 17.11.2014
//Version: 0.1, 12.11.2014, yandex maps api ver 2.1


//Варианты расположения:
//MMOE_panels_1 Одна карта
//  ┌─┬─┐
//  ├─┼─┤
//  └─┴─┘
//
//MMOE_panels_1x2 Две карты рядом по горизонтали
//  ┌───┐
//  ├───┤
//  └───┘
//
//MMOE_panels_2x1 Две карты рядом по вертикали
//  ┌─┬─┐
//  │ │ │
//  └─┴─┘
//
//MMOE_panels_1_1x2 Одна карта сверху, две рядом по вертикали снизу
//  ┌───┐
//  ├─┬─┤
//  └─┴─┘
//
//MMOE_panels_1x2_1 Две рядом по вертикали сверху, одна карта снизу
//  ┌─┬─┐
//  ├─┴─┤
//  └───┘
//
//MMOE_panels_2x2 Четыре карты
//  ┌─┬─┐
//  ├─┼─┤
//  └─┴─┘
//
//  ┌┬──┐
//  ├┤  │
//  └┴──┘
//
//  ┌──┬┐
//  │  ├┤
//  └──┴┘
//
//  ┌───┐
//  ├┬─┬┤
//  └┴─┴┘
//


// Yandex:
//    'yandex#map' - тип карты "схема";
//    'yandex#satellite' - тип карты "спутник";
//    'yandex#hybrid' - тип карты "гибрид";
//    'yandex#publicMap' - тип карты "народная карта";
//    'yandex#publicMapHybrid' - тип карты "народный гибрид".
//

// Google:
//    MapTypeId.ROADMAP – дорожная карта, используемая по умолчанию.
//    MapTypeId.SATELLITE – снимки Google Планета Земля, сделанные со спутника.
//    MapTypeId.HYBRID – комбинация обычной карты и снимков со спутника.
//    MapTypeId.TERRAIN – физическая карта, основанная на информации о ландшафте. 
//
//


function strObj(obj,prefix,depth) {
  var str = "";
  for(k in obj) {
    str += prefix+""+k+": "+ obj[k]+"\r\n";
    if(obj[k] && 'object' === typeof obj[k] && prefix.length < depth-1) {
    str += strObj(obj[k],prefix+"  ",depth)
}
}
return str;
}


function alertObj(obj) { 
    var str = strObj(obj,"",10); 
    alert(str);
    console.log(str)
}  

MMOE_config = {

                MMOE_config_int: {
                                   MMOEtopHeight: '25px',
                                   MMOEdownHeight:'20px',
                                   MMOEleftWight:'200px',
                                   MMOErightWight:'0px',
                                   MMOEmapZoom: 8,
                                   MMOEmapCenterX: 55.76,
                                   MMOEmapCenterY: 37.64,
                                 },
                // MMOE_maps - Варианты карт
                MMOE_maps: { 
                              //Название DIV контейнера
                              MMOE_maps_YandexMap: {
                                                     //Объект карты
                                                     map: {},
                                                     //Текущее расположение
                                                     location: 'none',
                                                     //Провайдер карт
                                                     provider: 'YANDEX',
                                                     //тип карты
                                                     type: 'yandex#map',
                                                     //Название карты для меню
                                                     name: 'Yandex - схема',
                                                   },
                              MMOE_maps_YandexSatellite: {
                                                     map: {},
                                                     location: 'none',
                                                     provider: 'YANDEX',
                                                     type: 'yandex#satellite',
                                                     name: 'Yandex - спутник',
                                                   },
                              MMOE_maps_YandexHybrid: {
                                                     map: {},
                                                     location: 'none',
                                                     provider: 'YANDEX',
                                                     type: 'yandex#hybrid',
                                                     name: 'Yandex - гибрид',
                                                   },
                              MMOE_maps_YandexPublicMap: {
                                                     map: {},
                                                     location: 'none',
                                                     provider: 'YANDEX',
                                                     type: 'yandex#publicMap',
                                                     name: 'Yandex - народная',
                                                   },
                              MMOE_maps_YandexPublicMapHybrid: {
                                                     map: {},
                                                     location: 'none',
                                                     provider: 'YANDEX',
                                                     type: 'yandex#publicMapHybrid',
                                                     name: 'Yandex - народный гибрид',
                                                   },
                              MMOE_maps_GoogleRoadmap: {
                                                     map: {},
                                                     location: 'none',
                                                     provider: 'GOOGLE',
                                                     type: 'roadmap',
                                                     name: 'Google - схема',
                                                   },
                              MMOE_maps_GoogleSatellite: {
                                                     map: {},
                                                     location: 'none',
                                                     provider: 'GOOGLE',
                                                     type: 'satellite',
                                                     name: 'Google - спутник',
                                                   },
                              MMOE_maps_GoogleHybrid: {
                                                     map: {},
                                                     location: 'none',
                                                     provider: 'GOOGLE',
                                                     type: 'hybrid',
                                                     name: 'Google - гибрид',
                                                   },
                              MMOE_maps_GoogleTerrain: {
                                                     map: {},
                                                     location: 'none',
                                                     provider: 'GOOGLE',
                                                     type: 'terrain',
                                                     name: 'Google - рельеф',
                                                   },
                              MMOE_maps_GoogleOSM: {
                                                     map: {},
                                                     location: 'none',
                                                     provider: 'GOOGLE',
                                                     type: 'osm',
                                                     name: 'OpenStreetMap',
                                                   },
                           },   
                MMOE_panels_cur: "MMOE_panels_1",
                MMOE_panels_prev: "none",
                // MMOE_panels - Варианты расположения окон карт на экране.
                MMOE_panels: {
                               // Название контейнера используется как глобальный DIV. Для наименования используются подчеркивания ( _ )
                               MMOE_panels_1: {
                                                //Наименование для меню     
                                                name: "Одна карта",
                                                //DIV внутри контейнера
                                                divs: {
                                                        //Название внутреннего DIV
                                                        MMOE_panels_1_d1:  {
                                                                           // Тип карты в этом контейнере.
                                                                           MapType: 'MMOE_maps_GoogleRoadmap',
                                                                           // Стиль для создаваемого DIV
                                                                           DivStyle: "width: 100%; height: 100%; background-color: blue;",
                                                                         } 
                                                      }  
                                              },
                               MMOE_panels_1x2: {
                                                  name: "Две карты рядом по горизонтали",
                                                  divs: {
                                                          MMOE_panels_1x2_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 50%; height: 100%; float: left; background-color: red;",
                                                                               },
                                                          MMOE_panels_1x2_d2:  {
                                                                                 MapType: 'MMOE_maps_YandexSatellite',
                                                                                 DivStyle: "width: 50%; height: 100%; float: left; background-color: blue;",
                                                                               } 
                                                        }  
                                                },
                               MMOE_panels_2x1: {
                                                  name: "Две карты друг над другом",
                                                  divs: {
                                                          MMOE_panels_2x1_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 100%; height: 50%; float: left; background-color: red;",
                                                                               },
                                                          MMOE_panels_2x1_d2:  {
                                                                                 MapType: 'MMOE_maps_GoogleSatellite',
                                                                                 DivStyle: "width: 100%; height: 50%; float: left; background-color: blue;",
                                                                               } 
                                                        }  
                                                },
                               MMOE_panels_2x2: {
                                                  name: "Четыре карты сеткой",
                                                  divs: {
                                                          MMOE_panels_2x2_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left; background-color: red;",
                                                                               },
                                                          MMOE_panels_2x2_d2:  {
                                                                                 MapType: 'MMOE_maps_YandexSatellite',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left; background-color: blue;",
                                                                               }, 
                                                          MMOE_panels_2x2_d3:  {
                                                                                 MapType: 'MMOE_maps_GoogleRoadmap',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left; background-color: red;",
                                                                               },
                                                          MMOE_panels_2x2_d4:  {
                                                                                 MapType: 'MMOE_maps_GoogleSatellite',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left; background-color: blue;",
                                                                               }, 
                                                        }  
                                                },
                               MMOE_panels_2x4: {
                                                  name: "Восемь карт сеткой",
                                                  divs: {
                                                          MMOE_panels_2x4_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left; background-color: red;",
                                                                               },
                                                          MMOE_panels_2x4_d2:  {
                                                                                 MapType: 'MMOE_maps_YandexSatellite',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left; background-color: blue;",
                                                                               }, 
                                                          MMOE_panels_2x4_d3:  {
                                                                                 MapType: 'MMOE_maps_YandexPublicMap',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left; background-color: red;",
                                                                               },
                                                          MMOE_panels_2x4_d4:  {
                                                                                 MapType: 'MMOE_maps_YandexHybrid',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left; background-color: blue;",
                                                                               }, 
                                                          MMOE_panels_2x4_d5:  {
                                                                                 MapType: 'MMOE_maps_GoogleRoadmap',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left; background-color: red;",
                                                                               },
                                                          MMOE_panels_2x4_d6:  {
                                                                                 MapType: 'MMOE_maps_GoogleSatellite',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left; background-color: blue;",
                                                                               }, 
                                                          MMOE_panels_2x4_d7:  {
                                                                                 MapType: 'MMOE_maps_GoogleHybrid',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left; background-color: red;",
                                                                               },
                                                          MMOE_panels_2x4_d8:  {
                                                                                 MapType: 'MMOE_maps_GoogleTerrain',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left; background-color: blue;",
                                                                               }, 
                                                        }  
                                                },
                               MMOE_panels_1_1x2: {
                                                  name: "Одна карта сверху, две снизу",
                                                  divs: {
                                                          MMOE_panels_1_1x2_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 100%; height: 50%; background-color: red;",
                                                                               },
                                                          MMOE_panels_1_1x2_d2:  {
                                                                                 MapType: 'MMOE_maps_YandexSatellite',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left; background-color: blue;",
                                                                               }, 
                                                          MMOE_panels_1_1x2_d3:  {
                                                                                 MapType: 'MMOE_maps_GoogleRoadmap',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left; background-color: red;",
                                                                               },
                                                        }  
                                                },
                               MMOE_panels_1x2_1: {
                                                  name: "Две карты сверху, одна снизу",
                                                  divs: {
                                                          MMOE_panels_1x2_1_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left;background-color: red;",
                                                                               },
                                                          MMOE_panels_1x2_1_d2:  {
                                                                                 MapType: 'MMOE_maps_YandexSatellite',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left; background-color: blue;",
                                                                               }, 
                                                          MMOE_panels_1x2_1_d3:  {
                                                                                 MapType: 'MMOE_maps_GoogleRoadmap',
                                                                                 DivStyle: "width: 100%; height: 50%; float: left; background-color: red;",
                                                                               },
                                                        }  
                                                },

                             }
              };


mmoe_container='';
//alertObj(MMOE_config)



//==================================================================================================================================================
var mmoe_init = function (mmoe_cont)
 { 
  mmoe_container=mmoe_cont;
  window.onload = mmoe_init_phase1_google;
 }



//==================================================================================================================================================
var mmoe_init_phase1_google = function ()
 {
   var script = document.createElement("script");
   script.type = "text/javascript";
   script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyDPXRXp8rOcUFC-2R0Ygdar83SU3NJXoOg&sensor=FALSE&callback=mmoe_init_phase2_yandex';
   document.body.appendChild(script);
 }



//==================================================================================================================================================
var mmoe_init_phase2_yandex = function ()
 {
   var script = document.createElement("script");
   script.type = "text/javascript";
   script.src = 'http://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=mmoe_init_phase_final';
   document.body.appendChild(script);                                                                      
 }



//==================================================================================================================================================
var mmoe_init_phase_final =  function ()
 {
    mmoe_InitBasicdiv(mmoe_container);
    mmoe_CreatePanelSelectElement();
    mmoe_InitMaps();
    mmoe_ChangePanel(MMOE_config.MMOE_panels_cur);
 }


//==================================================================================================================================================
var mmoe_CreatePanelSelectElement =  function ()
 {
  var str='<select onchange="mmoe_ChangePanel(this.options[this.selectedIndex].value)" >';
  for(curpanel in MMOE_config.MMOE_panels) {
   if ( curpanel == MMOE_config.MMOE_panels_cur) 
     {
       str=str+'<option value="'+curpanel+'" selected >'+MMOE_config.MMOE_panels[curpanel].name+'</option>';
     }
   else
     {
       str=str+'<option value="'+curpanel+'">'+MMOE_config.MMOE_panels[curpanel].name+'</option>';
     }
  }
  str=str+'</select>'

  $('#MMOEtop').append(str);

  }



//==================================================================================================================================================
var mmoe_ChangePanel =  function (panel)
 {
   $('#MMOEleft').empty();

  //Бэкапим координаты центра карты и zoom;
  var centerX= MMOE_config.MMOE_config_int.MMOEmapCenterX;
  var centerY= MMOE_config.MMOE_config_int.MMOEmapCenterY;
  var zoom= MMOE_config.MMOE_config_int.MMOEmapZoom;

 //перемещаем все карты в MMOEnull
    for(curmap in MMOE_config.MMOE_maps) {
      mmoe_MoveMapContainer(curmap,'MMOEnull');
    }
  for(curpanel in MMOE_config.MMOE_panels) {
     $('#'+curpanel).remove();
  }

 MMOE_config.MMOE_panels_cur=panel;
 //создаем DIV для выбраной панели
   $('#MMOEint').append('<div id="'+panel+'" style="width: 100%; height: 100%;"></div>');
//   $('#MMOEint').append('<div id="'+panel+'" style="width: 100%; height: 100%; position: absolute; top: 0px; left: 0px;"></div>');
   for(curdiv in MMOE_config.MMOE_panels[panel].divs) {
     $('#'+panel).append('<div id="'+curdiv+'" style="'+MMOE_config.MMOE_panels[panel].divs[curdiv].DivStyle+'"></div>');       
     mmoe_MoveMapContainer (MMOE_config.MMOE_panels[panel].divs[curdiv].MapType,curdiv);
   }
 // Восстанавливаем центр и зум
 mmoe_SetMapZoom('none',zoom);
 mmoe_SetMapCenter('none',centerX,centerY);

 }


//==================================================================================================================================================
var mmoe_InitBasicdiv =  function (mmoe_container)
 {
// Создаем базовые div
   $('#'+mmoe_container).append('<div id="MMOEtop" style="width: 100%; height:'+MMOE_config.MMOE_config_int.MMOEtopHeight+'; background-colr: blue;"></div>');
//   $('#'+mmoe_container).append('<div id="MMOEint" style="position: relative; width: -moz-calc(100% - '+MMOE_config.MMOE_config_int.MMOEleftWight+' - '+MMOE_config.MMOE_config_int.MMOErightWight+'); height: -webkit-calc(100% - '+MMOE_config.MMOE_config_int.MMOEleftWight+' - '+MMOE_config.MMOE_config_int.MMOErightWight+'); height: calc(100% - '+MMOE_config.MMOE_config_int.MMOEleftWight+' - '+MMOE_config.MMOE_config_int.MMOErightWight+');  height: -moz-calc(100% - '+MMOE_config.MMOE_config_int.MMOEtopHeight+' - '+MMOE_config.MMOE_config_int.MMOEdownHeight+'); height: -webkit-calc(100% - '+MMOE_config.MMOE_config_int.MMOEtopHeight+' - '+MMOE_config.MMOE_config_int.MMOEdownHeight+'); height: calc(100% - '+MMOE_config.MMOE_config_int.MMOEtopHeight+' - '+MMOE_config.MMOE_config_int.MMOEdownHeight+');"></div>');
//   $('#'+mmoe_container).append('<div id="MMOEint" style="position: relative; width: 100%;  height: -moz-calc(100% - '+MMOE_config.MMOE_config_int.MMOEtopHeight+' - '+MMOE_config.MMOE_config_int.MMOEdownHeight+'); height: -webkit-calc(100% - '+MMOE_config.MMOE_config_int.MMOEtopHeight+' - '+MMOE_config.MMOE_config_int.MMOEdownHeight+'); height: calc(100% - '+MMOE_config.MMOE_config_int.MMOEtopHeight+' - '+MMOE_config.MMOE_config_int.MMOEdownHeight+');"></div>');
//   $('#MMOEint').append('<div id="MMOEright" style="opacity: 0.5; width: '+MMOE_config.MMOE_config_int.MMOErightWight+'; height: 100%; position: absolute; top: 0px; right: 0px; background-color: yellow; "></div>');
//   $('#MMOEint').append('<div id="MMOEright" style="opacity: 0.5; width: '+MMOE_config.MMOE_config_int.MMOErightWight+'; height: 100%; position: absolute; top: 0px; right: 0px; z-index: 100; background-color: yellow; "></div>');
//   $('#MMOEint').append('<div id="MMOEleft" style="opacity: 0.5; width: '+MMOE_config.MMOE_config_int.MMOEleftWight+'; height: 100%;  background-color: green;"></div>');
//   $('#MMOEint').append('<div id="MMOEleft" style="opacity: 0.5; width: '+MMOE_config.MMOE_config_int.MMOEleftWight+'; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 100; background-color: green;"></div>');
   $('#'+mmoe_container).append('<div id="MMOEmiddle" style="position: relative; width: 100%;  height: -moz-calc(100% - '+MMOE_config.MMOE_config_int.MMOEtopHeight+' - '+MMOE_config.MMOE_config_int.MMOEdownHeight+'); height: -webkit-calc(100% - '+MMOE_config.MMOE_config_int.MMOEtopHeight+' - '+MMOE_config.MMOE_config_int.MMOEdownHeight+'); height: calc(100% - '+MMOE_config.MMOE_config_int.MMOEtopHeight+' - '+MMOE_config.MMOE_config_int.MMOEdownHeight+');"></div>');

   $('#MMOEmiddle').append('<div id="MMOEleft"  style="float: left; width: '+MMOE_config.MMOE_config_int.MMOEleftWight+'; height: 100%; background-color: green;"></div>');
   $('#MMOEmiddle').append('<div id="MMOEint"   style="float: left; width: -moz-calc(100% - '+MMOE_config.MMOE_config_int.MMOEleftWight+' - '+MMOE_config.MMOE_config_int.MMOErightWight+'); width: -webkit-calc(100% - '+MMOE_config.MMOE_config_int.MMOEleftWight+' - '+MMOE_config.MMOE_config_int.MMOErightWight+'); width: calc(100% - '+MMOE_config.MMOE_config_int.MMOEleftWight+' - '+MMOE_config.MMOE_config_int.MMOErightWight+'); height:  100%;"></div>');
   $('#MMOEmiddle').append('<div id="MMOEright" style="float: left; width: '+MMOE_config.MMOE_config_int.MMOErightWight+'; height: 100%; background-color: yellow; "></div>');

   $('#'+mmoe_container).append('<div id="MMOEdown" style="width: 100%; height:'+MMOE_config.MMOE_config_int.MMOEdownHeight+'; background-colr: blue; float: none;"></div>');
   $('#'+mmoe_container).append('<div id="MMOEnull" style="width: 0px; height: 0px; display: none;"></div>');
//   $('#'+mmoe_container).append('<div id="" style=""></div>');
//   $('#'+mmoe_container).append('<div id="" style=""></div>');

 }


//==================================================================================================================================================
var mmoe_MoveMapContainer =  function (mapId, target)
 {
      $('#'+mapId).appendTo('#'+target);
      if (target == 'MMOEnull') 
        {
          MMOE_config.MMOE_maps[mapId].location='none';
        }
      else 
        {
          MMOE_config.MMOE_maps[mapId].location=target;
        }
      switch (MMOE_config.MMOE_maps[mapId].provider) 
      {
       case 'GOOGLE':
         google.maps.event.trigger(MMOE_config.MMOE_maps[mapId].map, 'resize');
       break
       case 'YANDEX':
        MMOE_config.MMOE_maps[mapId].map.container.fitToViewport();
       break

      };   
 }





//==================================================================================================================================================
var mmoe_InitMaps =  function ()
 {
   for(curmap in MMOE_config.MMOE_maps) {
    $('#MMOEnull').append('<div id="'+curmap+'" style="width: 100%; height: 100%; border: 0px solid gray;"></div>');
    switch (MMOE_config.MMOE_maps[curmap].provider) 
      {
       case 'GOOGLE':
        MMOE_config.MMOE_maps[curmap].map = mmoe_InitGoogleMap(curmap);
       break
       case 'YANDEX':
        MMOE_config.MMOE_maps[curmap].map = mmoe_InitYandexMap(curmap);
       break
      };   
   }
 }



//==================================================================================================================================================
var mmoe_InitYandexMap =  function (mapId)

 {
    var MMOE_yamap = new ymaps.Map(mapId, {
        center: [MMOE_config.MMOE_config_int.MMOEmapCenterX, MMOE_config.MMOE_config_int.MMOEmapCenterY], // Москва
        zoom: MMOE_config.MMOE_config_int.MMOEmapZoom,
        type: MMOE_config.MMOE_maps[mapId].type,
        controls: []
    });
    $( ".ymaps-2-1-17-copyright" ).css( "display", "none" );

    MMOE_yamap.events.add('click', function (event) {
     mmoe_MakeMapTypeDialog(mapId);
    });

    MMOE_yamap.events.add('boundschange', function (event) {
      if ((event.get('newCenter')[0] !=  event.get('oldCenter')[0]) ||(event.get('newCenter')[1] !=  event.get('oldCenter')[1]))
       {
        if ((event.get('newCenter')[0].toFixed(8) !=  MMOE_config.MMOE_config_int.MMOEmapCenterX.toFixed(8)) || (event.get('newCenter')[1].toFixed(8) !=  MMOE_config.MMOE_config_int.MMOEmapCenterY.toFixed(8)))
         {
//          console.log('Yandex X: '+event.get('newCenter')[0].toFixed(8));
//          console.log('Global X: '+MMOE_config.MMOE_config_int.MMOEmapCenterX.toFixed(8));
//          console.log('Yandex Y: '+event.get('newCenter')[1].toFixed(8));
//          console.log('Global Y: '+MMOE_config.MMOE_config_int.MMOEmapCenterY.toFixed(8));

           mmoe_SetMapCenter(mapId,event.get('newCenter')[0],event.get('newCenter')[1]);
         }
       }
      if (event.get('oldZoom') !=  event.get('newZoom')) 
        {
         if (MMOE_config.MMOE_config_int.MMOEmapZoom !=  event.get('newZoom')) 
           {
             mmoe_SetMapZoom(mapId,event.get('newZoom'));
           }
      }
    });



    return (MMOE_yamap);

}  



//==================================================================================================================================================
var mmoe_InitGoogleMap =  function (mapId)
 {
   var mapOptions = {
     center: new google.maps.LatLng(MMOE_config.MMOE_config_int.MMOEmapCenterX, MMOE_config.MMOE_config_int.MMOEmapCenterY),
     zoom: MMOE_config.MMOE_config_int.MMOEmapZoom,
     disableDefaultUI: true,
//     mapTypeId: MMOE_config.MMOE_maps[mapId].type
   };
   var MMOE_gmap = new google.maps.Map(document.getElementById(mapId),
       mapOptions);

   var openStreet = new google.maps.ImageMapType(
     {
       getTileUrl: function(ll, z) 
         {
          var X = ll.x % (1 << z);  // wrap
          return "http://tile.openstreetmap.org/" + z + "/" + X + "/" + ll.y + ".png";
         },
       tileSize: new google.maps.Size(256, 256),
		  isPng: true,
		  maxZoom: 18,
		  name: "OSM",
		  alt: "Слой с Open Streetmap"
     }); 
 
    MMOE_gmap.mapTypes.set('osm', openStreet);
    MMOE_gmap.setMapTypeId(MMOE_config.MMOE_maps[mapId].type);

   google.maps.event.addDomListener(MMOE_gmap, 'tilesloaded', function(){
    // Отключаем копирайты. Мешают.
    $( ".gm-style-cc" ).css( "display", "none" );
   });

   google.maps.event.addListener(MMOE_gmap, 'center_changed', function() {
    if ((MMOE_gmap.center.lat().toFixed(8) !=  MMOE_config.MMOE_config_int.MMOEmapCenterX.toFixed(8)) ||(MMOE_gmap.center.lng().toFixed(8) !=  MMOE_config.MMOE_config_int.MMOEmapCenterY.toFixed(8)))
      {
        mmoe_SetMapCenter(mapId,MMOE_gmap.center.lat(),MMOE_gmap.center.lng());
      }
   });

   google.maps.event.addListener(MMOE_gmap, 'zoom_changed', function() {
     if (MMOE_config.MMOE_config_int.MMOEmapZoom !=  MMOE_gmap.getZoom()) 
       {
         mmoe_SetMapZoom(mapId,MMOE_gmap.getZoom());
       }
   });
   google.maps.event.addListener(MMOE_gmap, 'click', function() {
     mmoe_MakeMapTypeDialog(mapId);
   });

   return (MMOE_gmap);

 } 



//==================================================================================================================================================
var mmoe_SetMapCenter =  function (mapId,newx,newy)
 {
   var gcoords=new google.maps.LatLng(newx, newy)
   MMOE_config.MMOE_config_int.MMOEmapCenterX=newx;
   MMOE_config.MMOE_config_int.MMOEmapCenterY=newy;
//   console.log('!!!!!!!!!!!!! New center from '+mapId);
  
   for(curmap in MMOE_config.MMOE_maps) {
    if ((curmap != mapId) && (MMOE_config.MMOE_maps[curmap].location != 'none'))
      {
//        console.log('set new center for '+curmap+' from '+mapId);
        switch (MMOE_config.MMOE_maps[curmap].provider) 
          {
           case 'GOOGLE':
             MMOE_config.MMOE_maps[curmap].map.setCenter(gcoords);
           break
           case 'YANDEX':
             MMOE_config.MMOE_maps[curmap].map.setCenter([newx, newy]);
           break
          };
      }
   }
//   console.log('!!!!!!!!!!!!! End New center from '+mapId);

 }


//==================================================================================================================================================
var mmoe_SetMapZoom =  function (mapId,zoom)
 {
   MMOE_config.MMOE_config_int.MMOEmapZoom=zoom;
 //   console.log('!!!!!!!!!!!!! New center from '+mapId);
  
   for(curmap in MMOE_config.MMOE_maps) {
    if ((curmap != mapId) && (MMOE_config.MMOE_maps[curmap].location != 'none'))
      {
        MMOE_config.MMOE_maps[curmap].map.setZoom(zoom);
      }
   }

 }


//==================================================================================================================================================
var mmoe_ChangeMapType =  function (container,mapId)
 {
//   console.log('newmap panel '+MMOE_config.MMOE_panels_cur);
//   console.log('newmap container '+container);
//   console.log('newmap mapId '+mapId);
//   var targetpanel=MMOE_config.MMOE_panels[MMOE_config.MMOE_panels_cur];
//   console.log('newmap targetpanel '+targetpanel);
   MMOE_config.MMOE_panels[MMOE_config.MMOE_panels_cur].divs[container].MapType=mapId;
   mmoe_ChangePanel (MMOE_config.MMOE_panels_cur);
 }


//==================================================================================================================================================
var mmoe_MakeMapTypeDialog =  function (mapId)
 {
//   console.log('Click from '+mapId);
//   console.log('location '+MMOE_config.MMOE_maps[mapId].location);
   $('#MMOEleft').empty();
   var str='<select onchange="mmoe_ChangeMapType(\''+MMOE_config.MMOE_maps[mapId].location+'\', this.options[this.selectedIndex].value)" >';

 //  var str='<select>';
   for(curmap in MMOE_config.MMOE_maps) {
    if (MMOE_config.MMOE_maps[curmap].location == 'none')
     {
      str=str+'<option value="'+curmap+'">'+MMOE_config.MMOE_maps[curmap].name+'</option>';
     }
    if (curmap == mapId)
     {
      str=str+'<option value="'+curmap+'" selected >'+MMOE_config.MMOE_maps[curmap].name+'</option>';
     }
   }

  str=str+'</select>'

  $('#MMOEleft').append(str);



 }






























//==================================================================================================================================================
var mmoe_init_yamap =  function (ym_container)

 {

    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    MMOE_yamap = new ymaps.Map(ym_container, {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 8,
        controls: []
    });
//     MMOE_yamap.controls.add('routeEditor');
//    alert ( document.getElementById(ym_container).offsetHeight)


//    MMOE_yamap.controls.add
//     (
//      new ymaps.control.ZoomControl({
//        options: {
//                   size: "large",
//                   float: "none",
//                   position: {
//                               left: 120,
//                                bottom: 0 
//                              }
//                 }
//      })
//     );

 //  MMOE_yamap.events.add('actiontick', function (event) {
//    console.log('actiontick');
//    console.log(event.get ('tick').globalPixelCenter);
//    console.log(MMOE_yamap.converter.pageToGlobal(event.get ('tick').globalPixelCenter));
//    mmoe_set_map_center(ym_container,MMOE_yamap.getCenter()[0],MMOE_yamap.getCenter()[1]);
    //mmoe_set_map_zoom(ym_container,MMOE_yamap.getZoom());
//   });


    MMOE_yamap.events.add('boundschange', function (event) {
      if ((event.get('newCenter')[0] !=  event.get('oldCenter')[0]) ||(event.get('newCenter')[1] !=  event.get('oldCenter')[1])){
        mmoe_set_map_center(ym_container,event.get('newCenter')[0],event.get('newCenter')[1]);
      }
//       console.log('newcenter')
//       console.log(event.get('newCenter'))
//       console.log('oldcenter')
//       console.log(event.get('oldCenter'))

      if (event.get('oldZoom') !=  event.get('newZoom')){
        mmoe_set_map_zoom(ym_container,event.get('newZoom'));
       console.log('newzoom')
       console.log(event.get('newZoom'))
       console.log('oldzoom')
       console.log(event.get('oldZoom'))
      }



    });


     var elements = document.getElementById(ym_container).getElementsByClassName('ymaps-2-1-17-copyright');
	    for (i = 0; i < elements.length; i++) {
	        elements[i].style.display = 'none';
	    }

    return (MMOE_yamap);

}  

var mmoe_init_gmap =  function (gm_container)
 {

   var mapOptions = {
     center: new google.maps.LatLng(55.76, 37.64),
     zoom: 8,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   var MMOE_gmap = new google.maps.Map(document.getElementById(gm_container),
       mapOptions);

//     var elements = document.getElementById(gm_container).getElementsByClassName('gmnoprint');
//	    for (i = 0; i < elements.length; i++) {
//	        alert ('!');
//	        elements[i].style.display = 'none';
//	    }

    google.maps.event.addListener(MMOE_gmap, 'center_changed', function() {
    //   console.log('google center')
    //   console.log(MMOE_gmap.center.lat())
       mmoe_set_map_center(gm_container,MMOE_gmap.center.lat(),MMOE_gmap.center.lng());

     });

    google.maps.event.addListener(MMOE_gmap, 'zoom_changed', function() {
      mmoe_set_map_zoom(gm_container,MMOE_gmap.getZoom());


     });

   return (MMOE_gmap);


 } 

var mmoe_set_map_center =  function (mapid,newx,newy)
 {
//       console.log(mapid)
 //      console.log(MMOEmapcenterchanged)
    if (MMOEmapcenterchanged == 0) {
       MMOEmapcenterchanged =1;
      // console.log('change center')
      // console.log(newx)
       if (mapid != 'MMOEgrid22-1') {mmoe_ymap_sat.setCenter([newx, newy])};
       if (mapid != 'MMOEgrid22-2') {mmoe_ymap_map.setCenter([newx, newy])};
       var gcoords=new google.maps.LatLng(newx, newy)
       if (mapid != 'MMOEgrid22-3') {mmoe_gmap_sat.setCenter(gcoords)};
       if (mapid != 'MMOEgrid22-4') {mmoe_gmap_map.setCenter(gcoords)};
//       console.log('end change center')
       MMOEmapcenterchanged =0;
     };
 //  console.log(MMOEmapcenterchanged)

 } 

var mmoe_set_map_zoom =  function (mapid,zoom)
 {
       console.log(mapid)

    if (MMOEmapzoomchanged == 0) {
       MMOEmapzoomchanged =1;
      console.log('change zoom');

       if (mapid != 'MMOEgrid22-1') {mmoe_ymap_sat.setZoom(zoom)};
       if (mapid != 'MMOEgrid22-2') {mmoe_ymap_map.setZoom(zoom)};
       if (mapid != 'MMOEgrid22-3') {mmoe_gmap_sat.setZoom(zoom)};
       if (mapid != 'MMOEgrid22-4') {mmoe_gmap_map.setZoom(zoom)};

       MMOEmapzoomchanged =0;
     };

         //mmoe_ymap_sat.setCenter([newx, newy]);
       //mmoe_ymap_map.panTo([newx, newy], {delay: 0});
 } 

var mmoe_move_map =  function ()
 {
  $('#mapdiv').appendTo('#MMOEgrid22-4');
     var center = mmoe_gmap_sat.getCenter();
    google.maps.event.trigger(mmoe_gmap_sat, "resize");
     mmoe_gmap_sat.setCenter(center); 
 }