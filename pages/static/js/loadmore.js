
/*-------------------------------------------------------------------------
        Load more data when clicking on the link             
--------------------------------------------------------------------------*/


function fLoadMore() {
    $("#lazyLoadLink").click(function (e) {

        e.preventDefault();

        var userid = $(this).attr('data-user');

        var page = $(this).attr("href");

        $.ajax({

            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            type: 'GET',
            url: 'photos',
            data: { 'userid': userid, 'page': page },
            dataType: 'json',
            contentType: "application/json",
            beforeSend: function () { $("#loading-overlay2").show(); },
            complete: function () { $("#loading-overlay2").hide(); },

            success: function (responseData) {

                if (responseData["hasnext"]) {
                    $("#mydiv").html($("#mydiv").html() + `<div id="mytable" class="row"></div>`);

                    $.each(responseData["photosList"], function (i, photo) { $("#mytable").html($("#mytable").html() + fphotos(photo)); });

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