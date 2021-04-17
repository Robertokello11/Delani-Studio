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
    })
    
});

