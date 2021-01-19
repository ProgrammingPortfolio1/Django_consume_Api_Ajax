
/*-----------------------------------------------
Load some information about the user
--------------------------------------*/
function fLoadInfo() {

    $(".myinfo").click(function (e) {

        e.preventDefault();

        $("#loadmore").css('display', 'none');

        $("#mydiv").empty();

        var userid = $(this).attr("href");

        $.ajax({
            headers: { 'X-Requested-With': 'XMLHttpRequest' },

            type: 'GET',
            url: 'info',
            data: { "userid": userid },
            dataType: 'json',
            contentType: "application/json",
            beforeSend: function () { $("#loading-overlay").show(); },
            complete: function () { $("#loading-overlay").hide(); },

            success: function (responseData) { $("#mydiv").html(finfo(responseData)); },

            error: function () { $("#mydiv").html("Ajax Call Failed"); }
        });
    });

}