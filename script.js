

let selectedCourse = null;

const courseCategories = {
  Short: ["Graphic Design", "2D Animation", "3D Animation", "VFX", "Graphic Web Design and Development", "Motion Graphic Design", "UI/UX", "Game Design", "Game Development", "Interior/Exterior", "Video/Audio"],
  Mid: ["Graphic Design", "2D Animation", "3D Animation", "VFX", "Graphic Web Design and Development", "Motion Graphic Design", "UI/UX", "Game Design", "Game Development", "Interior/Exterior", "Video/Audio"],
  Long: ["Graphic Design", "2D Animation", "3D Animation", "VFX", "Graphic Web Design and Development", "Motion Graphic Design", "UI/UX", "Game Design", "Game Development", "Interior/Exterior", "Video/Audio"]
};

const courses = [
  //short-graphic-courses
  { name: "Graphic Design Prime", category: "Graphic Design", duration: "Short",  months: 6, courseCode: "OV-3135-GDP", totalFees: 500, registrationFees: 50, downPayment: 100, lumpSum: 450, installments: 10, month: 8, totalSubmission: 500, monthlyInstallments_1: 50, monthlyInstallments_2: 50, monthlyInstallments_3: 50, terms: 2, term1: "Design Principles", term2: "Typography" },
  { name: "Graphic Designing", category: "Graphic Design", duration: "Short", months: 12, courseCode: "OV-606-GD", totalFees: 800, registrationFees: 80, downPayment: 150, lumpSum: 700, installments: 15, month: 9, totalSubmission: 800, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 2, term1: "Branding", term2: "Illustration" },
  { name: "Graphic Design for Web", category: "Graphic Design", duration: "Short",  months: 6, courseCode: "OV-3161-GDW", totalFees: 300, registrationFees: 30, downPayment: 60, lumpSum: 240, installments: 6, month: 4, totalSubmission: 300, monthlyInstallments_1: 50, monthlyInstallments_2: 50, monthlyInstallments_3: 50, terms: 2, term1: "HTML Basics", term2: "CSS Styling" },
  { name: "Web Design", category: "Graphic Design", duration: "Short", months: 12, courseCode: "OV-3161-WD", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "Graphic Art and ", category: "Graphic Design", duration: "Short", months: 12, courseCode: "OV-658-GAI", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "Photoshop", category: "Graphic Design", duration: "Short", months: 6, courseCode: "OV-588-Ph", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "Media Publishing", category: "Graphic Design", duration: "Short", months: 12, courseCode: "OV-626-MP", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "ACAP-Design and Visiualisation", category: "Graphic Design", duration: "Short", months: 12, courseCode: "OV-3156-ACVP-DV", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  //mid-graphic-courses
  { name: "Graphics, Web Designing and Development", category: "Graphic Design", duration: "Mid", months: 12, courseCode: "OV-3161-GWDD", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "3D Motion Graphics Design Prime", category: "Graphic Design", duration: "Mid", months: 12, courseCode: "OV-655-3dMGDPr", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "Motion Graphics Design", category: "Graphic Design", duration: "Mid", months: 12, courseCode: "OV-646-MGD", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "Advanced Digital Graphics and Animation", category: "Graphic Design", duration: "Mid", months: 12, courseCode: "OV-3167-ADGA", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "Digital Content Creation", category: "Graphic Design", duration: "Mid", months: 12, courseCode: "OV-3165-DCC", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "Digital Content Creation Motion Design", category: "Graphic Design", duration: "Mid", months: 12, courseCode: "OV-3165-DCC-MD", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "Digital Content Creation-UI-Design", category: "Graphic Design", duration: "Mid", months: 12, courseCode: "OV-3165-DCC-UID", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  //short-3d-courses
  { name: "Advanced 3D Animation", category: "3D Animation", duration: "Short", months: 12, courseCode: "OV-596-Adv", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "Basics of 3D Animation", category: "3D Animation", duration: "Short", months: 12, courseCode: "OV-634-B3DA", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },
  { name: "PBR Texturing Workflow with Substance Painter", category: "3D Animation", duration: "Short", months: 12, courseCode: "OV-659-PBRTW", totalFees: 700, registrationFees: 70, downPayment: 100, lumpSum: 600, installments: 12, month: 5, totalSubmission: 700, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "JavaScript Fundamentals", term2: "DOM Manipulation", term3: "API Integration" },

  //long-3d-courses
  { name: "Trinity 3d Game", category: "3D Animation", duration: "Long",  months: 24, courseCode: "OV-3105-ANIVFGAM", totalFees: 600, registrationFees: 60, downPayment: 120, lumpSum: 500, installments: 10, month: 6, totalSubmission: 600, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 2, term1: "Modeling Basics", term2: "Texturing" },
  { name: "ACAP-Advanced 3D Animation", category: "3D Animation", duration: "Long",  months: 24, courseCode: "OV-3155-ACAP-A3DA", totalFees: 1500, registrationFees: 100, downPayment: 200, lumpSum: 1300, installments: 20, month: 7, totalSubmission: 1500, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "Modeling Basics", term2: "Lighting", term3: "Rendering" },
  { name: "Arena Certified Professional in 3D Animation (Term1 + 2)", category: "3D Animation", duration: "Long",  months: 24, courseCode: "OV-3159-ACAP-3DA", totalFees: 1500, registrationFees: 100, downPayment: 200, lumpSum: 1300, installments: 20, month: 7, totalSubmission: 1500, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "Modeling Basics", term2: "Lighting", term3: "Rendering" },
  { name: "Arena Certified Professional in Animation vfx and Gaming", category: "3D Animation", duration: "Long",  months: 24, courseCode: "OV-3142-ACP-AVFXG", totalFees: 1500, registrationFees: 100, downPayment: 200, lumpSum: 1300, installments: 20, month: 7, totalSubmission: 1500, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "Modeling Basics", term2: "Lighting", term3: "Rendering" },
  { name: "B.voc(VFA)", category: "3D Animation", duration: "Long",  months: 24, courseCode: "OV-3108 B.voc FM", totalFees: 1500, registrationFees: 100, downPayment: 200, lumpSum: 1300, installments: 20, month: 7, totalSubmission: 1500, monthlyInstallments_1: 60, monthlyInstallments_2: 60, monthlyInstallments_3: 60, terms: 3, term1: "Modeling Basics", term2: "Lighting", term3: "Rendering" }
];

let filteredCourses = [];

// Function to show courses based on the selected duration
function showCategoriesByDuration() {
  const selectedDuration = document.getElementById("duration").value;
  const dropdown = document.getElementById("dropdown");
  dropdown.innerHTML = ""; // Clear previous options

  dropdown.style.display = "none"; // Hide dropdown initially

  if (selectedDuration) {
    filteredCourses = courses.filter(course => course.duration === selectedDuration);
    const categories = courseCategories[selectedDuration];

    // Display categories based on the selected duration
    categories.forEach((category) => {
      const categoryOption = document.createElement("div");
      categoryOption.textContent = category;
      categoryOption.onclick = () => selectCategory(category); 
      dropdown.appendChild(categoryOption);
    });

    displayCourses(filteredCourses);

    const resultText = document.getElementById("result-text");
    resultText.style.display = filteredCourses.length > 0 ? "block" : "none"; 
  }
}

// Function to filter and display courses based on selected category
function selectCategory(category) {
  document.getElementById("interest").value = category;
  document.getElementById("dropdown").style.display = "none";

  const filteredByCategory = filteredCourses.filter(course =>
    course.category === category
  );

  displayCourses(filteredByCategory); // Display filtered courses

  const resultText = document.getElementById("result-text");
  resultText.style.display = filteredByCategory.length > 0 ? "block" : "none"; 

  if (filteredByCategory.length === 0) {
    const courseGrid = document.getElementById("course-grid");
    courseGrid.innerHTML = "<p>No courses found for the selected category.</p>";
  }
}

// Function to display the courses in the grid
function displayCourses(coursesToDisplay) {
  const courseGrid = document.getElementById("course-grid");
  courseGrid.innerHTML = ""; 

  if (coursesToDisplay.length > 0) {
    coursesToDisplay.forEach((course) => {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";
      courseCard.innerHTML = `
        <h4 onclick="showCourseDetail('${course.name}')">
          ${course.name} <i class="fa-solid fa-right-long fa-beat"></i>
        </h4>
      `;
      courseGrid.appendChild(courseCard);
    });
  } else {
    courseGrid.innerHTML = "<p>No courses found</p>";
  }
}

// Function to show the detailed course information
function showCourseDetail(courseName) {
  selectedCourse = courses.find(course => course.name === courseName);
  document.getElementById("course-detail-title").textContent = selectedCourse.name;

  // Update the first table with course details
  document.getElementById("course-detail-table1").innerHTML = `
    <td>${selectedCourse.courseCode}</td>
    <td>${selectedCourse.name}</td>
    <td>${selectedCourse.months} months</td> <!-- Duration in months -->
    <td>${selectedCourse.terms || "N/A"}</td>
  `;

  if (selectedCourse.terms > 0) {
    document.getElementById("course-detail-table5").style.display = "block";
    document.getElementById("course-detail-table5-content").innerHTML = `
      <td>${selectedCourse.term1 || "N/A"}</td>
      <td>${selectedCourse.term2 || "N/A"}</td>
      <td>${selectedCourse.term3 || "N/A"}</td>
    `;
  } else {
    document.getElementById("course-detail-table5").style.display = "none";
  }

  document.getElementById("course-detail-table2").innerHTML = `
    <td>${selectedCourse.totalFees}</td>
    <td>${selectedCourse.registrationFees}</td>
    <td>${selectedCourse.downPayment}</td>
  `;

  document.getElementById("course-detail-table3").innerHTML = `
    <td>${selectedCourse.lumpSum}</td>
    <td>${selectedCourse.installments}</td>
    <td>${selectedCourse.month}</td>
    <td>${selectedCourse.totalSubmission}</td>
  `;

  document.getElementById("course-detail-table4").innerHTML = `
    <td>${selectedCourse.monthlyInstallments_1}</td>
    <td>${selectedCourse.monthlyInstallments_2}</td>
    <td>${selectedCourse.monthlyInstallments_3}</td>
  `;

  document.getElementById("course-detail-section").style.display = "block";
}

// Function to go back to the course list
function goBack() {
  document.getElementById("course-detail-section").style.display = "none";
}

// Show dropdown when Search by Interest field is clicked
document.getElementById("interest").addEventListener("focus", function() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display = "block";
});

// Hide dropdown when clicking anywhere else
document.addEventListener("click", function(event) {
  if (!event.target.closest("#interest") && !event.target.closest("#dropdown")) {
    document.getElementById("dropdown").style.display = "none";
  }
});
