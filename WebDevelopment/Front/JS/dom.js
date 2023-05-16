//Ejercicios de DOM

// Function 1
function showMousePosition() {
    // Code for displaying mouse position
    document.addEventListener("mousemove", function(event) {
        let x = event.clientX;
        let y = event.clientY;
        let coor = "Posición del mouse: (" + x + "," + y + ")";
        document.getElementById("mousePosition").innerHTML = coor;
    });
}

// Function 2
function handleFormSubmit() {
    // Code for handling form submission
    let form = document.getElementById("form1");
    let firstName = document.getElementById("form-fname");
    let lastName = document.getElementById("form-lname");
    let formButton = document.getElementById("form1-submit");
    
    formButton.addEventListener("click", function (e) {
        e.preventDefault();
        let fullName = document.createElement("p");
        fullName.textContent = firstName.value + " " + lastName.value;
        form.appendChild(fullName);
    });
}

// Function 3
function insertRowAndColumn() {
    // Get references to the table and buttons
    const table = document.getElementById("sampleTable");
    const btnInsertRow = document.getElementById("btn-insert-r");
    const btnInsertColumn = document.getElementById("btn-insert-c");

    // Function to insert a new row at the end of the table
    function insertRow() {
        const newRow = table.insertRow();
        const rowCount = table.rows.length;

        for (let i = 0; i < table.rows[0].cells.length; i++) {
            const cell = newRow.insertCell(i);
            cell.textContent = "Row " + rowCount + " column " + (i + 1);
        }
    }

    // Function to insert a new column at the end of each row
    function insertColumn() {
        const rows = table.rows;

        for (let i = 0; i < rows.length; i++) {
            const cell = rows[i].insertCell();
            cell.textContent = "Row " + (i + 1) + " column " + (rows[i].cells.length);
        }
    }

    // Attach click event listeners to the buttons
    btnInsertRow.addEventListener("click", insertRow);
    btnInsertColumn.addEventListener("click", insertColumn);
}

// Function 4
function updateTableCellContent() {
    // Get references to the table and form elements
    const table2 = document.getElementById("myTable");
    const rowIndexInput = document.getElementById("rowIndex");
    const colIndexInput = document.getElementById("colIndex");
    const newValueInput = document.getElementById("newValue");
    const btnChange = document.getElementById("btn-change");

    // Add event listener to the button
    btnChange.addEventListener("click", updateTableContent);

    // Function to handle the button click and update the table content
    function updateTableContent() {
        // Retrieve the values entered by the user
        const rowIndex = parseInt(rowIndexInput.value) - 1; // Convert to zero-based index
        const colIndex = parseInt(colIndexInput.value) - 1; // Convert to zero-based index
        const newValue = newValueInput.value;

        // Validate the row and column indices
        if (isNaN(rowIndex) || isNaN(colIndex) || rowIndex < 0 || colIndex < 0 ||
            rowIndex >= table2.rows.length || colIndex >= table2.rows[0].cells.length) {
            // Display an error message
            alert("Invalid row or column index.");
            return;
        }
        // Update the table cell with the new value
        table2.rows[rowIndex].cells[colIndex].textContent = newValue;
    }
}

// Function 5
function manipulateColorOptions() {
    // Get references to the select element and buttons
    const colorSelect = document.getElementById("colorSelect");
    const btnAddColor = document.getElementById("btn-add-color");
    const btnRemoveColor = document.getElementById("btn-rmv-color");

    // Add event listeners to the buttons
    btnAddColor.addEventListener("click", addRandomColor);
    btnRemoveColor.addEventListener("click", removeLastColor);

    // Function to add a random color to the select list
    function addRandomColor() {
        const colors = ["Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Gray", "Cyan", "Magenta", "Lime", "Teal", "Indigo", "Violet", "Silver", "Gold", "Maroon", "Olive", "Coral", "Navy", "Aquamarine", "Turquoise", "Tan", "Chocolate", "Lavender", "Crimson", "Plum", "Orchid", "Salmon", "Sienna", "Khaki", "Beige", "Hotpink", "Coral", "Tomato", "Darkorange", "Orange", "Gold", "Khaki", "Lime", "Green", "Darkgreen", "Lightseagreen", "Darkcyan", "Deepskyblue", "Dodgerblue", "Royalblue", "Blue", "Navy", "Indigo", "Purple", "Magenta", "Orchid", "Violet", "Hotpink", "Crimson", "Red", "Chocolate", "Saddlebrown", "Rosybrown", "Silver", "Gray", "Black", "White"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Create a new option element
        const newOption = document.createElement("option");
        newOption.textContent = randomColor;

        // Append the new option to the select list
        colorSelect.appendChild(newOption);
    }
    // Function to remove the last added color from the select list
    function removeLastColor() {
        const optionCount = colorSelect.options.length;

        // Ensure there is at least one option available
        if (optionCount > 0) {
            // Remove the last option from the select list
            colorSelect.remove(optionCount - 1);
        }
    }
}

// Function 6
function changeImageSize() {
    // Get references to the image element and size text element
    const image = document.getElementById("imagenGato");
    const sizeText = document.getElementById("sizeText");

    // Add event listener to the image
    image.addEventListener("mouseenter", function() {
        // Generate random width and height values
        const width = Math.floor(Math.random() * 300) + 300;
        const height = Math.floor(Math.random() * 300) + 300;

        // Update the image source and size
        image.src = "http://placekitten.com/" + width + "/" + height;
        image.width = width;
        image.height = height;

        // Display the size information
        sizeText.textContent = "Width: " + width + " | Height: " + height;
    });
}

// Call the functions to make them work
showMousePosition();
handleFormSubmit();
insertRowAndColumn();
updateTableCellContent();
manipulateColorOptions();
changeImageSize();