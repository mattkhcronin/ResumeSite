(function(){
    $('nav a').attr('data-target', '.navbar-collapse')
    .attr('data-toggle','collapse');

    accordion();
})();

function accordion(){
    var acc = $('a.accordion');

    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            $(this.nextElementSibling).toggle();
            return false;
        }
    }
}