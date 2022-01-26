// promises are introduced in ES6. Allow us to chain async requests with a more clear syntax.

// this a promise object
const promise = new Promise((resolve, reject) => {
    // We pass to `resolve` the value that this function will return after is finish.
    // Usually this is used to fetch something from a web API that we don't know when it's going to finish.
    if (true) {
        successValue = 'succeeded'
        resolve(successValue)
    }
    else{
        // if there's an error we call `reject` and pass it the value that this function will return in case of error.
        errorValue = 'Error code 20202'
        reject(errorValue);
    }
});

// `then` will be called if the promise executed successfully (without errors).
// `catch` will be called if the promised executed with errors.
promise
    .then(successValue => { 
        console.log(successValue); 
        console.assert(successValue == 'succeeded') 
    })
    .catch(errorValue => {
        console.log(errorValue); 
        console.assert(errorValue == 'Error code 20202');
    })

// `fetch` is a built-in function that can be used to call a web API and will return a promise object.

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => { 
      console.log('`fetch` example'); 
      return response.json(); 
    })
  // we can chain `then` calls. Each `then` function will receive what the previous `then` call returned.
  .then(json => console.log(json))


// an example with `catch`
fetch('https://jsonplaceholdr.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => {console.log('Example with `catch`'); console.log('error 1'); })
  .then(o => {
      // this will be executed despite the failed previous promise
      return fetch('https://jsonplaceholder.typicode.com/todos/2');
    })
  .then(response => response.json())
  .then(json => console.log(json)) 