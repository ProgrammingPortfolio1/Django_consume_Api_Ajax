function treeview() {

    //Sidebar treeview functionality
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active2");
            this.classList.toggle("caret-down");
        });
    }

}