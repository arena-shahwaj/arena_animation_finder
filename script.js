/*
  const recipes = [
    {
      name: "GWDD",
      ingredients: [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Angular",
        "PHP",
      ],
      time: 18,
      fees: 120000,
    },
    {
      name: "GWD",
      ingredients: [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
      time: 12,
      fees: 120000,
    },
    {
      name: "3D",
      ingredients: ["Photoshop", "Maya", "Premiere"],
      time: 6,
      fees: 120000,
    },
    {
      name: "VFX",
      ingredients: ["Photoshop", "Maya", "Premiere"],
      time: 10,
      fees: 120000,
    },
    {
      name: "Animation",
      ingredients: ["Blender", "After Effects", "Cinema 4D"],
      time: 24,
      fees: 120000,
    },
    {
      name: "Editing",
      ingredients: ["Premiere", "Photoshop", "Audition"],
      time: 6,
      fees: 120000,
    },
    {
      name: "Video Editing",
      ingredients: ["Photoshop", "Illustrator", "InDesign", "After Effects"],
      time: 15,
      fees: 120000,
    },
    {
      name: "Advanced Animation",
      ingredients: ["Maya", "Cinema 4D", "Houdini"],
      time: 36,
      fees: 120000,
    },
  ];

  function displayResults(filteredRecipes) {
    const resultContainer = document.getElementById("resultContainer");
    const resultsSection = document.getElementById("recipeResults");
    const resetBtn = document.getElementById("resetBtn");

    if (!filteredRecipes.length) {
      resultsSection.classList.add("hidden");
      resetBtn.classList.remove("hidden");
      resultContainer.innerHTML =
        "<tr><td colspan='4'>No results found</td></tr>";
      return;
    }

    resultsSection.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
    resultContainer.innerHTML = filteredRecipes
      .map(
        (recipe) => `
          <tr>
            <td>${recipe.name}</td>
            <td>${recipe.ingredients.join(", ")}</td>
            <td>${recipe.time} Months</td>
            <td>${recipe.fees}</td>
          </tr>`
      )
      .join("");
  }

  document
    .getElementById("softwareDropdown")
    .addEventListener("change", filterResults);
  document
    .getElementById("courseDropdown")
    .addEventListener("change", filterResults);
  document
    .getElementById("timeFilter")
    .addEventListener("change", filterResults);
  document
    .getElementById("interestDropdown")
    .addEventListener("change", filterResults);

  function filterResults() {
    const softwareQuery = document
      .getElementById("softwareDropdown")
      .value.trim()
      .toLowerCase();
    const courseQuery = document.getElementById("courseDropdown").value.trim();
    const timeQuery = parseInt(document.getElementById("timeFilter").value, 10);
    const interestQuery = document
      .getElementById("interestDropdown")
      .value.trim();

    const filteredRecipes = recipes.filter((recipe) => {
      const matchesSoftware = softwareQuery
        ? recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(softwareQuery)
          )
        : true;

      const matchesCourse = courseQuery
        ? recipe.name.toLowerCase() === courseQuery.toLowerCase()
        : true;

      const matchesTime = timeQuery
        ? timeQuery === 6
          ? recipe.time <= 6
          : timeQuery === 12
          ? recipe.time === 12
          : timeQuery === 18
          ? recipe.time > 12 && recipe.time <= 18
          : recipe.time > 18
        : true;

      const matchesInterest = interestQuery
        ? recipe.name.toLowerCase() === interestQuery.toLowerCase()
        : true;

      return matchesSoftware && matchesCourse && matchesTime && matchesInterest;
    });

    displayResults(filteredRecipes);
  }

  function resetForm() {
    document.getElementById("softwareDropdown").value = "";
    document.getElementById("courseDropdown").value = "";
    document.getElementById("timeFilter").value = "";
    document.getElementById("interestDropdown").value = "";
    document.getElementById("resultContainer").innerHTML = "";
    document.getElementById("recipeResults").classList.add("hidden");
    document.getElementById("resetBtn").classList.add("hidden");
  }

  document.getElementById("resetBtn").addEventListener("click", () => {
    resetForm();
  });

  document.getElementById("resetBtn").classList.add("hidden");
*/

  const courses = [
        {
          name: "GWDD",
          duration: "18",
          interest: "Design",
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
          name: "UI/UX",
          duration: "Short",
          interest: "UI/UX",
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
          name: "3D",
          duration: "Mid",
          interest: "Development",
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
          name: "Graphic Designing",
          duration: "Long",
          interest: "AI",
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
          name: "Advanced Graphic Design",
          duration: "Mid",
          interest: "Design",
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
      ];

      let selectedCourse = null;

      function searchByInterest() {
        const interestInput = document
          .getElementById("interest")
          .value.toLowerCase();
        const filteredCourses = courses.filter((course) =>
          course.name.toLowerCase().startsWith(interestInput)
        );
        displayCourses(filteredCourses);

        if (filteredCourses.length === 0) {
          document.getElementById("next-button").style.display = "none";
        }
      }

      function searchByFilter() {
        const selectedDuration = document.getElementById("duration").value;
        const filteredCourses = courses.filter(
          (course) => course.duration === selectedDuration
        );
        displayCourses(filteredCourses);

        if (filteredCourses.length === 0) {
          document.getElementById("next-button").style.display = "none";
        }
      }

      function displayCourses(filteredCourses) {
        const courseGrid = document.getElementById("course-grid");
        courseGrid.innerHTML = "";

        filteredCourses.forEach((course) => {
          const courseCard = document.createElement("div");
          courseCard.className = "course-card";
          courseCard.innerHTML = `
                    <h4 onclick="showCourseDetail('${course.name}')">${course.name}</h4>
                `;
          courseGrid.appendChild(courseCard);
        });
      }

      function showCourseDetail(courseName) {
        selectedCourse = courses.find((course) => course.name === courseName);
        document.getElementById("course-detail-title").textContent =
          selectedCourse.name;

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

        document.getElementById("search-section").style.display = "none";
        document.getElementById("course-detail-section").style.display =
          "block";

     
        document.getElementById("next-button").style.display = "inline-block";
      }

   
      function goBack() {
        document.getElementById("search-section").style.display = "flex";
        document.getElementById("course-detail-section").style.display = "none";
      }

      function showNextCourseDetail() {
        if (selectedCourse) {
          showCourseDetail(selectedCourse.name);
        }
      }

