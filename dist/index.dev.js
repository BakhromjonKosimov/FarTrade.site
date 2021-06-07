"use strict";

var data = [{
  name: "Sanoat",
  image: "images/1.jpg"
}, {
  name: "Qishloq Xo'jaligi",
  image: "images/2.jpg"
}, {
  name: "Maishiy Xizmat",
  image: "images/3.jpg"
}, {
  name: "Hunarmand",
  image: "images/4.jpg"
}, {
  name: "Savdo",
  image: "images/5.jpg"
}, {
  name: "Xorijiy Texnologiya",
  image: "images/6.jpg"
}, {
  name: "Xorijiy Hom-ashyo",
  image: "images/7.jpg"
}, {
  name: "Xorijiy Tayyor Mahsulot",
  image: "images/8.jpg"
}, {
  name: "Xorijiy Xizmat",
  image: "images/9.jpg"
}, {
  name: "Xorijiy Qishloq Ho'jaligi",
  image: "images/10.jpg"
}, {
  name: "Taklif",
  image: "images/11.jpg"
}, {
  name: "E'lon",
  image: "images/12.jpg"
}];
$(document).ready(function () {
  buildProductView(data);
}); // All search

$(".all").on("click", function () {
  buildProductView(data);
});
$(".foo").on("click", function () {
  var filterBrand = this.innerHTML;
  var filterData = data.filter(function (set) {
    return filterBrand === set.name ? true : false;
  });
  buildProductView(filterData);
  console.log(buildProductView);
}); // qidiruv  ----------

$("#search").on("keyup", function () {
  var currentText = $(this).val().toLowerCase();
  var filtered = data.filter(function (obj) {
    var newObj = JSON.stringify(obj).toLowerCase();

    if (newObj.includes(currentText)) {
      return true;
    } else {
      return false;
    }
  });
  buildProductView(filtered);
});

function buildProductView(arr) {
  $("#cards").empty();
  arr.forEach(function (set) {
    var perProduct = '<div class="card" style="width: 13rem; margin:30px; border:none;">' + ' <img src=" ' + set.image + ' ">' + '<div class="card-body">' + '  <h5 class="card-title">' + set.name + '</h5>' + '</div>' + ' </div>';
    $("#cards").append(perProduct);
  });
}

$('.counter-count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 5000,
    easing: 'swing',
    step: function step(now) {
      $(this).text(Math.ceil(now));
    }
  });
});