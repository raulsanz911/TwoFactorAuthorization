
# Two-Factor Authentication (SMS)

This project offers a simple two-factor authentication (2FA) mechanism using SMS codes. Users are sent a verification code upon request, which they must then input to verify their phone number.

# Table of Contents
1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Environment Variables](#environment-variables)
5. [API Endpoints](#api-endpoints)

# Features

- Generation of random verification codes.
- Limit on the maximum number of codes sent to a phone number.
- Code expiration mechanism.

# Getting Started

## Prerequisites

- Node.js
- MongoDB (MongoDB Atlas)

## Installation

1. Clone the repository:
```
git clone [<repository-url>](https://github.com/raulsanz911/TwoFactorAuthorization)
```

2. Navigate to the project directory and install dependencies:
```
cd TwoFactorAuthentication
npm install
```

3. Set up your environment variables (see the [Environment Variables](#environment-variables) section).

4. Start the server:
```
node server.js
```

# Usage

Once the server is running, you can use tools like Postman or CURL to interact with the API endpoints.

# Environment Variables

These are the necessary environment variables:

- `MONGO_USER`: Your MongoDB username.
- `MONGO_PASSWORD`: Your MongoDB password.
- `DB_NAME` : Your Database Name

You can set them up in a `.env` file at the root of your project. Make sure to include this file in your `.gitignore` to prevent exposing sensitive data.

# API Endpoints

1. **Send Code**
   - **URL:** `/send_code`
   - **Method:** `POST`
   - **Body:** `{ "phone": "your_phone_number" }`
   - **Success Response:** `{ "success": true, "message": "Code sent successfully." }`
   - **Error Response:** `{ "success": false, "message": "Error message" }`

2. **Check Code**
   - **URL:** `/check_code`
   - **Method:** `POST`
   - **Body:** `{ "phone": "your_phone_number", "code": "your_code" }`
   - **Success Response:** `{ "success": true, "message": "Code verified successfully." }`
   - **Error Response:** `{ "success": false, "message": "Error message" }`

