// Mobile Menu Toggle
document.querySelector(".menu-icon").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

// Open Job Form
function openForm(type, position) {
  document.getElementById("jobForm").style.display = "flex";
  document.getElementById("formTitle").innerText = "Apply for " + position;

  const internFields = document.querySelector(".intern-fields");

  if (type === "intern") {
    internFields.style.display = "block";
  } else {
    internFields.style.display = "none";
  }

  document.getElementById("applyForm").scrollTop = 0;
}

// Close Job Form
function closeForm() {
  document.getElementById("jobForm").style.display = "none";
}
