$(document).ready(function() {
  
    $('#submit-btn').click(function() {
        $("tbody").html("");
        $("#result").text("");
        console.log("first");
        var output;
        $.getJSON("data.json",function(data){
            var input = $("#input-text").val();
            var regex = new RegExp(input, 'i');
           
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
                    }   
                else{
                    $("#result").text("Search not founded.");
                }
            });
     
        $("#input-text").val("");
           
            $("tbody").html(output);


        });
        console.log("last");


    });

   

    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        response.forEach(element => {
            console.log(element.name, element.age);
            output += "<tr>";
            output += "<td>"+val.nameTH+"</td>";
            output += "<td>"+val.nameENG+"</td>";        
            output += "<td>"+val.province+"</td>";
            output += "<td>"+val.height+"</td>";    
            output += "</tr>";
        });
        
    });
});