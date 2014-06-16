if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to semantic-test.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
  Template.hello.rendered = function(){
    console.log('working!')
    $('.dropdown').dropdown();
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
