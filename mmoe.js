
/*
=====================================
Multi Map Object Editor
Version: 0.3.3
Copyright: 2014-2015, Yury Fedorov AKA Dr.Yu. yfedorov@gmail.com http://www.dryu.ru
=====================================
See README.TXT 
*/
var mmoeVersion='0.3.3';


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
function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
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
                                             size: '23px',
                                           },
                                 MMOEdown: {
                                             size: '20px',
                                           },
                                 MMOEleft: {
                                             size: '210px',
                                           },
                                 MMOEright: {
                                             size: '210px',
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
                                   MMOE_PropertiesDivName: 'MMOEproperties',
                                   MMOE_ObjectsDivName: 'MMOEobjects',
                                   MMOE_MapZoom: 8,
                                   MMOE_MapCenterX: 55.76,
                                   MMOE_MapCenterY: 37.64,
                                   MMOE_CoordsLength: 6,
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
//                                      MMOE_ab_Track: {
//                                                       title: 'Создать путь',
//                                                       img: 'images/mmoe_button_track.png',
//                                                     },   
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
                MMOE_panels_cur: "MMOE_panels_1x2",
//                MMOE_panels_prev: "none",
                // MMOE_panels - Варианты расположения окон карт на экране.
                MMOE_panels: {
                               // Название контейнера используется как глобальный DIV. Для наименования используются подчеркивания ( _ )
                               MMOE_panels_1: {
                               //  ┌─┬─┐
                               //  ├─┼─┤
                               //  └─┴─┘
                                
                                                //Наименование для меню     
                                                name: "Одна карта",
                                                //DIV внутри контейнера
                                                divs: {
                                                        //Название внутреннего DIV
                                                        MMOE_panels_1_d1:  {
                                                                           // Тип карты в этом контейнере.
                                                                           MapType: 'MMOE_maps_GoogleRoadmap',
                                                                           // Стиль для создаваемого DIV
                                                                           DivStyle: "width: 100%; height: 100%;",
                                                                         } 
                                                      }  
                                              },
                               MMOE_panels_1x2: {
                              //  ┌───┐
                              //  ├───┤
                              //  └───┘
                                                  name: "Две карты рядом по горизонтали",
                                                  divs: {
                                                          MMOE_panels_1x2_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 50%; height: 100%; float: left;",
                                                                               },
                                                          MMOE_panels_1x2_d2:  {
                                                                                 MapType: 'MMOE_maps_GoogleRoadmap',
                                                                                 DivStyle: "width: 50%; height: 100%; float: left;",
                                                                               } 
                                                        }  
                                                },
                               MMOE_panels_2x1: {
                               //  ┌─┬─┐
                               //  │ │ │
                               //  └─┴─┘
                                                  name: "Две карты друг над другом",
                                                  divs: {
                                                          MMOE_panels_2x1_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 100%; height: 50%; float: left;",
                                                                               },
                                                          MMOE_panels_2x1_d2:  {
                                                                                 MapType: 'MMOE_maps_GoogleSatellite',
                                                                                 DivStyle: "width: 100%; height: 50%; float: left;",
                                                                               } 
                                                        }  
                                                },
                               MMOE_panels_2x2: {
                               //  ┌─┬─┐
                               //  ├─┼─┤
                               //  └─┴─┘
                                                  name: "Четыре карты сеткой",
                                                  divs: {
                                                          MMOE_panels_2x2_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left;",
                                                                               },
                                                          MMOE_panels_2x2_d2:  {
                                                                                 MapType: 'MMOE_maps_YandexSatellite',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left;",
                                                                               }, 
                                                          MMOE_panels_2x2_d3:  {
                                                                                 MapType: 'MMOE_maps_GoogleRoadmap',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left;",
                                                                               },
                                                          MMOE_panels_2x2_d4:  {
                                                                                 MapType: 'MMOE_maps_GoogleSatellite',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left;",
                                                                               }, 
                                                        }  
                                                },
                               MMOE_panels_2x4: {
                                                  name: "Восемь карт сеткой",
                                                  divs: {
                                                          MMOE_panels_2x4_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left;",
                                                                               },
                                                          MMOE_panels_2x4_d2:  {
                                                                                 MapType: 'MMOE_maps_YandexSatellite',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left;",
                                                                               }, 
                                                          MMOE_panels_2x4_d3:  {
                                                                                 MapType: 'MMOE_maps_YandexPublicMap',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left;",
                                                                               },
                                                          MMOE_panels_2x4_d4:  {
                                                                                 MapType: 'MMOE_maps_YandexHybrid',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left;",
                                                                               }, 
                                                          MMOE_panels_2x4_d5:  {
                                                                                 MapType: 'MMOE_maps_GoogleRoadmap',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left;",
                                                                               },
                                                          MMOE_panels_2x4_d6:  {
                                                                                 MapType: 'MMOE_maps_GoogleSatellite',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left;",
                                                                               }, 
                                                          MMOE_panels_2x4_d7:  {
                                                                                 MapType: 'MMOE_maps_GoogleHybrid',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left;",
                                                                               },
                                                          MMOE_panels_2x4_d8:  {
                                                                                 MapType: 'MMOE_maps_GoogleTerrain',
                                                                                 DivStyle: "width: 25%; height: 50%; float: left;",
                                                                               }, 
                                                        }  
                                                },
                               MMOE_panels_1_1x2: {
                              //  ┌───┐
                              //  ├─┬─┤
                              //  └─┴─┘
                                                  name: "Одна карта сверху, две снизу",
                                                  divs: {
                                                          MMOE_panels_1_1x2_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 100%; height: 50%;",
                                                                               },
                                                          MMOE_panels_1_1x2_d2:  {
                                                                                 MapType: 'MMOE_maps_YandexSatellite',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left;",
                                                                               }, 
                                                          MMOE_panels_1_1x2_d3:  {
                                                                                 MapType: 'MMOE_maps_GoogleRoadmap',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left;",
                                                                               },
                                                        }  
                                                },
                               MMOE_panels_1x2_1: {
                               //  ┌─┬─┐
                               //  ├─┴─┤
                               //  └───┘
                                                  name: "Две карты сверху, одна снизу",
                                                  divs: {
                                                          MMOE_panels_1x2_1_d1:  {
                                                                                 MapType: 'MMOE_maps_YandexMap',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left;",
                                                                               },
                                                          MMOE_panels_1x2_1_d2:  {
                                                                                 MapType: 'MMOE_maps_YandexSatellite',
                                                                                 DivStyle: "width: 50%; height: 50%; float: left;",
                                                                               }, 
                                                          MMOE_panels_1x2_1_d3:  {
                                                                                 MapType: 'MMOE_maps_GoogleRoadmap',
                                                                                 DivStyle: "width: 100%; height: 50%; float: left;",
                                                                               },
                                                        }  
                                                },
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


