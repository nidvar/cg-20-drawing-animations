class my_timer {
    constructor(start_button, pause_button, duration_input){
        this.start_button = start_button;
        this.pause_button = pause_button;
        this.duration_input = duration_input;
        this.start_button.addEventListener('click', this.start)
    }
    start=()=>{
        console.log('start button clicked - '+ Math.random())
    }
}


new my_timer(document.getElementById('start_button'))