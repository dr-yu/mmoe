//Multi Map Object Editor
//Version: 0.3, 24.11.2014
// Добавлено создание точек
//
//Version: 0.2.2, 19.11.2014
// Добавлена карта OpenStreetMap
//
//Version: 0.2.1, 17.11.2014
// Полностью переработана внутренняя логика
// Введен объект MMOE_config, Все фунции работают только с ним. 
// Добавлена возможность выбора набора окон
// Добавлена возможность выбора типа карты (при клике на карту)
//
//Version: 0.2, 17.11.2014
// Добавлены карты google
//
//Version: 0.1, 12.11.2014
// Первый релиз карт, карты yandex

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

//==================================================================================================================================================

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

//==================================================================================================================================================

function alertObj(obj) { 
    var str = strObj(obj,"",10); 
    alert(str);
    console.log(str)
}  



//==================================================================================================================================================
function dhtmlLoadScript(url)
{
   var e = document.createElement("script");
   e.src = url;
   e.type="text/javascript";
   document.getElementsByTagName("head")[0].appendChild(e); 
}

//==================================================================================================================================================

MMOE_config = {
                MMOE_divs_int: {
                                 MMOEtop:  {
                                             size: '24px',
                                           },
                                 MMOEdown: {
                                             size: '20px',
                                           },
                                 MMOEleft: {
                                             size: '200px',
                                           },
                                 MMOEright: {
                                             size: '0px',
                                           },
                                 MMOEactionButtons: {
                                                      style: '',
                                                    },


                               },
                MMOE_config_int: {
//                                   MMOE_TopDivSize: '50px',
//                                   MMOE_DownDivSize:'20px',
//                                   MMOE_LeftDivSize:'200px',
//                                   MMOE_RightDivSize:'0px',
                                   MMOE_NoneMapDivName: 'MMOEnull',
                                   MMOE_TopMenuDivName: 'MMOEtop',
                                   MMOE_InfobarDivName: 'MMOEdown',
                                   MMOE_PrimaryWSDivName: 'MMOEleft',
                                   MMOE_SecondaryWSDivName: 'MMOEright',
                                   MMOE_ActionButtonsDivName: 'MMOEactionButtons',
                                   MMOE_MapZoom: 8,
                                   MMOE_MapCenterX: 55.76,
                                   MMOE_MapCenterY: 37.64,
                                 },

                MMOE_current_action: 'MMOE_ab_Select',
                // MMOE_action_buttons - Кнопки управления
                MMOE_action_buttons: {
                                      MMOE_ab_Select: {
                                                         title: 'Указатель',
                                                         img: 'images/mmoe_button_select.png',
                                                       },   
                                      MMOE_ab_Point: {
                                                       title: 'Создать точку',
                                                       img: 'images/mmoe_button_point.png',
                                                     },   
                                      MMOE_ab_Track: {
                                                       title: 'Создать путь',
                                                       img: 'images/mmoe_button_track.png',
                                                     },   
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
//                MMOE_panels_prev: "none",
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

                            },
                //MMOE_obj - основной контейнер для хранения объектов - точек, треков и т.д
                MMOE_obj: {
                            MMOE_newgroup_id: 0,
                            MMOE_groups: {
                                         },
                            //id для новых точек.
                            MMOE_newpoint_id: 0,
                            MMOE_points: {
                                         },
                            MMOE_newtrack_id: 0,
                            MMOE_tracks: {
                                         },
                          }
              };
//alertObj(MMOE_config)

//

//Создаем переменную для основного DIV ID
mmoe_container='';



//==================================================================================================================================================
var mmoe_init = function (mmoe_cont)
// Главная функция запуска MMOE. Агрумент - DIV ID контейнера для размещения.
 { 
  //Записываем DIV ID в глобальную переменную.
  mmoe_container=mmoe_cont;
  //Добавляем инициализацию, запускаемую после загрузки всей страницы
  window.onload = mmoe_init_phase1_google;
 }



