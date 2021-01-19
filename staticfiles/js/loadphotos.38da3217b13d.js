/*---------------------------------------------
Load first page containing some photos
----------------------------------------------*/

function fLoadPhotos() {
    $(".myphotos").click(function (e) {

        e.preventDefault();

        $("#mydiv").empty();

        $("#loadmore").css('display', 'none');

        $("#lazyLoadLink").attr("href", "0");

        var userid = $(this).attr("href");

        $("#lazyLoadLink").attr("data-user", userid);
        var page = $("#lazyLoadLink").attr("href");


        $.ajax({
            type: 'GET',
            url: 'photos',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            data: { "userid": userid, 'page': page },
            dataType: 'json',
            contentType: "application/json",

            beforeSend: function () { $("#loading-overlay").show(); },
            complete: function () { $("#loading-overlay").hide(); },

            success: function (responseData) {

                if (responseData["hasnext"]) {

                    $("#mydiv").html(`<h5 style="text-align: center;">${responseData["user"].name} photos</h5>`);

                    $("#mydiv").html($("#mydiv").html() + `<div id="mytable" class="row"></div>`);

                    $.each(responseData["photosList"], function (i, photo) { $("#mytable").html($("#mytable").html() + fphotos(photo)); });

                    $("#loadmore").css('display', 'block');

                    var currentPage = parseInt(page) + 1;

                    $("#lazyLoadLink").attr("href", currentPage.toString());

                }
                else {

                    $("#mydiv").html($("#mydiv").html() + `<div id="mytable" class="row"></div> `);

                    $.each(responseData["photosList"], function (i, photo) { $("#mytable").html($("#mytable").html() + fphotos(photo)); });

                    $("#loadmore").css('display', 'none');

                }

            },
            error: function () { $("#mydiv").html("Ajax Call Failed"); }
        });
    });

}