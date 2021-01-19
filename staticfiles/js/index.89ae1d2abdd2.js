

function findex(v) {

    return `




    <li><span class="caret">${v.name}</span>
        <ul class="nested">
            <li> <a class="myinfo" href="${v.id}">Info</a></li>

            <li> <a class="myposts" href="posts/${v.id}">Posts</a></li>

            <li> <a class="myphotos" href="photos/${v.id}">Photos</a></li>
        </ul>
    </li>





`;
}




