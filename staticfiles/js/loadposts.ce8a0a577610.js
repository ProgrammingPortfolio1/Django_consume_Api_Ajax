/*-----------------------------------------------------
Load all specific user's posts
------------------------------------------------*/
function fLoadPosts() {
    $(".myposts").click(function (e) {

        e.preventDefault();

        $("#loadmore").css('display', 'none');

        $("#mydiv").empty();

        var userid = $(this).attr("href");

        $.ajax({
            type: 'GET',
            url: 'posts',
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            data: { "userid": userid },
            dataType: 'json',
            contentType: "application/json",
            beforeSend: function () { $("#loading-overlay").show(); },
            complete: function () { $("#loading-overlay").hide(); },

            success: function (responseData) {
                $("#mydiv").html(`<h5 style="text-align: center;">${responseData['user'].name} posts</h5>`);

                $.each(responseData['posts'], function (i, post) { $("#mydiv").html($("#mydiv").html() + fposts(post)); });

            },
            error: function () { $("#mydiv").html("Ajax Call Failed"); }
        });
    });

}