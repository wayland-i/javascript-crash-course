// 'use strict';

// x = 5

function bigFunc(x) {

    function myFunc() {
        x = 2
        // (thatFunc(bigFunc(x)) {

        // })();
        console.log(x);
    }
    
    
    console.log(x)
    
    myFunc()
}

bigFunc()