//==================================================================================================================================================
var mmoe_init_phase1_google = function ()
//Функция инициализации js Google. Запускается после загрузки всей страницы
 {
   var script = document.createElement("script");
   script.type = "text/javascript";
   script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyDPXRXp8rOcUFC-2R0Ygdar83SU3NJXoOg&sensor=FALSE&callback=mmoe_init_phase2_yandex';
                                                                                                                //Google callback - функция, запускаемая после загрузки и инициализации API Google
   document.body.appendChild(script);
 }



//==================================================================================================================================================
var mmoe_init_phase2_yandex = function ()
//Функция инициализации js Яндекса. Запускается после загрузки JS Google
 {
   var script = document.createElement("script");
   script.type = "text/javascript";
   script.src = 'http://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=mmoe_init_phase_final';
                                                        //Google onload - функция, запускаемая после загрузки и инициализации API Yandex
   document.body.appendChild(script);                                                                      
 }


//==================================================================================================================================================
var mmoe_init_phase_final =  function ()
//Финальная функция инициализации
 {


   dhtmlLoadScript("markerwithlabel.js");

    mmoe_InitBasicdiv(mmoe_container);
    mmoe_InitTopMenu();
    mmoe_InitMaps();
    mmoe_ChangePanel(MMOE_config.MMOE_panels_cur);
 }



//==================================================================================================================================================
var mmoe_InitBasicdiv =  function (mmoe_container)
 {
// Создаем базовые div

//MMOE_config.MMOE_config_int.MMOE_TopDivSize
//MMOE_config.MMOE_config_int.MMOE_TopMenuDivName
//MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size

//MMOE_config.MMOE_config_int.MMOE_DownDivSize
//MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size

//MMOE_config.MMOE_config_int.MMOE_LeftDivSize
//MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size

//MMOE_config.MMOE_config_int.MMOE_RightDivSize
//MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size


   $('#'+mmoe_container).append('<div id="MMOEtop" style="width: 100%; padding-top: 4px; height:'+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+'; background-colr: blue;"></div>');
//   $('#'+mmoe_container).append('<div id="MMOEint" style="position: relative; width: -moz-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'); height: -webkit-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'); height: calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+');  height: -moz-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+'); height: -webkit-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+'); height: calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+');"></div>');
//   $('#'+mmoe_container).append('<div id="MMOEint" style="position: relative; width: 100%;  height: -moz-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+'); height: -webkit-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+'); height: calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+');"></div>');
//   $('#MMOEint').append('<div id="MMOEright" style="opacity: 0.5; width: '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'; height: 100%; position: absolute; top: 0px; right: 0px; background-color: yellow; "></div>');
//   $('#MMOEint').append('<div id="MMOEright" style="opacity: 0.5; width: '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'; height: 100%; position: absolute; top: 0px; right: 0px; z-index: 100; background-color: yellow; "></div>');
//   $('#MMOEint').append('<div id="MMOEleft" style="opacity: 0.5; width: '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+'; height: 100%;  background-color: green;"></div>');
//   $('#MMOEint').append('<div id="MMOEleft" style="opacity: 0.5; width: '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+'; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 100; background-color: green;"></div>');
   $('#'+mmoe_container).append('<div id="MMOEmiddle" style="position: relative; width: 100%;  height: -moz-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+'); height: -webkit-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+'); height: calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+');"></div>');

   $('#MMOEmiddle').append('<div id="MMOEleft"  style="float: left; width: '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+'; height: 100%; background-color: green;"></div>');
   $('#MMOEmiddle').append('<div id="MMOEint"   style="float: left; width: -moz-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'); width: -webkit-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'); width: calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'); height:  100%;"></div>');
   $('#MMOEmiddle').append('<div id="MMOEright" style="float: left; width: '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'; height: 100%; background-color: yellow; "></div>');

   $('#'+mmoe_container).append('<div id="MMOEdown" style="width: 100%; height:'+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+'; background-colr: blue; float: none;"></div>');
   $('#'+mmoe_container).append('<div id="MMOEnull" style="width: 0px; height: 0px; display: none;"></div>');
//   $('#'+mmoe_container).append('<div id="" style=""></div>');
//   $('#'+mmoe_container).append('<div id="" style=""></div>');

 }

