import createHistory from 'history/createBrowserHistory';


console.log(createHistory);


var history = createHistory({
    basename: '/webpack-dev-server'
});

const location = history.location;

history.listen((location, action)=> {
    console.log(action, location.pathname, location.state);
})

var btn = document.querySelector("#btn");
var ran = document.querySelector("#ran");
btn.onclick = function(){
    var random =  Math.floor(Math.random() * 11);
    ran.textContnt = random;
    history.push({pathname: `/${random}`,search: '?th=query',state: {foo: random}});
}
// history.block((location, action)=>{
//     if(action === "POP" || location.pathname === "/"){
//         return "Are you sure";
//     }
// })


