var container = document.querySelector('.filter-container');
var mixer = mixitup(container);

function filterProjects(selector) {
    mixer.filter(selector.value);
}
