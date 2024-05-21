## Frontend

- **Framework**: React
- **Components**:
  - Input field for entering the favorite animal
  - Button to send the message or press "Enter" to send
  - Message list displaying user and LLama messages
- **Styling**:
  - CSS to mimic iPhone iMessage style bubbles
  - Messages aligned left (user) and right (LLama)
  - Typing indicator animation for LLama

## Backend

- **Framework**: Express.js
- **Endpoint**: `/generate-interesting-fact`
  - Accepts a POST request with the user's favorite animal
  - Sends a prompt to the LLama API to generate an interesting fact
  - Returns the user's message and the LLama's generated fact

## API Key Management

- **Security**: API key stored in a `.env` file

## User Interaction

- Typing the animal and pressing "Enter" or clicking "Send" triggers the message send
- Displays a typing indicator before the LLama's response appears
