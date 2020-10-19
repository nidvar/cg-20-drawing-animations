const duration_input_from_dom = document.getElementById('user_input');
const pause_button_from_dom = document.getElementById('pause_button');
const start_button_from_dom = document.getElementById('start_button');

//grab 'my_timer' class from timerClass.js

const z = new my_timer(start_button_from_dom, pause_button_from_dom, duration_input_from_dom, {
    onStart(){
        console.log('starting the border')
    },
    onTick(){
        console.log('border ticking down')
    },
    onPause(){
        console.log('paused')
    }
})