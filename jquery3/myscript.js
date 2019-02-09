$(document).ready(function() {
    $('#submit-btn').click(function() {
        $("tbody").html("");
        $("#result").text("");
        console.log("first");
        
        $.getJSON("data.json",function(data){
            var input = $("#input-text").val();
            var regex = new RegExp(input, 'i');
            var output;
            $.each(data, function(key, val){
                if((val.nameTH.search(regex)!= -1) || (val.nameENG.search(regex)!= -1) 
                    || (val.province.search(regex)!= -1) || (val.height.search(regex)!= -1)){
                // if((val.name.search(regex)!= -1) || (val.age.search(regex)!= -1)){
                    output += "<tr>";
                    output += "<td id='"+key+"'>"+val.nameTH+"</td>";
                    output += "<td id='"+key+"'>"+val.nameENG+"</td>";        
                    output += "<td id='"+key+"'>"+val.province+"</td>";
                    output += "<td id='"+key+"'>"+val.height+"</td>";    
                    output += "</tr>";      
                    // $("#result").text("");   
                    }   
                
            });
            if(output==null){
                    $("#result").text("Search not founded.");
            }
     
            $("#result").val("");   
        $("#input-text").val("");
        $("tbody").html(output);


        });
        console.log("last");


    });

    $("#adv-btn").click(function(){
        var slide1 = $("#sli1").val();
        var slide2 = $("#sli2").val();
        $("#out1").text(slide1+"min");
        $("#out2").text(slide2+"mam");
        console.log("adv");

    });


    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);     
        var out;
        response.forEach(element => {
           
            out += "<tr>";
            out += "<td>"+element.nameTH+"</td>";
            out += "<td>"+element.nameENG+"</td>";        
            out += "<td>"+element.province+"</td>";
            out += "<td>"+element.height+"</td>";    
            out += "</tr>";
           
        })
        $("tbody").html(out);
        $("#result").text("");
      
        
    });
});