//    dhtmlLoadScript("markerwithlabel.js");
    loadjscssfile("markerwithlabel.js", "js");
    loadjscssfile("mmoe.css", "css");

    mmoe_InitBasicdiv(mmoe_container);
    mmoe_InitMaps();
    mmoe_InitTopMenu();
    mmoe_ChangePanel(MMOE_config.MMOE_panels_cur);

  str='MMOE (Multi Map Object Editor), version '+mmoeVersion+' (C) Yury Fedorov AKA Dr.Yu. Вся информация доступна <a href=\'README.TXT\' target=\'_blank\'>здесь</a>';
  $('#'+MMOE_config.MMOE_config_int.MMOE_InfobarDivName).append(str);

 }



//==================================================================================================================================================
var mmoe_InitBasicdiv =  function (mmoe_container)
 {
   $('#'+mmoe_container).append('<div id="MMOEtop" style="width: 100%; height:'+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+';"></div>');
   $('#'+mmoe_container).append('<div id="MMOEmiddle" style="position: relative; width: 100%;  height: -moz-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+'); height: -webkit-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+'); height: calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_TopMenuDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+');"></div>');

   $('#MMOEmiddle').append('<div id="MMOEleft"  style="float: left; width: '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+'; height: 100%;"></div>');
   $('#MMOEmiddle').append('<div id="MMOEint"   style="float: left; width: -moz-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'); width: -webkit-calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'); width: calc(100% - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_PrimaryWSDivName].size+' - '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'); height:  100%;"></div>');
   $('#MMOEmiddle').append('<div id="MMOEright" style="float: left; width: '+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_SecondaryWSDivName].size+'; height: 100%;"></div>');

