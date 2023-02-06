

function countdown(seg) {

    setInterval(function () {

        seg = seg - 1
        console.log(seg)

        if (seg == 0) { 
            console.log('DONE!')
            clearInterval(this) };

    }, 1000)

}

countdown(4)

