function gettingJSON(){
    //Display the forecast
    // Your code here.
    $("#forecast").css('display', 'block')
    //Set default location if one isn't provided
    let location;
        $('#loc').val();
        if (location.length == 0){
            location = "Ann Arbor"
        }
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    // Your code here.
    document.querySelector("#format").addEventListener("change", function() {
        var type = document.querySelectorAll("input [name=temp]:checked")[0].value
        console.log("Format is " + format);
    });

    //set the query  
    let query ="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&APPID=" + "ab60a1c409d5489d882c7d9d912afc00"; 
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    
    let temp;
    let tempImg;
        $("#tempImg").attr('src', 'https://openweathermap.org/img/wn/'+icon + "@2x.png");
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        var icon = json['weather'][0]['icon'];

        document.querySelector("p").innerHTML = "The temperature in " + loc + " is currently " + temp;
    });
}
