$(document).ready(function(){
    $("#image1").click(function(){
        $("#image1").hide();
        $(".design-text").toggle();
        $(".design-text").show();
    });
    $(".design-text").click(function(){
        $(".design-text").hide();
        $("#image1").toggle();
        $("#image1").show();
    });
});
$(document).ready(function(){
    $("#image2").click(function(){
        $("#image2").hide();
        $(".development-text").toggle();
        $(".development-text").show();
    });
    $(".development-text").click(function(){
        $(".development-text").hide();
        $("#image2").toggle();
        $("#image2").show();
    });
});
$(document).ready(function(){
    $("#image3").click(function(){
        $("#image3").hide();
        $(".management-text").toggle();
        $(".management-text").show();
    });
    $(".management-text").click(function(){
        $(".management-text").hide();
        $("#image3").toggle();
        $("#image3").show();
    });
});
$(document).ready(function(){
    $("#submission").submit(function(event){
        event.preventDefault();
        var name=$("input#name").val();
        var mail=$("input#email").val();
       
        if(name!=0 && mail!=0){
            alert("Hello "+name+" Your details have been received");
        }else{
            alert("Enter appropriate input.");
        }
        
    });
});