# Weather App

A simple weather application that fetches and displays weather information based on the user's location or a specified city. The app uses the Weather API to get the weather data.

## Features

- Fetches weather data based on the user's IP address.
- Allows users to search for weather information by city.
- Displays temperature, weather conditions, wind speed, humidity, and UV index.
- Provides an option to return to the user's current location weather.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/eliorabaev/WeatherApp.git
    cd WeatherApp
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Weather API key:
    ```env
    API_KEY=your_api_key_here
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. The app will automatically fetch and display the weather information based on your IP address.
3. To search for weather information by city, enter the city name in the search bar and press Enter.
4. To return to your current location's weather, click the "Back to my location" button.

## Code Overview

### Server-Side Code

- **`index.js`**: The main server file that sets up the Express server and routes.

### Client-Side Code

- **`views/index.ejs`**: The main HTML template that displays the weather information.
- **`public/styles.css`**: Contains the CSS styles for the app.

## Dependencies

- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Axios: Promise-based HTTP client for the browser and Node.js.
- EJS: Embedded JavaScript templating.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements

- Weather API for providing the weather data.
- Font Awesome for the icons used in the app.
- Designed using Bootstrap.
