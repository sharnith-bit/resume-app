function generateResume() {
    var name = document.getElementById("name").value;
    var skills = document.getElementById("skills").value;

    var result = "<h2>" + name + "</h2>";
    result = result + "<p><b>Skills:</b> " + skills + "</p>";

    document.getElementById("output").innerHTML = result;
}