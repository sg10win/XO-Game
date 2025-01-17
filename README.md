# XO (Tic-Tac-Toe) Game

This is a simple web-based Tic-Tac-Toe (XO) game built with Flask for the backend and plain JavaScript for the frontend. It allows two players to play a classic Tic-Tac-Toe game in their browser.

## Features

- Interactive Tic-Tac-Toe game board.
- Win detection for both players (X and O).
- Detection for invalid moves.
- Alerts for game results (Win/Draw).

## Project Structure

### Backend (Python - Flask)
The Flask application handles the server-side rendering of the HTML file and serves as the backend.

- **File:** `app.py`
- **Routes:**
  - `/`: Renders the main page.
  - `/xo` and `/xo/<name>`: Additional routes to render the page with optional parameters.

### Frontend (JavaScript)
The JavaScript script controls the game logic, including turn management, move validation, and win/draw detection.

- **File:** `script.js`
- **Key Functionalities:**
  - Handling player turns.
  - Detecting wins based on pre-defined winning combinations.
  - Alerting players for invalid moves and game results.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sg10win/XO_Flask
   ```

2. Navigate to the project directory:
   ```bash
   cd XO_Flask
   ```

3. Install dependencies:
   Ensure you have Python installed, then install Flask:
   ```bash
   pip install flask
   ```

4. Run the Flask application:
   ```bash
   python app.py
   ```

5. Open your web browser and navigate to:
   ```
   http://localhost:5000
   ```

## How to Play

1. Open the game in your web browser.
2. Click on an empty cell to place your mark (X or O).
3. Alternate turns between two players.
4. The game will detect and alert the winner or if the game ends in a draw.

## Files

- **`app.py`**: Backend server script using Flask.
- **`templates/index.html`**: Frontend HTML file for the game board.
- **`static/script.js`**: JavaScript file handling game logic.

## Dependencies

- Python 3.x
- Flask
---

Enjoy playing Tic-Tac-Toe!"


