const duration_input_from_dom = document.getElementById('user_input');
const pause_button_from_dom = document.getElementById('pause_button');
const start_button_from_dom = document.getElementById('start_button');

const the_circle = document.getElementById('my_circle');



let start = 0;

const radius = the_circle.getAttribute('r')

const perimeter = 2 * Math.PI * radius

let time = duration_input_from_dom.value


const z = new my_timer(start_button_from_dom, pause_button_from_dom, duration_input_from_dom, {
    onStart(){
        time = duration_input_from_dom.value
        start = 0;
        the_circle.setAttribute('stroke-dashoffset', start)
    },
    onTick(){

        start = start - (perimeter/time)/100
        the_circle.setAttribute('stroke-dashoffset', start)
    },
    onPause(){
        console.log('paused')
    }
})