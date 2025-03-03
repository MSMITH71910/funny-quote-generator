# **Funny Quote Generator**

Welcome to the **Funny Quote Generator**, a simple and fun web application that generates random funny quotes to brighten your day! This project was built with **HTML**, **CSS**, and **JavaScript**, and it is fully responsive, ensuring a great user experience on all devices.

---

## **Features**
- **Random Quote Generation**: Click the "Generate Quote" button to display a random funny quote.
- **Copy Quote Button**: Easily copy the displayed quote to your clipboard with a single click.
- **Responsive Design**: The layout adjusts seamlessly for desktops, tablets, and mobile devices.
- **Modern Styling**: A clean and visually appealing design with a patterned background and centered content.

---

## **How It Works**
### **Random Quote Selection**
- The application uses a predefined array of funny quotes stored in the `quotes.js` file.
- When the "Generate Quote" button is clicked, a random quote is selected and displayed on the screen.

### **Copy to Clipboard**
- The "Copy Quote" button uses the `navigator.clipboard.writeText` API to copy the currently displayed quote to the clipboard.
- A confirmation alert notifies the user that the quote has been successfully copied.

### **Responsive Design**
- The layout is styled using CSS Flexbox to ensure the quote box is centered both vertically and horizontally.
- Media queries adjust the font sizes and button styles for smaller screens.

---

## **Technologies Used**
- **HTML**: For the structure of the webpage.
- **CSS**: For styling and responsiveness.
- **JavaScript**: For functionality, including random quote generation and clipboard copying.

---

## **Project Structure**
Here’s an overview of the project files:

1. **`index.html`**:
   - The main HTML file that contains the structure of the webpage.
   - Includes buttons for generating and copying quotes, as well as a container for displaying the quotes.

2. **`style.css`**:
   - Contains all the styles for the webpage, including the responsive design.
   - Features a patterned background and a semi-transparent quote container for better readability.

3. **`quotes.js`**:
   - Stores an array of funny quotes in the `localQuotes` variable.
   - Each quote is an object with `text` and `author` properties.

4. **`script.js`**:
   - Handles the functionality of the application.
   - Includes event listeners for the "Generate Quote" and "Copy Quote" buttons.

---

## **How It Was Built**
### **Step 1: Setting Up the Project**
- Created the basic structure using `index.html`, `style.css`, and `script.js`.
- Added a `quotes.js` file to store the array of funny quotes.

### **Step 2: Building the Quote Generator**
- Used JavaScript to randomly select a quote from the `localQuotes` array.
- Displayed the selected quote dynamically in the `quote-display` container.

### **Step 3: Adding the Copy Functionality**
- Implemented the "Copy Quote" button using the `navigator.clipboard.writeText` API.
- Added a confirmation alert to notify the user when the quote is copied.

### **Step 4: Styling the Application**
- Designed a clean and modern layout using CSS.
- Added a semi-transparent background to the quote container to make the text stand out over the patterned background.
- Used Flexbox to center the content and ensure responsiveness.

### **Step 5: Making It Responsive**
- Added media queries to adjust font sizes and button styles for smaller screens.
- Ensured the layout works seamlessly on desktops, tablets, and mobile devices.

---

## **How to Use**
1. Clone or download the repository:
   ```bash
   git clone https://github.com/MSMITH71910/funny-quote-generator.git
