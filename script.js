
      const courses = [
        {
          name: "GWDD",
          duration: "18 months",
          interest: "Design",
          courseCode: "GWDD123",
          terms: "3",
          totalFees: "300",
          registrationFees: "50",
          downPayment: "100",
          lumpSum: "250",
          quarterly: "60",
          totalSum: "360",
          monthlyInstallments: "30",
          installments: "6",
          months: 18,
          totalSubmission: "360",
          term1: "Photoshop, illustrator, Photoshop, illustrator,Photoshop, illustrator,Photoshop, illustrator",
          term2: "Photoshop, illustrator, Photoshop, illustrator,Photoshop, illustrator,Photoshop, illustrator",
          term3: "Photoshop, illustrator, Photoshop, illustrator,Photoshop, illustrator,Photoshop, illustrator",
        },
        {
          name: "UI/UX",
          duration: "12 months",
          interest: "UI/UX",
          courseCode: "FIF123",
          terms: "1",
          totalFees: "500",
          registrationFees: "100",
          downPayment: "150",
          lumpSum: "400",
          quarterly: "100",
          totalSum: "600",
          monthlyInstallments: "50",
          installments: "6",
          months: 12,
          totalSubmission: "600",
        },
        {
          name: "3D",
          duration: "Mid",
          interest: "Development",
          courseCode: "WDM123",
          terms:"3",
          totalFees: "1000",
          registrationFees: "150",
          downPayment: "200",
          lumpSum: "800",
          quarterly: "250",
          totalSum: "1500",
          monthlyInstallments: "100",
          installments: "12",
          months: 18,
          totalSubmission: "1200",
          term1: "Photoshop, illustrator",
          term2: "Photoshop, illustrator",
          term3: "Photoshop, illustrator",
        },
        {
          name: "Graphic Designing",
          duration: "Long",
          interest: "AI",
          courseCode: "DSA123",
          terms:  "3",
          totalFees: "3000",
          registrationFees: "200",
          downPayment: "500",
          lumpSum: "2000",
          quarterly: "500",
          totalSum: "3000",
          monthlyInstallments: "250",
          installments: "12",
          months: 36,
          totalSubmission: "3000",
        },
        {
          name: "Advanced Graphic Design",
          duration: "Mid",
          interest: "Design",
          courseCode: "AGD456",
          terms: "3",
          totalFees: "1200",
          registrationFees: "150",
          downPayment: "300",
          lumpSum: "900",
          quarterly: "300",
          totalSum: "1800",
          monthlyInstallments: "150",
          installments: "12",
          months: 18,
          totalSubmission: "1800",
          term1: "Photoshop, illustrator",
          term2: "Photoshop, illustrator",
          term3: "Photoshop, illustrator",
        },
      ];

      let selectedCourse = null;

      function searchByInterest() {
        document.getElementById("course-grid").innerHTML = "";
        document.getElementById("result-text").style.display = "none";

        document.getElementById("duration").value = "";

        const interestInput = document.getElementById("interest").value.toLowerCase();
        if (interestInput.length === 0) {
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
        document.getElementById("interest").value = '';
        document.getElementById("course-grid").innerHTML = "";
        document.getElementById("result-text").style.display = "none";

        const selectedDuration = document.getElementById("duration").value;
        let filteredCourses = [];

        if (selectedDuration === "Short") {
          filteredCourses = courses.filter(
            (course) => course.months <= 12
          );
        } else if (selectedDuration === "Mid") {
          filteredCourses = courses.filter(
            (course) => course.months <= 18
          );
        } else if (selectedDuration === "Long") {
          filteredCourses = courses.filter(
            (course) => course.months > 18
          );
        }

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
        `;

        // Show or hide table with id="course-detail-table5" based on availability of terms
        if (selectedCourse.term1 && selectedCourse.term2 && selectedCourse.term3) {
          document.getElementById("course-detail-table5").style.display = "block";
          document.getElementById("course-detail-table5-content").innerHTML = `
            <td>${selectedCourse.term1}</td>
            <td>${selectedCourse.term2}</td>
            <td>${selectedCourse.term3}</td>
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