

function finfo(v) {

    return `



        <h5 style="text-align: center;">${v.name} info</h5>

        <p><span style="background-color: rgb(228, 220, 235);">Name:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${v.name}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">Email:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${v.email}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">City:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${v.address.city}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">Phone:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${v.phone}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">Website:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${v.website}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">Company:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${v.company.name}</span></p>




                `;
            }
            
            
            