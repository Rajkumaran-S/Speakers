# Getting Started with Create Speakers App using HTML, CSS and Javascript

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

