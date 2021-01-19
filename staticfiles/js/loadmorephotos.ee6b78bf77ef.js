function loadmorephotos1()
{

  //  $(document).ready(function () {



    document.getElementById("content").addEventListener("click", function (e) {

        if (e.target && e.target.nodeName == "A") {


            e.preventDefault();


            $("#loadmore").css('display', 'block');


            var stor = e.target.href;
            var page = stor.substr(stor.lastIndexOf("/") + 1, stor.length);
            /* 
                var stor = this.href;
            
            var userid = stor.substr(stor.lastIndexOf("/") + 1, stor.length);
             */


            $.ajax({
                type: 'GET',
                url: 'lazy_load_posts',
                data: {
                    'userid': userid,
                    'page': page,
                    //     'csrfmiddlewaretoken': '{{ csrf_token }}', 
                },
       //         async: false,
                timeout: 120000,
                success: function (responseData) {


                    if (responseData["hasnext"]) {

                        $.each(responseData["pos"], function (i, vi) {


                            $("#mydiv").html($("#mydiv").html() + fphotos(vi));

                        });

                        var pagev2 = parseInt(page) + 1;

                        $("#mydiv").html($("#mydiv").html() + `
<div> `);

                        $("#loadmore").html(`
<a id="lazyLoadLink" href="`+ pagev2.toString() + `" >Load More Photos</a>
<br>
</div>
`);




                    }
                    else {

                        $.each(responseData["pos"], function (i, vi) {


                            $("#mydiv").html($("#mydiv").html() + fphotos(vi));

                        });

                        $("#loadmore").css('display', 'none');


                    }











                },
                error: function (responseError) {

                    $("#mydiv").html("Ajax Call Failed");
                }
            });



        }
    });





      //  });








}