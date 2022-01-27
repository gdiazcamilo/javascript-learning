/*  In this script we will see different ways to handle asyncronous requests. We have 3 ways: promises, fetch and async/await.
    In the end, the 3 ways relies on the use of promises, so let's check promises first.

    Due to the nature of async functions, the `console.log` messages may appear in a confusing order.
*/

// Promises are introduced in ES6. Allow us to chain async requests with a more clear syntax.
// This a promise object.

const promise = new Promise((resolve, reject) => {
    // We pass to `resolve` the value that this function will return after is finish.
    // Usually this is used to fetch something from a web API that we don't know when it's going to finish.
    if (false) {
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
        console.log('PROMISES');
        console.log(successValue); 
        console.assert(successValue == 'succeeded') 
    })
    .catch(errorValue => {
        console.log('PROMISES');
        console.log(errorValue); 
        console.assert(errorValue == 'Error code 20202');
    });


// Let's see `fetch` now
// `fetch` is a built-in function that can be used to call a web API and will return a promise object.
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) // `response.json()` also returns a promise object
  // we can chain `then` calls. Each `then` function will receive what the previous `then` call returned.
  .then(json => {
    console.log('`FETCH` EXAMPLE'); 
    console.log(json);
  });


// an example with `catch`

fetch('https://jsonplaceholdr.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => {
    console.log('ANOTHER FETCH EXAMPLE WITH CATCH'); 
    console.log('An error ocurred (this message is coming from the `catch` function)'); 
  })
  .then(o =>
    // This will be executed despite the failed previous promise 
      // because `catch` will only catch the calls made before the `catch` function.
     fetch('https://jsonplaceholder.typicode.com/todos/2')
  )
  .then(response => response.json())
  .then(json => {
    console.log('The response in the next line is coming from the functions after the `catch`:');
    console.log(json);
  });



// Let's see async/await
// This is the syntaxis of async/await functions.
const myAsyncFunction = async () => { /*the code here will be executed in a async manner.*/ };

// Inside the async function we can use the `await` keyword. 
// This will make the code doesn't continue executing the next senteces 
// until the call we make inside the function has not finished.
async() => {
  try {
    const user1response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await user1response.json();
    console.log("ASYNC/AWAIT")
    console.log('user');
    console.log(user);

    const userPostsResponse = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
    const userPosts = await userPostsResponse.json();
    console.log("ASYNC/AWAIT")
    console.log('user posts');
    console.log(userPosts);
  } catch(error) {
    console.log('An error ocurred in the async/await function');
  }

};
otherAsyncFunction();

// Other syntax that can be used to execute the method right away avoiding asignation to a variable and then call it:
(async()=>{
  /* The code goes here... */
})();


// Any of the three methods can be used.
// The async/await is the most readable, less verbose and reduce nesting in my opinion.