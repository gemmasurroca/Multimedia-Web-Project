# Olot Tourism Website - Technical Report

## 1. Page Structure (Wireframe Description)
The application is designed as a Single Page Application that guides the user through the discovery of Olot.

*   **Header**: Is a fixed header positioned at the top of the page. It contains the website branding (“Olot Tourism”) and a navigation menu with links (Introduction, Discover, Activities) that allows the user to scroll to the corresponding sections.
  
*   **Hero Section**: A full-screen introductory section featuring a high-quality background image of Olot's natural landscape. It includes a main central title, and a button ("Explore activities") that redirects the user to the activities and booking section.
  
*   **Intro Section**: Aninformational section that introduces Olot. The content is a grid of three visual cards: Land of Volcanoes, Forests and City Integrated with Nature. These cards combine text with images to explain the main characteristics of the City. 
*   **Multimedia Section**: A creative section that is dedicated to multimedia content. It includes:
    *   An edited image.
    *   An audio to listen to a local poem of "Joan Maragall".
    *   A 3D volcano animation of a volcano.
*   **Activities & Cart Section**: The functional part of the website. Is dividet in two columns: 
    *   **Left Column (Activities)**: A grid that displays of tourist activities. Each activity card includes an image, title, price, and an "Add to cart" button.
    *   **Right Column (Cart)**: A sidebar that displays the selected activities by the user that calculates the total price. Each activity added allows to be removed.
*   **Footer**: A simple footer placed at the bottom of the website.

## 2. Implemented Features and Multimedia Elements

### Features
*   **Component-Based Architecture**: The project is built using React. Each section (Hero, Intro, Activities, Cart...) is implemented as an independent component. Thanks to React's model, the aplication does not require page reloads, instead, the user interface updates whenever the aplication state changes. 

*   **Interactive Shopping Cart**: Users can add activities to their plan. The cart allows to:
    *   Add new activities to the Cart.
    *   Remove activities from the Cart.
    *   Automatic recalculation of the total price.

### Multimedia Elements
*   **Audio Integration**: HTML5 `<audio>` tag used to include the poem "La Fageda d’en Jordà", allowing users to play and pause the audio on the website. 
*   **Image Editing**: An original photograph of Olot was edited using color correction an saturating ajustments to enhance the intensity of the landscape. The sky was also modified changing a white color to a blue and cloudy sky. There is also a text overlay to indicate that the edited image is from Croscat Volcano.
*   **3D Graphics (Three.js)**: A 3D volcano animation was developed using the three library:
    *  The volcano is represented by a conical geometry.
    *  A particle system simulates the lava eruption.

## 3. Development Process

First of all, the application was created using Create React App, which provided the initial structure and development environment. After that, I defined the main React components needed for the website.

Development started with the Header and Hero sections, as they establish the main layout and first visual impression. Next, the Introduction and Activities sections were implemented, including the activity selection and the Cart functionality.

Finally, I focused on the Multimedia section, which required the most effort because it included searching for images, editing an photograph (color and saturation adjustments, text overlay), integrating an audio clip, and creating a 3D volcano animation using Three.js.

## 4. Instructions to Run the Website Locally

To run this project on your local machine, first, ensure you have **Node.js** installed on your computer. 
Follow these steps:

**Steps**
1.  **Open Terminal**: Navigate to the project folder (`web-olot`).
    ```bash
    cd path/to/web-olot
    ```
2.  **Install Dependencies**: Run the following command to install necessary libraries as Three.js.
    ```bash
    npm install
    ```
3.  **Start the Server**: Run the application.
    ```bash
    npm start
    ```
