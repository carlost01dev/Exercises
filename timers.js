

function countdown(seg) {

    setInterval(function () {

        seg = seg - 1
        console.log(seg)

        if (seg == 0) { 
            console.log('DONE!')
            clearInterval(this) };

    }, 1000)

}

//countdown(4)


function randomGame() {

   let tries=1

    setInterval(function () {

      let number= Math.random();

        console.log('try #: '+tries)

       if (number > 0.75) {

        console.log('Number:'+ number+' It took '+tries+' try/tries.')

         clearInterval(this)
         };
         tries=tries+1

    }, 1000)

}

randomGame()