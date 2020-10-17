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
        console.log('tick')
    }
    pause=()=>{
        console.log('pause')
        clearInterval(this.ticking_interval);
    }
}


new my_timer(document.getElementById('start_button'), document.getElementById('pause_button'))