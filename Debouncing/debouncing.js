let c = 1;

function getProduct(){
    console.log("count", c++)
}

//Whenever the debouncingFunction will get executed it will
//first stop the execution of setTimeout 
//new setTimeout will start execution and stores its id in stopTime

function debouncingFunction(cb, delay){
    let stopTime; //!Made it as global variable so that we will not get reference error for variable.
    return function(){
        clearTimeout(stopTime) //! 1st time execution stopTime will be having undefined value 
        //? undefined will not affect clearTimeout

        stopTime = setTimeout(cb, delay); //! if stopTime id declared here clearTimeout will throw error. so make it as global variable
    }
}

let debounceProducts = debouncingFunction(getProduct, 1000);