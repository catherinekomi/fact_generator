<img width="570" alt="Screen Shot 2024-05-23 at 2 06 55 PM" src="https://github.com/catherinekomi/fact_generator/assets/64502672/9320b1e7-e8ef-402f-8ead-c15454ba4e8c">

## Frontend

- **Framework**: React
- **Components**:
  - Input field for entering the favorite animal
  - Button to send the message or press "Enter" to send
  - Message list displaying user and ChatGPT messages
- **Styling**:
  - CSS to mimic iPhone iMessage style bubbles
  - Messages aligned left (user) and right (ChatGPT)
  - Typing indicator animation for ChatGPT

## Backend

- **Framework**: Express.js
- **Endpoint**: `/generate-interesting-fact`
  - Accepts a POST request with the user's favorite animal
  - Sends a prompt to the ChatGPT API to generate an interesting fact
  - Returns the user's message and the ChatGPT's generated fact

## API Key Management

- **Security**: API key stored in a `.env` file

## User Interaction

- Typing the animal and pressing "Enter" or clicking "Send" triggers the message send
- Displays a typing indicator before the ChatGPT's response appears
