
function findex(user) {

    return `

    <li><span class="caret">${user.name}</span>
        
    <ul class="nested">
            <li> <a class="myinfo" href="${user.id}">Info</a></li>

            <li> <a class="myposts" href="${user.id}">Posts</a></li>

            <li> <a class="myphotos" href="${user.id}">Photos</a></li>
        </ul>
    </li>

`;
}
