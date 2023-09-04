document.addEventListener("DOMContentLoaded", function () {
    //Creates a button to add it to the DOM
    const customCursor = document.createElement("div");
    customCursor.className = "custom-cursor";

    document.body.appendChild(customCursor);
    // Select the common ancestor that contains all elements where the hover state will be applied
    const hoverContainer = document.body; // You can replace document.body with a more specific container if needed

    // Add a single event listener for mouseover and mouseout events using event delegation
    hoverContainer.addEventListener("mouseover", (e) => {
        const target = e.target;

        // Check if the hovered element is one of the specified elements (a or .bricks-button)
        if (target.matches("a, .bricks-button")) {
            // Add the CSS class to grow the cursor
            customCursor.classList.add("cursorgrow");
        }
    });

    hoverContainer.addEventListener("mouseout", (e) => {
        const target = e.target;

        // Check if the element that mouseout occurred on is one of the specified elements
        if (target.matches("a, .bricks-button")) {
            // Remove the CSS class to reset the cursor size
            customCursor.classList.remove("cursorgrow");
        }
    });
    document.addEventListener("mousemove", (e) => {
        customCursor.style.left = e.clientX + "px";
        customCursor.style.top = e.clientY + "px";
    });
});
