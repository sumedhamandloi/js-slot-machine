# js-slot-machine
A command-line based Slot Machine game built with JavaScript and Node.js. Features dynamic betting logic, weighted random symbol generation, and matrix transposition for win detection.


# 🎰 CLI Slot Machine

A command-line based gambling game built with JavaScript (Node.js). This project simulates a standard 3-reel slot machine, allowing users to deposit money, place bets on multiple lines, and spin for a chance to win based on weighted symbol rarity.

## 🚀 Features
* **User Input Handling:** Uses `prompt-sync` to capture deposits and bets.
* **Weighted Randomness:** Symbol generation is not purely random; rare symbols have lower probabilities, mimicking real casino algorithms.
* **Matrix Transposition:** Converts the vertical reel generation logic into horizontal row checks to calculate winnings efficiently.
* **Dynamic Payouts:** Winnings are calculated based on symbol value multipliers.

## 🛠️ Tech Stack
* JavaScript (ES6+)
* Node.js

## 💻 How to Run
1.  **Clone the repository**
    ```bash
    git clone <your-repo-link>
    cd <your-folder-name>
    ```
2.  **Install dependencies** (Installs `prompt-sync` via package.json)
    ```bash
    npm install
    ```
3.  **Start the game**
    ```bash
    node project.js
    ```
*(Or whatever you named your main file)*

## 📸 Example Output
Enter a deposit amount: 100
Current balance: $100
Enter the number of lines to bet on (1-3): 3
Enter the bet per line: 10
...
H | B | A
A | D | C
A | A | A
...
You won! You got $500
Balance: $570

## 🧠 Logic Highlights
This project utilizes a **transpose function** to handle the difference between data generation and win checking:
* **Generation:** 3 Reels (Columns) generated independently.
* **Win Check:** Transposed into 3 Rows to check for identical symbols across lines.

---
*Created while learning logic building and JS fundamentals.*
