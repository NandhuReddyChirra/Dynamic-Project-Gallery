const works = [
    { "id": "task1", "title": "Project 1", "url": "works/Task 1/index.html" },
    { "id": "task2", "title": "Project 2", "url": "works/Task 2/index.html" },
    { "id": "task3", "title": "Project 3", "url": "works/Task 3/index.html" },
    { "id": "task4", "title": "Project 4", "url": "works/Task 4/index.html" },
    { "id": "task5", "title": "Project 5", "url": "works/Task 5/index.html" },
    { "id": "task6", "title": "Project 6", "url": "works/Task 6/index.html" },
    { "id": "task7", "title": "Project 7", "url": "works/Task 7/index.html" },
    { "id": "task8", "title": "Project 8", "url": "works/Task 8/index.html" },
    { "id": "task9", "title": "Project 9", "url": "works/Task 9/index.html" },
    { "id": "task10", "title": "Project 10", "url": "works/Task 10/index.html" },
    { "id": "task11", "title": "Project 11", "url": "works/Task 11/index.html" },
    { "id": "task12", "title": "Project 12", "url": "works/Task 12/index.html" },
    { "id": "task13", "title": "Project 13", "url": "works/Task 13/index.html" },
    { "id": "task14", "title": "Project 14", "url": "works/Task 14/index1.html" },
    { "id": "task15", "title": "Project 15", "url": "works/Task 14/index2.html" },
];

// Function to create the navigation menu from the JSON array
function createNav() {
    const navPanel = document.getElementById("navPanel");
    const numberOfColumns = 9; // We want the first 9 projects in the first row, rest in second row

    works.forEach((work, index) => {
        const link = document.createElement("a");
        link.textContent = work.title;
        link.href = "#";
        link.className = "nav-link";

        // Add click event to load the iframe content
        link.onclick = function() {
            const frame = document.getElementById("contentFrame");
            frame.src = work.url;

            // Highlight active link
            const allLinks = document.querySelectorAll(".nav-link");
            allLinks.forEach(a => a.classList.remove("active"));
            this.classList.add("active");

            return false; // Prevent default link behavior
        };

        // Adjust layout for second row (Project 10 and onwards)
        if (index >= numberOfColumns) {
            link.style.gridColumn = 'auto'; // Set them to a new column
            link.style.gridRow = '2'; // Set them in the second row
            link.style.justifySelf = 'center'; // Center these items
        }

        navPanel.appendChild(link);
    });
}

// Initialize when page loads
window.onload = function() {
    createNav();
};
