$(document).ready(function () {
    $("#design").click(function () {
        $("#show-design").toggle();
        $(".design-image").toggle();
    })
    $("#development").click(function () {
        $("#show-development").toggle();
        $(".development-image").toggle();
    })
    $("#productManagement").click(function () {
        $("#show-product-management").toggle()
        $(".product-management").toggle()
    });



    $(document).ready(function () {
        $("#work1").mouseover(function () {
            $("#overlay").show();
        }).mouseout(function () {
            $("#overlay").hide();
        });
    });

    $(document).ready(function () {
        $("#work2").mouseover(function () {
            $("#overlay2").show();
        }).mouseout(function () {
            $("#overlay2").hide();
        });
    });
    $(document).ready(function () {
        $("#work3").mouseover(function () {
            $("#overlay3").show();
        }).mouseout(function () {
            $("#overlay3").hide();
        });
    });
    $(document).ready(function () {
        $("#work4").mouseover(function () {
            $("#overlay4").show();
        }).mouseout(function () {
            $("#overlay4").hide();
        });
    });

    $(document).ready(function () {
        $("#work5").mouseover(function () {
            $("#overlay5").show();
        }).mouseout(function () {
            $("#overlay5").hide();
        });
        $("#work6").mouseover(function () {
            $("#overlay6").show();
        }).mouseout(function () {
            $("#overlay6").hide();
        });
        $("#work7").mouseover(function () {
            $("#overlay7").show();
        }).mouseout(function () {
            $("#overlay7").hide();
        });
        $("#work8").mouseover(function () {
            $("#overlay8").show();
        }).mouseout(function () {
            $("#overlay8").hide();
        });
    })
    $('.submit').click(function () {
        var Name = $('#mce-FNAME').val();
        var Email = $('#mce-EMAIL').val();
        var Message = $('#mce-MESSAGE').val();
        if (Name == '' || Email == '' || Message == '') {
            alert('Please must fill the required correctly!');
        } else {
            alert('Hello' + Name + 'Your message has been received.Thank you for your response.');
        }
    });

});