//==================================================================================================================================================
//var mmoe_AddButton =  function (TargetDiv,ButtonId,Title,ImgSource)
// {
//   str='<button id="'+ButtonId+'" title="'+Title+'" type="button" style=" padding: 0px; border-width: 0px; width: 19px; height: 19px; border-width: 0px 3px 3px 0px;  border-style: solid;  display: inline-block; background: url(\''+ImgSource+'\') no-repeat; " onclick="mmoe_EventButtonClick(\''+ButtonId+'\')">'
//   str=str+'</button>';
//   $('#'+TargetDiv).append(str);
// }


//==================================================================================================================================================
var mmoe_InitTopMenu =  function ()
 {

//MMOE_TopMenuDivName

  //Создаем выпадающий список панелей. 
  var str='<select onchange="mmoe_ChangePanel(this.options[this.selectedIndex].value)" style="float: left" >';
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

  $('#'+MMOE_config.MMOE_config_int.MMOE_TopMenuDivName).append(str);

  //Создаем кнопки управления
  str='<div id="MMOEactionButtons" style="float: left;">'
  str=str+'</div>';
  $('#'+MMOE_config.MMOE_config_int.MMOE_TopMenuDivName).append(str);


  for(curbutton in MMOE_config.MMOE_action_buttons) 
    {
      str='<div id="'+curbutton+'Div" style="float: left; width: 19px; height: 19px; margin-right: 5px;">'
      str=str+'</div>';
      $('#MMOEactionButtons').append(str);
      str='<button id="'+curbutton+'" title="'+MMOE_config.MMOE_action_buttons[curbutton].title+'" type="button" style="padding: 0px; width: 19px; height: 19px;  border-style: solid;  display: inline-block; background: url(\''+MMOE_config.MMOE_action_buttons[curbutton].img+'\') no-repeat; " onclick="mmoe_EventButtonClick(\''+curbutton+'\')">'
      str=str+'</button>';
      $('#'+curbutton+'Div').append(str);
    }
   mmoe_EventButtonClick(MMOE_config.MMOE_current_action);


//  mmoe_AddButton('MMOEactionButtons','MMOEbuttonArrow','Перемещение','images/pointer_5685.png');
//<img src="images/menu1.jpg" onmouseover="this.src = 'images/menu1_a.jpg'" onmouseout="this.src = 'images/menu1.jpg'" onclick="this.src = 'images/menu1_a1.jpg'"alt="">
	
 }




