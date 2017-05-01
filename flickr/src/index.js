import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill';
import $ from 'JQuery';

class Greet extends Component {
 render() {
  const apiKey = "";
  function getFlickrImageURL(photo, size){
   var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret;
   if(size) {
    url += "_" + size;
   }
   url += ".jpg";
   return url;
  }
  function getFlickrPageURL(photo){
   return "https://www.flickr.com/photos/" + photo.owner + "/" + photo.id
  }
  function getFlickrText(photo) {
   var text = '"' + photo.title + '" by' + photo.ownername;
   if(photo.license == "4") {
    text += ' / CC BY';
   }
   return text;
  }

  $(function(){
   var parameters = $.param({
    method: "flickr.photos.search",
    api_key: apiKey,
    text: "cat",
    sort: "interestingness-desc",
    license: "4",
    extras: "owner_name,license",
    format: "json",
    nojsoncallback: 1
   });
   var flickr_url = "https://api.flickr.com/services/rest/?" + parameters;
   console.log(flickr_url);

   $.getJSON(flickr_url, function(data){
    console.log(data);
    if(data.stat == "ok") {
     var $div = $("<div>");
     $div.append("<div>" + data.photos.total + "photos in total</div>");
     for (var i = 0; i< data.photos.photo.length; i++){
      var photo = data.photos.photo[i];
      var photoText = getFlickrText(photo);
      $div.append(
          $("<a>", {
           href: getFlickrPageURL(photo),
           "class" : "flickr-link",
           "target": "_blank",
           "data-toggle" : "tooltip",
           "data-placement" : "bottom",
           "tilte": photoText
          }).append($("<img>", {
           src: getFlickrImageURL(photo, "q"),
           width: 150,
           height: 150,
           alt: photoText
          }))
      );
     }
     $div.appendTo("main");
    }
   });
  });
  return (
   <ul id='result'></ul>
  )
 }
}
window.addEventListener('DOMContentLoaded', ()=>{
 ReactDOM.render(<Greet />, document.querySelector('main'));
})