//   $('#MMOEleft').append('<div id="MMOEleft_int"  style="float: left; w!idth: 100%; height: 100%;"></div>');
   $('#MMOEleft').append('<div id="MMOEproperties"  style="float: left; overflow-y: auto; min-w!idth: 100%; w!idth: 100%; min-height: 1px; m!ax-height: 25%;"></div>');
   $('#MMOEright').append('<div id="MMOEobjects"  style="float: left; overflow-y: auto; w!idth: 100%; m!ax-height: 75%;"></div>');

   $('#'+mmoe_container).append('<div id="MMOEdown" style="width: 100%; height:'+MMOE_config.MMOE_divs_int[MMOE_config.MMOE_config_int.MMOE_InfobarDivName].size+'; float: none;"></div>');
   $('#'+mmoe_container).append('<div id="MMOEnull" style="width: 0px; height: 0px; display: none;"></div>');

 }

//==================================================================================================================================================
var mmoe_InitTopMenu =  function ()
 {

//MMOE_TopMenuDivName

  //Создаем выпадающий список панелей. 
  str='<div id="MMOEchangePanelDiv" style="float: left;"></div>';
  $('#'+MMOE_config.MMOE_config_int.MMOE_TopMenuDivName).append(str);

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

//  $('#'+MMOE_config.MMOE_config_int.MMOE_TopMenuDivName).append(str);  
$('#MMOEchangePanelDiv').append(str);


  //Создаем кнопки управления
  str='<div id="MMOEactionButtons" style="float: left;">'
  str=str+'</div>';
  $('#'+MMOE_config.MMOE_config_int.MMOE_TopMenuDivName).append(str);


  for(curbutton in MMOE_config.MMOE_action_buttons) 
    {
      str='<div id="'+curbutton+'Div" class="MMOE_action_buttons_div" style=""></div>';
      //str=str+'</div>';
      $('#MMOEactionButtons').append(str);
      str='<button id="'+curbutton+'" title="'+MMOE_config.MMOE_action_buttons[curbutton].title+'" type="button" class="MMOE_action_button" style="background: url(\''+MMOE_config.MMOE_action_buttons[curbutton].img+'\') no-repeat; " onclick="mmoe_EventButtonClick(\''+curbutton+'\')">'
      str=str+'</button>';
      $('#'+curbutton+'Div').append(str);
    }
   mmoe_EventButtonClick(MMOE_config.MMOE_current_action);
	
 }




