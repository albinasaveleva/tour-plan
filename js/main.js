var hotelSlider = new Swiper('.hotel__swiper-container', {

  loop: true,
      navigation: {
      nextEl: '.hotel__swiper-button-next',
      prevEl: '.hotel__swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })
var reviewSlider = new Swiper('.review__swiper-container', {

  loop: true,
    navigation: {
    nextEl: '.review__swiper-button-next',
    prevEl: '.review__swiper-button-prev',
  },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
})
  
ymaps.ready(init);

function init(){
      var myMap = new ymaps.Map("map", {
          center: [41.01003, 28.97968],
          zoom: 7
      },
      {
        autoFitToViewport: 'always',
        searchControlProvider: 'yandex#search'
    });
      myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [41.01003, 28.97968]
        }    
      });
      myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([41.01003, 28.97968], {
          iconColor: '#0095b6'
        }));
}
