function navigate(section) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  switch (section) {
    case "about":
      content.innerHTML = "<h2>About Me</h2><p>Hi! I'm Rodrigo, a BTECH Info Tech student and SDET...</p>";
      break;
    case "projects":
      content.innerHTML = "<h2>Projects</h2><p>Portfolio of my test automation, frontend projects, and more.</p>";
      break;
    case "skills":
      content.innerHTML = "<h2>Skills</h2><p>C#, Java, Playwright, Jenkins, SQL...</p>";
      break;
    case "contact":
      content.innerHTML = "<h2>Contact</h2><p>Email: rodrigo@example.com</p>";
      break;
  }
}