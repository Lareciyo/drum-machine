// Setup 'tick' sound 
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');
let count = 1;
let isRunning = true;
//assigning the count to 1 to start at 1
function playNextBeat(){
    if(!isRunning) return;

    document.querySelector('#beat-count').innerText = count;

    const metronomeOn = document.querySelector('#metronome').checked;
    if(metronomeOn){
    if(count === 4){
        tock.currentTime = 0;
        tock.play()
    }else {
        tick.currentTime = 0;
        tick.play();
    }
}

playInstrument('kick-drum', kick);
playInstrument('snare-drum', snare);
playInstrument('hi-hat', hihat);

document.querySelector('.arm').style.animationPlayState = 'running';

count = (count % 4) + 1;
setTimeout(playNextBeat, 600)
}

function playInstrument(id, audio){
    const isChecked = document.querySelector(`#${id}`).checked;
    const timingInput = document.querySelector(`#${id}-timing`).value;

    if(isChecked && Number(timingInput) === count){
        audio.currentTime = 0;
        audio.play();
}
}

function start(){
    isRunning = true;
    // playNextBeat();
    }

    function stop(){
        isRunning = false;
        document.querySelector('.arm').style.animationPlayState = 'paused';

        }

        document.querySelector('#stop').addEventListener('click', function(){
            if(isRunning){
                stop();
                this.innerText = 'Resume';
            }else{
                start();
                this.innerText = 'Pause';
            }
        })
        document.body.addEventListener('click', () => {
            tick.play().catch(() => {})
        })

        setTimeout(start, 300)

// This function sets up update() to be called every 600ms

   
    function setupUpdate(){
        setTimeout(setupUpdate, 600);{
        if(count === 4){
            tock.play();
        }else{
            tick.play()
        } 
        count = count % 4 + 1;
    }
        function updatetock(){
        tock.play()
    }
    }


// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);



