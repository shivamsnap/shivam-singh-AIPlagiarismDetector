# shivam-singh-AIPlagiarismDetector
This is an AI-driven Plagiarism Detector web application that uses the OpenAI API to check and detect potential plagiarism in the given text inputs. Developed using React for the frontend and Node.js/Express.js for the backend, this project serves as a complete full-stack application.
Features

    Detect plagiarism using OpenAI's powerful API.
    User-friendly interface built with React.
    Real-time plagiarism detection.
    Backend server using Node.js and Express.js.
    Scalable and customizable to different datasets.

Prerequisites

Before you begin, ensure you have met the following requirements:

    Node.js (version 14.x or higher) installed on your system.
    npm (Node Package Manager) installed.
    An OpenAI API key. You can get it by signing up at OpenAI.

Tech Stack

    Frontend: React
    Backend: Node.js, Express.js
    API: OpenAI API

Installation and Setup

Follow these steps to get the project running locally.
Clone the repository:

bash

git clone https://github.com/yourusername/ai-plagiarism-detector.git
cd ai-plagiarism-detector

Install dependencies:

bash

npm install

This command will install all the required packages for both frontend and backend as specified in package.json.
Setting up OpenAI API Key

To use OpenAI API, you'll need to set your OpenAI API key in the environment variables.

    Create a .env file in the root of your project.
    Add the following line to the .env file:

bash

REACT_APP_OPENAI_API_KEY=your_openai_api_key

Replace your_openai_api_key with your actual OpenAI API key.
Running the Project:
For Development:

    Start the Backend Server:

    In the root directory, run:

    bash

npm run server

This will start the Node.js backend server.

Start the Frontend React App:

In another terminal window, run:

bash

    npm start

    This will start the React development server and open the app in your default web browser.

For Production:

    Build the Frontend:

    bash

npm run build

Run the Production Server:

bash

npm run start:prod

This will serve the application using the production build.
Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Make sure to update tests as appropriate.
Contact

If you have any questions, feel free to reach out:

    Email: shivamss123vb@gmail.com
    GitHub: shivamsnap
