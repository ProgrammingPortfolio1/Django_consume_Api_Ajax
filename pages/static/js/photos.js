
function fphotos(photo) {

    return `

    <div class="col">
    <div class="card" style="width: 8rem;">

    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="">
        <div style="text-align: center;" class="card-body">
            ${photo.id}
        </div>
    </div>
    </div>
      
    `;
}
