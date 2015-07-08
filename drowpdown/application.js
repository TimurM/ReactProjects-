var options = {
  thumbnailData: [{
    title: "See Course",
    number: "12",
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

//define a 'class'
var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
       this.props.title, React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    })

    return (
      React.createElement("div", null, 
        list
      )
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
      React.createElement("div", {className: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
            React.createElement(Badge, {title: this.props.title, number: this.props.number})
          )
        )
      )
    )
  }
});
