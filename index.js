// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(arr, event){
    const messages = []
    for (let i = 0; i < arr.length; i++){
        const greetingMessage =`Thank you, ${arr[i]}, for the wonderful ${event} gift!`
        messages.push(greetingMessage)
    }
    return messages
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(num){
    while (num > -1){
      console.log(num--)
    }

}

countDown(20)