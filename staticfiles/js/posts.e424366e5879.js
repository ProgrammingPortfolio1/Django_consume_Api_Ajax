

function fposts(v) {

    return `


        <h5 style="text-align: center;">${v.name} posts</h5>
<!--
        {% for post in posts %}
-->
        <p><span style="background-color: rgb(228, 220, 235);">Title:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${post.title}</span></p>

        <p><span style="background-color: rgb(228, 220, 235);">Body:</span>&emsp; <span
                style="background-color: rgb(236, 204, 210);">
                ${post.body}</span></p>

        <br>
    <!--    {% endfor %}
-->

        `;
    }
    
    