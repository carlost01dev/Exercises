
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