const duration_input_from_dom = document.getElementById('user_input');
const pause_button_from_dom = document.getElementById('pause_button');
const start_button_from_dom = document.getElementById('start_button');

class my_timer {
    constructor(start_button, pause_button, user_input){
        this.start_button = start_button;
        this.pause_button = pause_button;
        this.user_input = user_input;

        this.timer_running = false;

        this.start_button.addEventListener('click', this.start);
        this.pause_button.addEventListener('click', this.pause);
        this.user_input.addEventListener('input', this.set_remaining_time);
    }
    
    start=()=>{
        

        if(this.timer_running == false){
            this.timer_running = true;
            this.tick();
            this.ticking_interval = setInterval(this.tick, 1000)
            console.log(this.ticking_interval)
        }else{
            console.log('timer is already running')
        }

        
    }

    tick=()=>{
        if(this.user_input.value <= 0){
            console.log('0 seconds')
            this.pause();
        }else{
            this.set_remaining_time = this.get_remaining_time - 1;
            console.log(`remaining time: ${this.user_input.value}`)
        }
    }

    pause=()=>{
        this.timer_running = false;
        console.log('pause')
        clearInterval(this.ticking_interval);
    }

    get get_remaining_time(){
        return this.user_input.value
    }

    set set_remaining_time(new_value){
        this.user_input.value = new_value
    }
}

const z = new my_timer(start_button_from_dom, pause_button_from_dom, user_input)