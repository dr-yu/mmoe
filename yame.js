//yame (yandex maps editor)
//Version: 0.1, 12.11.2014, yandex maps api ver 2.1


var yame_init =  function (yame_container)

 {
   var divglobal = document.getElementById(yame_container);
  if (!divglobal) 
   {
    alert(yame_container);
    alert(divglobal);
    window.setTimeout(yame_init(yame_container), 1000);
   }

  else
   {
   // var yame_map_container=yame_init_div(yame_container);
    yame_init_div(yame_container);
    //alert (yame_map_container)
    ymaps.ready(function(){yame_init_yamap('YAMEmap')});
   }
 }

var yame_init_div =  function (yame_container)
 {
    var YAMEtopHeight='40px';
    var YAMEdownHeight='20px';
    var YAMEleftWight='100px';
    var YAMErightWight='100px';

    var divglobal = document.getElementById(yame_container);
    divglobal.setAttribute('style',divglobal.getAttribute('style')+' background-color: gray;');


//Создаем DIV для верхней полосы
     var newdiv = document.createElement('div');
     newdiv.setAttribute('id','YAMEtop');
     newdiv.setAttribute('style','width: 100%; height:'+YAMEtopHeight+'; background-color: blue;');
     divglobal.appendChild(newdiv);


//Создаем DIV для внутреннего контейнера 
     var intdiv = document.createElement('div');
//     intdiv.setAttribute('id','YAMEtop');
     intdiv.setAttribute('style','position: relative; width: 100%;  height: -moz-calc(100% - '+YAMEtopHeight+' - '+YAMEdownHeight+'); height: -webkit-calc(100% - '+YAMEtopHeight+' - '+YAMEdownHeight+'); height: calc(100% - '+YAMEtopHeight+' - '+YAMEdownHeight+');');
     divglobal.appendChild(intdiv);

//Создаем DIV для карты
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','YAMEmap');
     newdiv.setAttribute('style','width: 100%; height: 100%; position: relative;');
     intdiv.appendChild(newdiv);

//Создаем DIV для левой полосы
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','YAMEleft');
     newdiv.setAttribute('style','opacity: 0.5; width: '+YAMEleftWight+'; height: 100%; position: absolute; top: 0px; left: 0px; background-color: green;');
     intdiv.appendChild(newdiv);

//Создаем DIV для правой полосы
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','YAMEright');
     newdiv.setAttribute('style','opacity: 0.5; width: '+YAMErightWight+'; height: 100%; position: absolute; top: 0px; right: 0px; background-color: yellow; ');
     intdiv.appendChild(newdiv);

//Создаем DIV для нижней полосы
     newdiv = document.createElement('div');
     newdiv.setAttribute('id','YAMEdown');
     newdiv.setAttribute('style','width: 100%; height:'+YAMEdownHeight+'; background-color: blue; float:none;');
     divglobal.appendChild(newdiv);

  return ('YAMEmap');
 }


var yame_init_yamap =  function (ym_container)

 {

    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    YAMEmap = new ymaps.Map(ym_container, {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10,
        controls: []
    });
//     YAMEmap.controls.add('routeEditor');
//    alert ( document.getElementById(ym_container).offsetHeight)
    YAMEmap.controls.add
     (
      new ymaps.control.ZoomControl({
        options: {
                   size: "large",
                   float: "none",
                   position: {
                               left: 120,
                                bottom: 0 
                              }
                 }
      })
     );


    return (YAMEmap);

 } 



