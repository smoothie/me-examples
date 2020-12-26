import Vue from 'vue';

// Get shared components.
import * as components from './components';

// Register each component.
Object.values(components)
    .forEach(registerComponent);

function registerComponent(component) {
    // You could place custom conditions here. For example:
    // if (window.location.pathname === '/') {
    //     return;
    // }

    Vue.component(component.name, component);
}

// Inject Vue on DOM element with ID applicationContainer.
const awesomeApplication = new Vue({
    el: '#applicationContainer',
});
