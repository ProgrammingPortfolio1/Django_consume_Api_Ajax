


function fphotos(v) {

    return `



        <h5 style="text-align: center;">${v.name} photos</h5>

        <div class="row">

        <!-- 
            {% for photo in photolist %}
            -->


            <div class="col">
                <div class="card" style="width: 8rem;">
                    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="">
                    <div style="text-align: center;" class="card-body">
                        ${photo.id}
                        <!--               
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a> 
                        -->
                    </div>
                </div>
            </div>



        <!--    {% endfor %}
-->


        </div>

        `;
    }
    
    
    