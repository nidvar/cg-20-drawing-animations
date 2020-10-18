const duration_input_from_dom = document.getElementById('duration_input');
const pause_button_from_dom = document.getElementById('pause_button');
const start_button_from_dom = document.getElementById('start_button');

class my_timer {
    constructor(start_button, pause_button, duration_input){
        this.start_button = start_button;
        this.pause_button = pause_button;
        this.duration_input = duration_input;

        this.start_button.addEventListener('click', this.start);
        this.pause_button.addEventListener('click', this.pause);
    }
    
    start=()=>{
        this.tick();
        this.ticking_interval = setInterval(this.tick, 1000)
        console.log(this.ticking_interval)
    }
    tick=()=>{
        let x = parseFloat(duration_input_from_dom.value)
        x = x - 1
        duration_input_from_dom.value = x
        console.log(x)
    }
    pause=()=>{
        console.log('pause')
        clearInterval(this.ticking_interval);
    }
}

const z = new my_timer(start_button_from_dom, pause_button_from_dom, duration_input_from_dom)