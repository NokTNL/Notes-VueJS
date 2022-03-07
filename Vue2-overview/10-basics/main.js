// the Vue constructor is imported in the script
// creates a new Vue instance and pass an object into the constructor for configuration:
var app = new Vue({
  // el: specifies where to inject the app
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

// now "app" contains every key-value paies in "data"
console.log(app.message); // "Hello Vue!"
