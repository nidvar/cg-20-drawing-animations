class my_timer {
    constructor(start_button, pause_button, user_input, border_change_functions){
        this.start_button = start_button;
        this.pause_button = pause_button;
        this.user_input = user_input;

        this.timer_running = false;

        if(border_change_functions != undefined){
            this.onStart = border_change_functions.onStart;
            this.onPause = border_change_functions.onPause;
            this.onTick = border_change_functions.onTick;
        }
        this.start_button.addEventListener('click', this.start);
        this.pause_button.addEventListener('click', this.pause);
        this.user_input.addEventListener('input', this.set_remaining_time);
    }

    start=()=>{
        this.onStart()
        if(this.timer_running == false){
            this.timer_running = true;
            this.tick();
            this.ticking_interval = setInterval(this.tick, 10)
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
            this.onTick();
            this.set_remaining_time = this.get_remaining_time - 0.01;
        }
    }

    pause=()=>{
        this.timer_running = false;
        this.onPause();
        clearInterval(this.ticking_interval);
    }

    get get_remaining_time(){
        return this.user_input.value
    }

    set set_remaining_time(new_value){
        this.user_input.value = new_value.toFixed(2)
    }
}