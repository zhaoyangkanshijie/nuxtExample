import Vue from 'vue';

//import LoadImage from "../components/LoadImage";

const components = { /*LoadImage*/ };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
});