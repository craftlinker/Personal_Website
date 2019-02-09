

$('.carousel').carousel({
  interval: 2000
})


$(document).ready(function () {
    $("#pic").hover(function () {
        $(this).css("height", "160px", "width", "160px"  );
    }, function () {
        $(this).css("height", "140px", "width", "140px");
    });
});

$(document).ready(function () {
    $("#pic1").hover(function () {
        $(this).css("height", "160px", "width", "160px");
    }, function () {
        $(this).css("height", "140px", "width", "140px");
    });
});

$(document).ready(function () {
    $("#pic2").hover(function () {
        $(this).css("height", "160px", "width", "160px");
    }, function () {
        $(this).css("height", "140px", "width", "140px");
    });
});