function generateResume(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var objective = document.getElementById("objective").value;
    var skills = document.getElementById("skills").value.split(",");
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var projects = document.getElementById("projects").value;
    var template = document.getElementById("template").value;

    var box = document.getElementById("output");
    box.className = "resume " + template;

    var html = "";

    html += "<h2>" + name + "</h2>";
    html += "<p>📧 " + email + " | 📞 " + phone + "</p>";

    html += "<div class='section'><h3>Objective</h3><p>" + objective + "</p></div>";

    html += "<div class='section'><h3>Skills</h3>";
    skills.forEach(s=>{
        if(s.trim() !== ""){
            html += "<span class='badge'>" + s.trim() + "</span>";
        }
    });
    html += "</div>";

    html += "<div class='section'><h3>Education</h3><p>" + education + "</p></div>";
    html += "<div class='section'><h3>Experience</h3><p>" + experience + "</p></div>";
    html += "<div class='section'><h3>Projects</h3><p>" + projects + "</p></div>";

    box.innerHTML = html;
}

/* PDF DOWNLOAD */
function downloadPDF(){
    var element = document.getElementById("output");

    html2pdf().set({
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).from(element).save();
}
