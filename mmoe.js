//Multi Map Object Editor
//Version: 0.2, 17.11.2014
//Version: 0.1, 12.11.2014, yandex maps api ver 2.1


var mmoe_init =  function (mmoe_container)

 {


   MMOEtopHeight='0px';
   MMOEdownHeight='0px';
   MMOEleftWight='0px';
   MMOErightWight='0px';

   MMOEmapcenterchanged=0;
   MMOEmapzoomchanged=0;


   var divglobal = document.getElementById(mmoe_container);
  if (!divglobal) 
   {
    alert(mmoe_container);
    alert(divglobal);
    window.setTimeout(mmoe_init(mmoe_container), 1000);
   }

  else
   {
   // var mmoe_map_container=mmoe_init_div(mmoe_container);
    mmoe_init_div(mmoe_container);
    ymaps.ready(function(){
     mmoe_ymap_sat=mmoe_init_yamap('MMOEgrid22-1');
     mmoe_ymap_map=mmoe_init_yamap('MMOEgrid22-2');
     mmoe_ymap_sat.setType('yandex#satellite')

    });
    mmoe_gmap_sat=mmoe_init_gmap('MMOEgrid22-3');
    mmoe_gmap_sat.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    mmoe_gmap_map=mmoe_init_gmap('MMOEgrid22-4');

    //mmoe_set_map_center('xxx',55.76, 37.64);
    //mmoe_set_map_zoom('xxx',10);

    //ymaps.ready(function(){mmoe_init_yamap('MMOE_yamap')});
    //mmoe_init_gmap('MMOE_gmap');

   }
 }

var mmoe_init_div =  function (mmoe_container)
 {



    var divglobal = document.getElementById(mmoe_container);
    divglobal.setAttribute('style',divglobal.getAttribute('style')+' background-colr: gray;');


//Создаем DIV для верхней полосы
     var newdiv = document.createElement('div');
     newdiv.setAttribute('id','MMOEtop');
     newdiv.setAttribute('style','width: 100%; height:'+MMOEtopHeight+'; background-colr: blue;');
     divglobal.appendChild(newdiv);


//Создаем DIV для внутреннего контейнера  
     var intdiv = document.createElement('div');
//     intdiv.setAttribute('id','MMOEtop');
     intdiv.setAttribute('id','MMOEint');
     intdiv.setAttribute('style','position: relative; width: 100%;  height: -moz-calc(100% - '+MMOEtopHeight+' - '+MMOEdownHeight+'); height: -webkit-calc(100% - '+MMOEtopHeight+' - '+MMOEdownHeight+'); height: calc(100% - '+MMOEtopHeight+' - '+MMOEdownHeight+');');
     divglobal.appendChild(intdiv);

//Создаем DIV для сетки 2x2
     var grid22div = document.createElement('div');
     grid22div.setAttribute('id','MMOEgrid22');
     grid22div.setAttribute('style','width: 100%; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 6;');
     intdiv.appendChild(grid22div);

//Создаем DIV для ячейки 2x2-1
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','MMOEgrid22-1');
     newdiv.setAttribute('style','width: 50%; height: 50%; float: left; border: 10px; background-colr: red;');
     grid22div.appendChild(newdiv);
                                                                                                                      

//Создаем DIV для ячейки 2x2-2
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','MMOEgrid22-2');
     newdiv.setAttribute('style','width: 50%; height: 50%; float: left; background-colr: yellow;');
     grid22div.appendChild(newdiv);

//Создаем DIV для ячейки 2x2-3
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','MMOEgrid22-3');
     newdiv.setAttribute('style','width: 50%; height: 50%; float: left; background-colr: yellow;');
     grid22div.appendChild(newdiv);

//Создаем DIV для ячейки 2x2-4
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','MMOEgrid22-4');
     newdiv.setAttribute('style','width: 50%; height: 50%;  float: left; background-colr: red;');
     grid22div.appendChild(newdiv);


//Создаем DIV для yandex карты
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','MMOE_yamap');
     newdiv.setAttribute('style','width: 100%; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 5; display: none;');
     intdiv.appendChild(newdiv);

//Создаем DIV для google карты
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','MMOE_gmap');
     newdiv.setAttribute('style','width: 100%; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 4;');
     intdiv.appendChild(newdiv);

//Создаем DIV для левой полосы
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','MMOEleft');
     newdiv.setAttribute('style','opacity: 0.5; width: '+MMOEleftWight+'; height: 100%; position: absolute; top: 0px; left: 0px; z-index: 100; background-colr: green;');
     intdiv.appendChild(newdiv);

//Создаем DIV для правой полосы
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','MMOEright');
     newdiv.setAttribute('style','opacity: 0.5; width: '+MMOErightWight+'; height: 100%; position: absolute; top: 0px; right: 0px; z-index: 100; background-colr: yellow; ');
     intdiv.appendChild(newdiv);

//Создаем DIV для нижней полосы
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','MMOEdown');
     newdiv.setAttribute('style','width: 100%; height:'+MMOEdownHeight+'; background-colr: blue; float:none;');
     divglobal.appendChild(newdiv);

//  return ('MMOE_yamap');
 }


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
