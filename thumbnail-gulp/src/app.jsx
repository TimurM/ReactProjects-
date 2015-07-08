var React = require('react');
var ThumbnailList = require("./thumbnail-list");

var options = {
  thumbnailData: [{
    title: "See Course",
    number: "121",
    header: 'Learn React',
    description: 'React is a fantastic new library for making fast, dynamic components',
    imageUrl: 'http://ih1.redbubble.net/image.32576156.9850/sticker,375x360.png'
  },
  {
    title: "See Course",
    number: "25",
    header: 'Learn Gulp',
    description: 'React is a fantastic new library for making fast, dynamic components',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }]
}

//React, please render this class
var element = React.createElement(ThumbnailList, options);

//React after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));
