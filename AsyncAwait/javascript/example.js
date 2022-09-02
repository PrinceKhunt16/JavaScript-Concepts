// 1

/*

const myCoolFunction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });
    const jsonUserData = await response.json();
    return jsonUserData; 
}

const anotherFunction = async () => {
    const data = await myCoolFunction();
    console.log(data);
}

anotherFunction();

*/

// 2

const jokeObj = {
    id: "eaMCQKRZ0ob",
    joke: "Don't buy flowers at a monastery. Because only you can prevent florist friars."
}

const postJoke = async () => {
    const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jokeObj)
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

postJoke();