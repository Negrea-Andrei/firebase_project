![Demo](src/assets/images/polaroids_example.gif)

# Polaroids: Stock Management App

Polaroids is a React-based stock management web application designed for efficient organization and management of stock-related files. Leveraging Firebase for authentication, database management, and deployment, Polaroids ensures a secure and seamless user experience. Users must be authenticated to access certain features, and image upload functionality is restricted to logged-in users.

## Features

- **User Authentication**: Utilizes Firebase Authentication for secure user logins. Access to certain features is restricted to authenticated users.
- **File Upload Restrictions**: Only authenticated users can upload images. Unauthorized users cannot view or upload pictures.
- **File Upload**: Allows users to upload stock-related files, including titles and associated data.
- **Data Storage**: Utilizes Firebase Firestore for efficient and scalable data storage and retrieval of stock items.
- **Navigation**: Includes a navigation bar for easy traversal between different sections of the app.
- **Routing**: Implements React Router for seamless navigation and a user-friendly experience.
- **Profile**: Provides a profile section for users to view and manage their profile information.

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Usage

- **Welcome Page**: Displays a welcome message and basic information about the app.
- **Public**: Shows a public list of stock items for all users.
- **My List**: Displays the user's personal stock list. Requires user authentication.
- **Profile**: Allows users to view and manage their profile information.

## Authentication

- **Login/Logout**: Users must log in to access their personal stock list and upload images.
- **Restricted Access**: Unauthorized users cannot view or upload images.

## Technologies Used

- React
- React Router
- Firebase
  - Authentication
  - Firestore (Cloud Firestore)
  - Hosting (for deployment)
- Bootstrap (for styling)
- CSS (Additional styling)

## Contributions

Contributions are welcome! Feel free to submit issues or pull requests.

## Deployment

The app is deployed using Firebase Hosting. Visit [Polaroids Deployment](https://polaroid-feb2e.web.app/) to explore Polaroids live.

---

*Note: Ensure to regularly update deployment links if you redeploy the app.*