//==================================================================================================================================================
var mmoe_ChangePanel =  function (panel)
 {
      $('#'+MMOE_config.MMOE_config_int.MMOE_PropertiesDivName).empty();
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
   $('#MMOEint').append('<div id="'+panel+'"style="width: 100%; height: 100%;"></div>');
//   $('#MMOEint').append('<div id="'+panel+'" style="width: 100%; height: 100%; position: absolute; top: 0px; left: 0px;"></div>');
   for(curdiv in MMOE_config.MMOE_panels[panel].divs) {
     $('#'+panel).append('<div id="'+curdiv+'"class="MMOE_panel_div"  style="'+MMOE_config.MMOE_panels[panel].divs[curdiv].DivStyle+'"></div>');       
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
    $('#'+MMOE_config.MMOE_config_int.MMOE_NoneMapDivName).append('<div id="'+curmap+'" class="MMOE_map_div" style=""></div>');
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
             for(curpoint in MMOE_config.MMOE_obj.MMOE_points) 
               {
                 var myLatlng = new google.maps.LatLng(MMOE_config.MMOE_obj.MMOE_points[curpoint].coordX, MMOE_config.MMOE_obj.MMOE_points[curpoint].coordY);
                 var icon = "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=|FF0000|000000";
                 var marker = new MarkerWithLabel(
                   {
                     position: myLatlng,
                     map: MMOE_config.MMOE_maps[curmap].map,
     //                title: MMOE_config.MMOE_obj.MMOE_points[curpoint].name,
                     labelContent: MMOE_config.MMOE_obj.MMOE_points[curpoint].name,
                     labelAnchor: new google.maps.Point(22, 0),
                     labelClass: "labels", // the CSS class for the label
                     labelStyle: {opacity: 0.75} ,
                     icon: icon,
                     //handCursor: 'url(images/chart.png) 11 40, default',
                     //draggable: true,


                   });
                  var setgoogleevent =  function (mmoeid)
                   {
                  
                     google.maps.event.addListener(marker, 'click', function(event) 
                       {
                         console.log(event)
//                       alertObj(event);        
                         mmoe_EventOnClick('point',  mmoeid, event.latLng.lat(), event.latLng.lng());

                       });
                     google.maps.event.addListener(marker, 'dragend', function(event) 
                      {
//                       alertObj(marker.getPosition());
                        //alertObj(event.latLng);
                        mmoe_EventOnMove('point', mmoeid, event.latLng.lat(), event.latLng.lng());
                      });
                   }

                  setgoogleevent(curpoint);

                  switch (MMOE_config.MMOE_current_action) 
                   {
                    case 'MMOE_ab_Select':

                      marker.setDraggable(true);
                      marker.setCursor('default');
                    break
                    case 'MMOE_ab_Point':
//                      marker.setCursor('url(images/chart.png) 11 40, default');
                      marker.setCursor('crosshair');
                     // marker.set(handCursor, 'url(images/chart.png) 11 40, default');
                    break
                   }

                 MMOE_config.MMOE_maps[curmap].markers.push(marker);

               }



           break
           case 'YANDEX':
//             alertObj(MMOE_config.MMOE_maps[curmap].map);        
      //       alertObj(MMOE_config.MMOE_obj)        

             MMOE_config.MMOE_maps[curmap].map.geoObjects.removeAll();

             for(curpoint in MMOE_config.MMOE_obj.MMOE_points) 
               {
                myGeoObject = new ymaps.Placemark(
                   [MMOE_config.MMOE_obj.MMOE_points[curpoint].coordX, MMOE_config.MMOE_obj.MMOE_points[curpoint].coordY],
                   {
                     iconContent: MMOE_config.MMOE_obj.MMOE_points[curpoint].name,
                   },
                   {
                     iconLayout: 'default#imageWithContent',
                     iconImageHref: 'images/chart.gif', // картинка иконки
                     iconImageSize: [21, 34], // размер иконки
                     iconImageOffset: [-10, -40], // позиция иконки
                     iconContentOffset: [-18, 40],
//                    draggable: true,
                   });
//                myGeoObject.mmoeId=curpoint;

                var setyandexevent =  function (mmoeid)
                  {
                     myGeoObject.events.add('click', function (event) 
                       {
                         mmoe_EventOnClick('point', mmoeid, event.get('coords')[0], event.get('coords')[1]);
                       });

                    myGeoObject.events.add('dragend', function (event) 
                      {
                       mmoe_EventOnMove('point', mmoeid, event.originalEvent.target.geometry.getCoordinates()[0], event.originalEvent.target.geometry.getCoordinates()[1]);
                      });
                  }


                  switch (MMOE_config.MMOE_current_action) 
                   {
                    case 'MMOE_ab_Select':
                      myGeoObject.options.set('draggable',true);
                      myGeoObject.options.set('cursor','Default');
                    break
                    case 'MMOE_ab_Point':
                      myGeoObject.options.set('cursor','crosshair');
                    break
                   }

                //console.log(myGeoObject.options);
                setyandexevent(curpoint);

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
    Point.id=pointId;
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
   $('#'+MMOE_config.MMOE_config_int.MMOE_PropertiesDivName).empty();
   var str='Тип карты:';

   str=str+'<select onchange="mmoe_ChangeMapType(\''+MMOE_config.MMOE_maps[mapId].location+'\', this.options[this.selectedIndex].value)" >';

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

  $('#'+MMOE_config.MMOE_config_int.MMOE_PropertiesDivName).append(str);



 }




//==================================================================================================================================================
var mmoe_EditPointMenu = function (pointId)
  {


  var inputDecimalPositiveFilter = function (e) {
        //console.log(e.target.value);
        //console.log(e.keyCode);

        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
             // Allow: Ctrl+A
            ($.inArray(e.keyCode, [65, 67, 86, 88, 90]) !== -1  && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    };

  var inputDecimalNegativeFilter = function (e) {
        //.log(e.keyCode);

        // Allow: backspace, delete, tab, escape, enter and .
        if (e.keyCode == 173 && +e.target.selectionStart == 0 ) 
         {
           return;
         }
        inputDecimalPositiveFilter(e);

    };



 // console.log("edit point "+pointId+MMOE_config.MMOE_obj.MMOE_points[pointId].name)

    $('#'+MMOE_config.MMOE_config_int.MMOE_PropertiesDivName).empty();
    var str='<b>Редактировать метку</b><br>';
 
    str=str+'Имя:<br><input type="text" id="MMOE_PointName" value="'+MMOE_config.MMOE_obj.MMOE_points[pointId].name+'"></input>'
    str=str+'Координаты:<br>ГГ.ГГГГГГ°:<br>';
    var coordX=MMOE_config.MMOE_obj.MMOE_points[pointId].coordX.split('.');
    var coordY=MMOE_config.MMOE_obj.MMOE_points[pointId].coordY.split('.');
    str=str+'X: <input type="text" id="MMOE_PointCoordsXgg_gggggg_1" maxlength="3" size="4" value="'+coordX[0]+'"></input>.'
    str=str+'<input type="text" id="MMOE_PointCoordsXgg_gggggg_2" maxlength="6" size="6" value="'+coordX[1]+'"></input>°<br>'

    str=str+'Y: <input type="text" id="MMOE_PointCoordsYgg_gggggg_1" maxlength="4" size="4"value="'+coordY[0]+'"></input>.'
    str=str+'<input type="text" id="MMOE_PointCoordsYgg_gggggg_2" maxlength="6" size="6"value="'+coordY[1]+'"></input>°<br>'

//    str=str+'X: <input type="text" id="MMOE_PointCoordsXgg_gggggg" value="'+MMOE_config.MMOE_obj.MMOE_points[pointId].coordX+'"></input><br>'
//    str=str+'Y: <input type="text" id="MMOE_PointCoordsYgg_gggggg" value="'+MMOE_config.MMOE_obj.MMOE_points[pointId].coordY+'"></input><br>'
//    str=str+MMOE_config.MMOE_obj.MMOE_points[pointId].coordX+'<br>';
//    str=str+MMOE_config.MMOE_obj.MMOE_points[pointId].coordY+'<br>';


    str=str+'<input type="button" id="MMOE_PointSave" value="Сохранить"></input>'
    str=str+'<input type="button" id="MMOE_PointDelete" value="Удалить"></input>'
    str=str+'<a href="http://goondel.ucoz.ru/" target="_blank">Конвертер</a>';
    $('#'+MMOE_config.MMOE_config_int.MMOE_PropertiesDivName).append(str);

    $("#MMOE_PointCoordsXgg_gggggg_1").keydown(inputDecimalNegativeFilter);
    $("#MMOE_PointCoordsXgg_gggggg_2").keydown(inputDecimalPositiveFilter);
    $("#MMOE_PointCoordsYgg_gggggg_1").keydown(inputDecimalNegativeFilter);
    $("#MMOE_PointCoordsYgg_gggggg_2").keydown(inputDecimalPositiveFilter);


    $('#MMOE_PointCoordsXgg_gggggg_1').on('input', function()
      {
//       console.log(MMOE_PointCoordsXgg_gggggg_1.value);
      //  console.log($('#MMOE_PointCoordsXgg_gggggg_1').val()+'.'+$('#MMOE_PointCoordsXgg_gggggg_2').val());
      //  console.log($('#MMOE_PointCoordsXgg_gggggg_1'));
      });



    $('#MMOE_PointSave').click(function()
      {
        if ($('#MMOE_PointCoordsXgg_gggggg_1').val() == ''){ $('#MMOE_PointCoordsXgg_gggggg_1').val('0')};
        if ($('#MMOE_PointCoordsXgg_gggggg_2').val() == ''){ $('#MMOE_PointCoordsXgg_gggggg_2').val('0')};
        if ($('#MMOE_PointCoordsYgg_gggggg_1').val() == ''){ $('#MMOE_PointCoordsYgg_gggggg_1').val('0')};
        if ($('#MMOE_PointCoordsYgg_gggggg_2').val() == ''){ $('#MMOE_PointCoordsYgg_gggggg_2').val('0')};


        MMOE_config.MMOE_obj.MMOE_points[pointId].coordX=$('#MMOE_PointCoordsXgg_gggggg_1').val()+'.'+$('#MMOE_PointCoordsXgg_gggggg_2').val();
        MMOE_config.MMOE_obj.MMOE_points[pointId].coordY=$('#MMOE_PointCoordsYgg_gggggg_1').val()+'.'+$('#MMOE_PointCoordsYgg_gggggg_2').val();

        if (parseFloat(MMOE_config.MMOE_obj.MMOE_points[pointId].coordX) > 85){MMOE_config.MMOE_obj.MMOE_points[pointId].coordX ='85.0'}
        if (parseFloat(MMOE_config.MMOE_obj.MMOE_points[pointId].coordX) < -85){MMOE_config.MMOE_obj.MMOE_points[pointId].coordX ='-85.0'}
        if (parseFloat(MMOE_config.MMOE_obj.MMOE_points[pointId].coordY) > 180){MMOE_config.MMOE_obj.MMOE_points[pointId].coordY ='180.0'}
        if (parseFloat(MMOE_config.MMOE_obj.MMOE_points[pointId].coordY) < -180){MMOE_config.MMOE_obj.MMOE_points[pointId].coordY ='-180.0'}

        MMOE_config.MMOE_obj.MMOE_points[pointId].name=$('#MMOE_PointName').val();
        mmoe_InitObj();
        mmoe_EditPointMenu(pointId)
    });
    $('#MMOE_PointDelete').click(function()
      {
        delete MMOE_config.MMOE_obj.MMOE_points[pointId];
        $('#'+MMOE_config.MMOE_config_int.MMOE_PropertiesDivName).empty();
        mmoe_InitObj();
    });
   
  }


//==================================================================================================================================================
var mmoe_EventButtonClick = function (ButtonId)
 {
//  console.log('Button Click '+ButtonId);
  MMOE_config.MMOE_current_action=ButtonId;
       
//       map.setOptions({ draggableCursor: 'url(images/markers/you_marker.cur), default' });

   switch (ButtonId) 
    {
     case 'MMOE_ab_Select':
       for(curmap in MMOE_config.MMOE_maps) {
        switch (MMOE_config.MMOE_maps[curmap].provider) 
          {
           case 'GOOGLE':
            MMOE_config.MMOE_maps[curmap].map.setOptions({ draggableCursor: 'default' });
           break
           case 'YANDEX':
            MMOE_config.MMOE_maps[curmap].map.options.set('dragCursor', 'arrow');
           break
          };   
        }
     break
     case 'MMOE_ab_Point':
       for(curmap in MMOE_config.MMOE_maps) {
        switch (MMOE_config.MMOE_maps[curmap].provider) 
          {
           case 'GOOGLE':
//            MMOE_config.MMOE_maps[curmap].map.setOptions({ draggableCursor: 'url(images/chart.png) 11 40, default' });
            MMOE_config.MMOE_maps[curmap].map.setOptions({ draggableCursor: 'crosshair' });
           break
           case 'YANDEX':
            MMOE_config.MMOE_maps[curmap].map.options.set('dragCursor', 'crosshair');
           break
          };   
        }
     break
    }





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

  mmoe_InitObj();


//border-width: 0px 3px 3px 0px;
// margin: 3px 0px 0px 3px
  //$('#'+ButtonId).css('margin','1px 0px 0px 1px');

 }

//==================================================================================================================================================
var mmoe_EventOnClick = function (objectType,objectId,coordX,coordY)
 {
// console.log("click. Type: "+objectType+" ID: "+objectId+' X:'+coordX+ 'Y: '+coordY)

  switch (MMOE_config.MMOE_current_action) 
  {
   case 'MMOE_ab_Select':
     switch (objectType) 
       {
         case 'map':
             mmoe_EditMapTypeMenu(objectId);
         break
         case 'point':
             mmoe_EditPointMenu(objectId);
         break
         case 'track':
         break

       };
   break
   case 'MMOE_ab_Point':
     mmoe_CreatePoint(coordX.toFixed(MMOE_config.MMOE_config_int.MMOE_CoordsLength),coordY.toFixed(MMOE_config.MMOE_config_int.MMOE_CoordsLength));
   break
   case 'MMOE_ab_Track':
   break

  };   

 }

//==================================================================================================================================================
var mmoe_EventOnMove = function (objectType,objectId,coordX,coordY)
 {
// console.log("MOVE. Type: "+objectType+" ID: "+objectId+' X:'+coordX+ 'Y: '+coordY)

     switch (objectType) 
       {
         case 'map':
//             mmoe_EditMapTypeMenu(objectId);
         break
         case 'point':
           MMOE_config.MMOE_obj.MMOE_points[objectId].coordX=coordX.toFixed(MMOE_config.MMOE_config_int.MMOE_CoordsLength);
           MMOE_config.MMOE_obj.MMOE_points[objectId].coordY=coordY.toFixed(MMOE_config.MMOE_config_int.MMOE_CoordsLength);
           mmoe_InitObj();
           mmoe_EditPointMenu(objectId);
         break
         case 'track':
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












 