let hasflipped = false;
let firstcard, secondcard;
let lockboard = false;
let start=0;
let music=document.getElementById("soundtrack");


function flipcard() {
    let mu=music.play();
    if (lockboard) {
        return
    }
    this.classList.add('flip');
    // console.log(this);
    if (hasflipped == false) {
        hasflipped = true;
        firstcard = this;
        console.log(firstcard, hasflipped);
      

    } else {

        secondcard = this;
        hasflipped = false;
        console.log(secondcard);
        if (firstcard.dataset.name === secondcard.dataset.name) {
            // console.log(firstcard.dataset.name);
            // console.log(secondcard.dataset.name);
            start=start+1;
             let test=document.getElementsByClassName('scored');
            test[0].innerHTML=start;   
            firstcard.removeEventListener('click', flipcard);
            secondcard.removeEventListener('click', flipcard);
            console.log(start);
          

        } else {
            setTimeout(() => {
                firstcard.classList.remove('flip');
                secondcard.classList.remove('flip');
            }, 900);
        }
    }
}
const cards = document.querySelectorAll('.memory-card');
// console.log(cards);
cards.forEach(card => card.addEventListener('click', flipcard));
window.onbeforeunload = function() {
return "are you sure";
}