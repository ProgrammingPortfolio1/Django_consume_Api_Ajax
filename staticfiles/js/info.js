
function finfo(user) {

    return `

        <h5 style="text-align: center;">${user.name} info</h5>

        <p><span style="background-color: rgb(228, 220, 235);">Name:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${user.name}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">Email:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${user.email}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">City:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${user.address.city}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">Phone:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${user.phone}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">Website:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${user.website}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">Company:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${user.company.name}</span></p>

        `;
}
            