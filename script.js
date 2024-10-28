
const projects = document.getElementsByClassName("project");

for(let project of projects) {
    project.onclick = function() {
        window.location = "./" + project.id + "/app.html";
        console.log("clicked " + project.id);
        
    };
}