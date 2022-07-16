//got all these radio buttons so when I click a radio
//button it shows the image in the container which is called
// #MemeReactions

let x = document.querySelector(".memeReactions")
let y = document.querySelector(".reactionImage")
//made variables these for the 

function changeImage(value) {
  var image = document.getElementById("happy");

//   switch (value) {
//     case "happy":
//       console.log(`you chose ${value}`);
//       x.innerHTML = `you chose ${value}`
//       y.src = `img/${value}.jpeg`
//       break;
//     case "sad":
//       console.log(`you chose ${value}`);
//       x.innerHTML = `you chose ${value}`
//       y.src = `img/${value}.jpeg`
//       break;
//     case "shocked":
//       console.log(`you chose ${value}`);
//       x.innerHTML = `you chose ${value}`
//       y.src = `img/${value}.jpeg`
//       break;
//     case "angry":
//       console.log(`you chose ${value}`);
//       x.innerHTML = `you chose ${value}`
//       y.src = `img/${value}.jpeg`
//       break;
//     case "skeptical":
//       console.log(`you chose ${value}`);
//       x.innerHTML = `you chose ${value}`
//       y.src = `img/${value}.jpeg`
//       break;
//     default:
//       console.log("hui");
//       break;
//   }
  // if (value === 'happy') {

  //     //this part showed up so I am doing something right
  //     console.log('You chose happy')
  // }
  /*  } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...';
    } else if (value === 'bridge') {
        image.src = '...'; */
  // } else (value === ''){
  //     console.log('Why didn\'t you choose a mood?')
  // }
}

//Good tip for asking for help
let sorry_sir =(value)=> {
    //changed the onclicks to sorry_sir
console.log(`you chose ${value}`);
      x.innerHTML = `you chose ${value}`
      y.src = `img/${value}.jpeg`
} 