/*-----------------------------------------------
Populate the sidebar treeview with the users' names
-------------------------------------------------*/
function fPopulateSidebar() {

    $.ajax({
        type: 'GET',
        url: 'index',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        contentType: "application/json",
        dataType: "json",
        beforeSend: function () { $("#loading-overlay").show(); },
        complete: function () { $("#loading-overlay").hide(); },

        success: function (responseData) {

            $("#myside").html($("#myside").html() + `<h5 style="text-align: center;">Users</h5><ul style="margin: 20px;" id="myUL">`);

            $.each(responseData, function (i, user) { $("#myside").html($("#myside").html() + findex(user)); });

            $("#myside").html($("#myside").html() + `</ul>`);

            treeview();

            /*-----------------------------------------------
            Load some information about the user
            --------------------------------------*/
            fLoadInfo();


            /*-----------------------------------------------------
            Load all specific user's posts
            ------------------------------------------------*/
            fLoadPosts();


            /*---------------------------------------------
            Load first page containing some photos
            ----------------------------------------------*/
            fLoadPhotos();


        },
        error: function () { $("#myside").html("Ajax Call Failed"); }
    });

}