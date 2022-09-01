// 1

const URL = 'https://jsonplaceholder.typicode.com/posts';

const xhr = new XMLHttpRequest();
xhr.open('GET', URL);
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
    }
}
xhr.onerror = () => {
    console.log('network error');
}
xhr.send();