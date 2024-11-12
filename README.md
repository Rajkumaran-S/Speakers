# Speakers Website using HTML, CSS and Javascript

### Features:
Displays a list of speakers with their images, names, titles, and short descriptions.
Utilizes Swiper.js library for a carousel-like presentation of speakers.
Includes "View" buttons to potentially reveal more details about each speaker (implementation not provided in this code snippet).

### Technologies Used:
HTML: Provides the basic structure of the webpage.
CSS: Styles the layout and presentation of elements.
JavaScript: Powers interactive features like the carousel and potentially showing speaker details (implementation required in "speaker.js").
Swiper.js: JavaScript library for creating sliders and carousels.
Remixicon: Icon library for visual elements.

### File Structure:
index.html: The main HTML file containing the webpage content.
css/: Folder containing stylesheets (styles.css likely holds custom styles).
js/: Folder containing JavaScript files (swiper-bundle.min.js for the library and speaker.js for potential speaker details logic).
image/: Folder containing images of the speakers.

### Getting Started:
Download or clone the project files.
Ensure you have a web server running to view the webpage locally.
Open index.html in your web browser.

### Customization:
You can modify the speaker information (names, descriptions, images) directly in the HTML code.
Update the image paths in the HTML if speaker images are relocated.
Consider adding speaker details functionality in the speaker.js file (not implemented in this snippet).
Customize the styles in styles.css to match your desired look and feel.

### Run code locally

Runs the app in the development mode.\
Open [(http://127.0.0.1:5501/index.html)](http://127.0.0.1:5501/index.html) to view it in your browser.

### About Code

The code starts with the DOCTYPE declaration specifying it's an HTML5 document.\
The <html> tag contains the entire webpage structure.

The <head> section contains meta information about the page:\
Character encoding meta charset="UTF-8"\
Viewport configuration meta name="viewport" content="width=device-width, initial-scale=1.0"

Links to external stylesheets:\
Remixicon icons https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.css\ \
Your custom CSS styles href="css/swiper-bundle.min.css"\
Your page's specific styles href="css/styles.css"

The <body> section contains the visible content of the webpage:\
A heading section div class="headings" with title and description about the speakers.\
A hidden section div id="main" class="highlight" style="display: none;" containing details of each speaker:\
Each speaker has an article element with details like image, name, description, and a "View" button.

A visible section section class="container" containing speaker cards:\
It uses the Swiper library for a swiper effect assuming you have it set up with Javascript.\
Each speaker card is wrapped in an article element with details similar to the hidden section.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