//==================================================================================================================================================
var mmoe_ChangePanel =  function (panel)
 {
   $('#MMOEleft').empty();

  //Бэкапим координаты центра карты и zoom;
  var centerX= MMOE_config.MMOE_config_int.MMOE_MapCenterX;
  var centerY= MMOE_config.MMOE_config_int.MMOE_MapCenterY;
  var zoom= MMOE_config.MMOE_config_int.MMOE_MapZoom;

 //перемещаем все карты в нулевой контейнер
    for(curmap in MMOE_config.MMOE_maps) {
      mmoe_MoveMapContainer(curmap, MMOE_config.MMOE_config_int.MMOE_NoneMapDivName);
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

 mmoe_InitObj();
 }


//==================================================================================================================================================
var mmoe_MoveMapContainer =  function (mapId, target)
 {
      $('#'+mapId).appendTo('#'+target);
      if (target == MMOE_config.MMOE_config_int.MMOE_NoneMapDivName) 
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
    $('#'+MMOE_config.MMOE_config_int.MMOE_NoneMapDivName).append('<div id="'+curmap+'" style="width: 100%; height: 100%; border: 0px solid gray;"></div>');
    switch (MMOE_config.MMOE_maps[curmap].provider) 
      {
       case 'GOOGLE':
        MMOE_config.MMOE_maps[curmap].map = mmoe_InitGoogleMap(curmap);
        MMOE_config.MMOE_maps[curmap].markers = [];
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
        center: [MMOE_config.MMOE_config_int.MMOE_MapCenterX, MMOE_config.MMOE_config_int.MMOE_MapCenterY], // Москва
        zoom: MMOE_config.MMOE_config_int.MMOE_MapZoom,
        type: MMOE_config.MMOE_maps[mapId].type,
        controls: []
    });
    $( ".ymaps-2-1-17-copyright" ).css( "display", "none" );


    MMOE_yamap.events.add('click', function (event) 
     {
   //    mmoe_EventOnMapClick(mapId, event.get('coords')[0], event.get('coords')[1]);
       mmoe_EventOnClick('map', mapId, event.get('coords')[0], event.get('coords')[1]);

     });

    //Добавляем обработчик изменения параметров карты
    MMOE_yamap.events.add('boundschange', function (event) 
      {
        //Проверяем изменился ли центр карты
        if ((event.get('newCenter')[0] !=  event.get('oldCenter')[0]) ||(event.get('newCenter')[1] !=  event.get('oldCenter')[1]))
          {
            //Сравниваем новый центр с тем, который прописан в конфиге. Если совпадают (до 8 знака), значит событие произошло, когда карту двигали программно, то есть игнорируем.
            if ((event.get('newCenter')[0].toFixed(8) !=  MMOE_config.MMOE_config_int.MMOE_MapCenterX.toFixed(8)) || (event.get('newCenter')[1].toFixed(8) !=  MMOE_config.MMOE_config_int.MMOE_MapCenterY.toFixed(8)))
              {
                mmoe_SetMapCenter(mapId,event.get('newCenter')[0],event.get('newCenter')[1]);
              }
          }
        //Проверяем изменился ли центр зум
        if (event.get('oldZoom') !=  event.get('newZoom')) 
          {
           //Сравниваем новый зум с тем, который прописан в конфиге. Если совпадают, значит событие произошло, когда карту двигали программно, то есть игнорируем.
            if (MMOE_config.MMOE_config_int.MMOE_MapZoom !=  event.get('newZoom')) 
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
     center: new google.maps.LatLng(MMOE_config.MMOE_config_int.MMOE_MapCenterX, MMOE_config.MMOE_config_int.MMOE_MapCenterY),
     zoom: MMOE_config.MMOE_config_int.MMOE_MapZoom,
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

   // Задаем обработчик изменения центра карты
   google.maps.event.addListener(MMOE_gmap, 'center_changed', function() 
     {
       //Сравниваем новый центр с тем, который прописан в конфиге. Если совпадают (до 8 знака), значит событие произошло, когда карту двигали программно, то есть игнорируем.
       if ((MMOE_gmap.center.lat().toFixed(8) !=  MMOE_config.MMOE_config_int.MMOE_MapCenterX.toFixed(8)) ||(MMOE_gmap.center.lng().toFixed(8) !=  MMOE_config.MMOE_config_int.MMOE_MapCenterY.toFixed(8)))
         {
           mmoe_SetMapCenter(mapId,MMOE_gmap.center.lat(),MMOE_gmap.center.lng());
         }
     });

   // Задаем обработчик изменения зума
   google.maps.event.addListener(MMOE_gmap, 'zoom_changed', function() 
     {
       //Сравниваем новый зум с тем, который прописан в конфиге. Если совпадают, значит событие произошло, когда карту двигали программно, то есть игнорируем.
       if (MMOE_config.MMOE_config_int.MMOE_MapZoom !=  MMOE_gmap.getZoom()) 
         {
           mmoe_SetMapZoom(mapId,MMOE_gmap.getZoom());
        }
     });

   // Задаем обработчик клика по карте
   google.maps.event.addListener(MMOE_gmap, 'click', function(event) 
     {
      // mmoe_EventOnMapClick(mapId, event.latLng.lat(), event.latLng.lng());
       mmoe_EventOnClick('map', mapId, event.latLng.lat(), event.latLng.lng());
    //  mmoe_EditMapTypeMenu(mapId);
     });

   return (MMOE_gmap);

 } 



//==================================================================================================================================================
var mmoe_SetMapCenter =  function (mapId,newx,newy)
 {
   var gcoords=new google.maps.LatLng(newx, newy)
   MMOE_config.MMOE_config_int.MMOE_MapCenterX=newx;
   MMOE_config.MMOE_config_int.MMOE_MapCenterY=newy;
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
   MMOE_config.MMOE_config_int.MMOE_MapZoom=zoom;
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
   MMOE_config.MMOE_panels[MMOE_config.MMOE_panels_cur].divs[container].MapType=mapId;
   mmoe_ChangePanel (MMOE_config.MMOE_panels_cur);
 }



//==================================================================================================================================================
var mmoe_InitObj = function ()
// Функция выкладывает на карты все объекты, хранящиеся в конфиге. 
  {
  
   for(curmap in MMOE_config.MMOE_maps) {
    if (MMOE_config.MMOE_maps[curmap].location != 'none')
      {
//        console.log('set new center for '+curmap+' from '+mapId);
        switch (MMOE_config.MMOE_maps[curmap].provider) 
          {
           case 'GOOGLE':

              for (var i = 0; i < MMOE_config.MMOE_maps[curmap].markers.length; i++) {
                MMOE_config.MMOE_maps[curmap].markers[i].setMap(null);
              }
              MMOE_config.MMOE_maps[curmap].markers=[];
        //     MMOE_config.MMOE_maps[curmap].map.setCenter(gcoords);
             for(curpoint in MMOE_config.MMOE_obj.MMOE_points) 
               {
                 var myLatlng = new google.maps.LatLng(MMOE_config.MMOE_obj.MMOE_points[curpoint].coordX, MMOE_config.MMOE_obj.MMOE_points[curpoint].coordY);
//                 var icon = "https://chart.googleapis.com/chart?chst=d_bubble_icon_text_small&chld=ski|bb|"+MMOE_config.MMOE_obj.MMOE_points[curpoint].name+"|FFFFFF|000000";
//1                 var icon = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld="+MMOE_config.MMOE_obj.MMOE_points[curpoint].name+"|FF0000|000000";
//                 var icon = "https://chart.googleapis.com/chart?chst=d_bubble_text_small&chld=edge_bc|"+MMOE_config.MMOE_obj.MMOE_points[curpoint].name+"|FFFFFF|000000";
//                 var icon = "https://chart.googleapis.com/chart?chst=d_text_outline&chld=FFCC33|16|h|FF0000|b"+MMOE_config.MMOE_obj.MMOE_points[curpoint].name;
//                 var icon = "https://chart.googleapis.com/chart?chst=d_text_outline&chld=FFCC33|16|h|FF0000|b|"+MMOE_config.MMOE_obj.MMOE_points[curpoint].name;
//                 var marker = new google.maps.Marker(
//                   {
//                     position: myLatlng,
 //                    map: MMOE_config.MMOE_maps[curmap].map,
//                     title: MMOE_config.MMOE_obj.MMOE_points[curpoint].name,

//                   });
//                 MMOE_config.MMOE_maps[curmap].markers.push(marker);

//                 var icon = "https://chart.googleapis.com/chart?chst=d_text_outline&chld=FFCC33|16|h|FF0000|b|"+MMOE_config.MMOE_obj.MMOE_points[curpoint].name;
                 var icon = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|FF0000|000000";
                 var marker = new MarkerWithLabel(
                   {
                     position: myLatlng,
                     map: MMOE_config.MMOE_maps[curmap].map,
     //                title: MMOE_config.MMOE_obj.MMOE_points[curpoint].name,
     //                icon: icon,
       labelContent: MMOE_config.MMOE_obj.MMOE_points[curpoint].name,
       labelAnchor: new google.maps.Point(22, 0),
       labelClass: "labels", // the CSS class for the label
       labelStyle: {opacity: 0.75} ,
                    icon: icon,

                   });
                 MMOE_config.MMOE_maps[curmap].markers.push(marker);

               }



           break
           case 'YANDEX':
//             alertObj(MMOE_config.MMOE_maps[curmap].map);        
      //       alertObj(MMOE_config.MMOE_obj)        

             MMOE_config.MMOE_maps[curmap].map.geoObjects.removeAll();

             for(curpoint in MMOE_config.MMOE_obj.MMOE_points) 
               {
                 myGeoObject = new ymaps.GeoObject(
                   {
                    // Описание геометрии.
                     geometry: {
                                 type: "Point",
                                 coordinates: [MMOE_config.MMOE_obj.MMOE_points[curpoint].coordX, MMOE_config.MMOE_obj.MMOE_points[curpoint].coordY]
              // coordinates: [55.8, 37.8]
                               },
                   // Свойства.
                     properties: {
                                  // Контент метки.
                                   iconContent: MMOE_config.MMOE_obj.MMOE_points[curpoint].name,
                               //    hintContent: 'Ну давай уже тащи'
                                 }
                   },         
                   {
                    // Опции.
                   // Иконка метки будет растягиваться под размер ее содержимого.
                    preset: 'islands#blackStretchyIcon',
                    // Метку можно перемещать.
        //            draggable: true
                  });
              //   alertObj(myGeoObject.geometry);

                MMOE_config.MMOE_maps[curmap].map.geoObjects.add(myGeoObject)
              }
           break
          };
      }
   }
            
  }



//==================================================================================================================================================
var mmoe_CreatePoint = function (coordX,coordY)
  {
    var Point={};
    pointId='Point'+MMOE_config.MMOE_obj.MMOE_newpoint_id;
    MMOE_config.MMOE_obj.MMOE_newpoint_id++;
    Point.name=pointId;
    Point.coordX=coordX;
    Point.coordY=coordY;
    MMOE_config.MMOE_obj.MMOE_points[pointId]=Point;
    mmoe_InitObj();
    mmoe_EditPointMenu(pointId);    
  }
  

//==================================================================================================================================================
//var mmoe_EditMapTypeMenu =  function (mapId)
var mmoe_EditMapTypeMenu =  function (mapId)
 {
//   console.log('Click from '+mapId);
//   console.log('location '+MMOE_config.MMOE_maps[mapId].location);
   $('#'+MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName).empty();
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

  str=str+'</select>';

  $('#'+MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName).append(str);



 }




//==================================================================================================================================================
var mmoe_EditPointMenu = function (PointId)
  {

    $('#'+MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName).empty();
   str='<input type="text" id="MMOE_MapName" value="'+MMOE_config.MMOE_obj.MMOE_points[pointId].name+'"></input>'
  $('#'+MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName).append(str);
  $('#MMOE_MapName').change(function()
    {
     MMOE_config.MMOE_obj.MMOE_points[pointId].name=$('#MMOE_MapName').val();
     mmoe_InitObj();
//     alert($('#MMOE_MapName').val());

    });
  }


//==================================================================================================================================================
var mmoe_EventButtonClick = function (ButtonId)
 {
//  console.log('Button Click '+ButtonId);
  MMOE_config.MMOE_current_action=ButtonId;

  for(curbutton in MMOE_config.MMOE_action_buttons) {
   if (MMOE_config.MMOE_current_action == curbutton)
     {
      $('#'+curbutton).css('border-width','3px 0px 0px 3px');
     }
   else
     {
      $('#'+curbutton).css('border-width','0px 3px 3px 0px');
     }

  }

//border-width: 0px 3px 3px 0px;
// margin: 3px 0px 0px 3px
  //$('#'+ButtonId).css('margin','1px 0px 0px 1px');

 }

//==================================================================================================================================================
var mmoe_EventOnClick = function (obectType,objectId,coordX,CoordY)
 {
  switch (MMOE_config.MMOE_current_action) 
  {
   case 'MMOE_ab_Select':
     switch (obectType) 
       {
         case 'map':
             mmoe_EditMapTypeMenu(objectId);
         break
         case 'point':
         break
         case 'track':
         break

       };
   break
   case 'MMOE_ab_Point':
     mmoe_CreatePoint(coordX,CoordY);
   break
   case 'MMOE_ab_Track':
   break

  };   

 }


//==================================================================================================================================================
//var mmoe_EventOnMapClick = function (mapId,coordX,CoordY)
// {
//   mmoe_EditMapTypeMenu(mapId);
// }

//==================================================================================================================================================
var mmoe_EventOnPointClick = function (mapId,pointId)
 {
 }

//==================================================================================================================================================
var mmoe_EventOnPointMove = function (mapId,pointId)
 {
 }












 