// In Vue, a component is essentially a Vue instance with pre-defined options
// Components are REUSABLE
// To register a new component in Vue:
Vue.component(
  // Name of the component
  "todo-item",
  {
    // The props that it receives from the parent HTML element:
    props: ["todo"],
    // the HTML template to be injected, specified as the "template" property
    // It can reflect props, again, using {{}} text interpolation:
    template: "<li>{{ todo.text }}</li>",
  }
);

// The constructor will "remember" the component we registered:
var app = new Vue({
  el: "#app",
});
