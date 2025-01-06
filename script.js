
const courses = [
  {
    name: "GWD",
    duration: "Short",
    courseCode: "GWDD123",
    terms: "1 Year",
    software: "Adobe Photoshop",
    totalFees: "300",
    registrationFees: "50",
    downPayment: "100",
    lumpSum: "250",
    quarterly: "60",
    totalSum: "360",
    monthlyInstallments: "30",
    installments: "6",
    months: "6 months",
    totalSubmission: "360",
  },
  {
    name: "Graphic design",
    duration: "Short",
    courseCode: "FIF123",
    terms: "1 Year",
    software: "Figma",
    totalFees: "500",
    registrationFees: "100",
    downPayment: "150",
    lumpSum: "400",
    quarterly: "100",
    totalSum: "600",
    monthlyInstallments: "50",
    installments: "6",
    months: "6 months",
    totalSubmission: "600",
  },
  {
    name: "Motion Graphic",
    duration: "Short",
    courseCode: "FIF123",
    terms: "1 Year",
    software: "Figma",
    totalFees: "500",
    registrationFees: "100",
    downPayment: "150",
    lumpSum: "400",
    quarterly: "100",
    totalSum: "600",
    monthlyInstallments: "50",
    installments: "6",
    months: "6 months",
    totalSubmission: "600",
  },
  {
    name: "2D",
    duration: "Mid",
    courseCode: "WDM123",
    terms: "2 Years",
    software: "HTML",
    totalFees: "1000",
    registrationFees: "150",
    downPayment: "200",
    lumpSum: "800",
    quarterly: "250",
    totalSum: "1500",
    monthlyInstallments: "100",
    installments: "12",
    months: "12 months",
    totalSubmission: "1200",
  },

{
    name: "3D",
    duration: "Mid",
    courseCode: "WDM123",
    terms: "2 Years",
    software: "HTML",
    totalFees: "1000",
    registrationFees: "150",
    downPayment: "200",
    lumpSum: "800",
    quarterly: "250",
    totalSum: "1500",
    monthlyInstallments: "100",
    installments: "12",
    months: "12 months",
    totalSubmission: "1200",
  },
{
    name: "GWDD",
    duration: "Mid",
    courseCode: "WDM123",
    terms: "1.5 Years",
    software: "HTML",
    totalFees: "1000",
    registrationFees: "150",
    downPayment: "200",
    lumpSum: "800",
    quarterly: "250",
    totalSum: "1500",
    monthlyInstallments: "100",
    installments: "12",
    months: "12 months",
    totalSubmission: "1200",
  },
  {
    name: "B.Voc",
    duration: "Long",
    courseCode: "DSA123",
    terms: "3 Years",
    software: "Photoshop, Illustrator",
    totalFees: "3000",
    registrationFees: "200",
    downPayment: "500",
    lumpSum: "2000",
    quarterly: "500",
    totalSum: "3000",
    monthlyInstallments: "250",
    installments: "12",
    months: "12 months",
    totalSubmission: "3000",
  },
  {
    name: "VFX film Making",
    duration: "Long",
    courseCode: "AGD456",
    terms: "2 Years",
    software: "Adobe Illustrator",
    totalFees: "1200",
    registrationFees: "150",
    downPayment: "300",
    lumpSum: "900",
    quarterly: "300",
    totalSum: "1800",
    monthlyInstallments: "150",
    installments: "12",
    months: "12 months",
    totalSubmission: "1800",
  },
  {
    name: "M.Voc",
    duration: "Long",
    courseCode: "WDM123",
    terms: "2 Years",
    software: "HTML",
    totalFees: "1000",
    registrationFees: "150",
    downPayment: "200",
    lumpSum: "800",
    quarterly: "250",
    totalSum: "1500",
    monthlyInstallments: "100",
    installments: "12",
    months: "12 months",
    totalSubmission: "1200",
  },
];

let selectedCourse = null;

function searchByInterest() {
  const interestInput = document.getElementById("interest").value.toLowerCase();
  if (interestInput.length === 0) {
    document.getElementById("course-grid").innerHTML = "";
    document.getElementById("result-text").style.display = "none";
    return;
  }

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(interestInput)
  );
  displayCourses(filteredCourses);

  const resultText = document.getElementById("result-text");
  resultText.style.display = filteredCourses.length > 0 ? "block" : "none";
}

function searchByFilter() {
  const selectedDuration = document.getElementById("duration").value;
  const filteredCourses = courses.filter(
    (course) => course.duration === selectedDuration
  );
  displayCourses(filteredCourses);

  const resultText = document.getElementById("result-text");
  resultText.style.display = filteredCourses.length > 0 ? "block" : "none";
}

function displayCourses(filteredCourses) {
  const courseGrid = document.getElementById("course-grid");
  courseGrid.innerHTML = "";

  filteredCourses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card";
    courseCard.innerHTML = `
      <h4 onclick="showCourseDetail('${course.name}')">
       ${course.name} <i class="fa-solid fa-right-long fa-beat"></i>
      </h4>
    `;
    courseGrid.appendChild(courseCard);
  });
}

function showCourseDetail(courseName) {
  selectedCourse = courses.find((course) => course.name === courseName);
  document.getElementById("course-detail-title").textContent = selectedCourse.name;

  document.getElementById("course-detail-table1").innerHTML = `
    <td>${selectedCourse.courseCode}</td>
    <td>${selectedCourse.name}</td>
    <td>${selectedCourse.duration}</td>
    <td>${selectedCourse.terms}</td>
    <td>${selectedCourse.software}</td>
  `;

  document.getElementById("course-detail-table2").innerHTML = `
    <td>${selectedCourse.totalFees}</td>
    <td>${selectedCourse.registrationFees}</td>
    <td>${selectedCourse.downPayment}</td>
  `;

  document.getElementById("course-detail-table3").innerHTML = `
    <td>${selectedCourse.lumpSum}</td>
    <td>${selectedCourse.quarterly}</td>
    <td>${selectedCourse.totalSum}</td>
    <td>${selectedCourse.monthlyInstallments}</td>
  `;

  document.getElementById("course-detail-table4").innerHTML = `
    <td>${selectedCourse.installments}</td>
    <td>${selectedCourse.months}</td>
    <td>${selectedCourse.totalSubmission}</td>
  `;

  document.getElementById("course-detail-section").style.display = "block";
}

function goBack() {
  document.getElementById("course-detail-section").style.display = "none";
}

