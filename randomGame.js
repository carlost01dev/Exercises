
function randomGame() {

    let tries=0
 
     setInterval(function () {
 
       let number= Math.random();
 
        
 
        if (number > 0.75) {
 
         console.log('Number:'+ number+' It took '+tries+' try/tries.')
 
          clearInterval(this)
          }else{
            tries=tries+1
            console.log('try #: '+tries)
          }
          
         
         
 
     }, 1000)
 
 }
 
 randomGame()