(function(){
    var running = true;
    var callback = function(){
        console.log("60mmに一回呼ばれています")
    };
    window.addEventListener('scroll', function(){
        if(running){
            running = false;
            setTimeout(function(){
                running = true;
                callback()
            }, 60)
        }
    });
})();
