$("#container").animate({
    width: '80%'
    
} , 2000 , function(){
    $("#container").animate({
        height: '100vh'
    } , 2000 , function(){
        $("#title").fadeIn(1000 , function(){
            $("#content").fadeIn(1000 , function(){
                $("#content2").fadeIn(1000 , function(){
                    $("#content3").fadeIn(1000)
                })
            })
        })
    })
})





