Array.prototype.forEach.call(document.getElementsByClassName('project'), project => {
    project.addEventListener('click', function() {
        window.location.href = project.id + '.html';
    });
});