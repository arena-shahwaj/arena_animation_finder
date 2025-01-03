/*const recipes = [
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

  if (!filteredRecipes.length) {
    resultsSection.classList.add("hidden");
    resultContainer.innerHTML = "<tr><td colspan='4'>No results found</td></tr>";
    return;
  }

  resultsSection.classList.remove("hidden");
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

// Add event listeners to trigger search on dropdown change
document.querySelectorAll("select").forEach((dropdown) => {
  dropdown.addEventListener("change", handleSearch);
});

function handleSearch() {
  const softwareQuery = document.getElementById("softwareDropdown").value.trim().toLowerCase();
  const courseQuery = document.getElementById("courseDropdown").value.trim();
  const timeQuery = parseInt(document.getElementById("timeFilter").value, 10);
  const interestQuery = document.getElementById("interestDropdown").value.trim().toLowerCase();

  if (!softwareQuery && !courseQuery && !timeQuery && !interestQuery) {
    alert("Please fill in at least one field before searching.");
    return;
  }

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
}*/
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

