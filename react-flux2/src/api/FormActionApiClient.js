export default {
    url: 'http://localhost:3000/posts/',
    get(data){
        fetch(this.url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
            .then(result => result.json())
            .then(res => console.log(res, 'fetche'));
    }
}
