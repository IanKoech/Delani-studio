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
$(document).ready(function(){
    $(".port1").hover(function(){
        $(".Wallpapers").show();
    },function(){
        $(".Wallpapers").hide();
    });
    $(".port2").hover(function(){
        $(".security").show();
    },function(){
        $(".security").hide();
    });
    $(".port3").hover(function(){
        $(".3D").show();
    },function(){
        $(".3D").hide();
    });
    $(".port4").hover(function(){
        $(".Assistant").show();
    },function(){
        $(".Assistant").hide();
    });
    $(".port5").hover(function(){
        $(".Planner").show();
    },function(){
        $(".Planner").hide();
    });
    $(".port6").hover(function(){
        $(".Automation").show();
    },function(){
        $(".Automation").hide();
    });
    $(".port7").hover(function(){
        $(".Logo").show();
    },function(){
        $(".Logo").hide();
    });
    $(".port8").hover(function(){
        $(".Restaurant").show();
    },function(){
        $(".Restaurant").hide();
    });
});