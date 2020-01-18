
// console.log($("#submit"))
$("#submit").on("click", function(){    
    var city = $(".user-input").val()
    $("div").removeClass("d-none")
    console.log(city)




$.ajax({
    type: "POST",
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=89e5e9bfd9e3ee1833825011cf0ee408`,
    dataType: "json",
    success: function (data) {

    console.log(data)
    console.log(data.main.humidity)

    
    
    $(".card-title").text(data.name)
    $(".card-text").text(data.main.temp)
    
    

    }

    

})

$.ajax({
    type: "POST",
    url: `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&units=imperial&appid=89e5e9bfd9e3ee1833825011cf0ee408`,
    dataType: "json",
    success: function (data1) {

        console.log(data1)
    

    }


})
})

