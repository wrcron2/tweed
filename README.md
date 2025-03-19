# Tweed Client

This is the frontend client for the Tweed application, built with React, Redux Toolkit, and Vite.

## Prerequisites

Before running the application, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn** (optional)

## Getting Started

Follow these steps to set up and run the application:

### 1. Clone the Repository

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the URL of the repository.

### 2. Navigate to the Project Directory

```bash
cd tweed-client
```

### 3. Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

If you prefer `yarn`, you can use:

```bash
yarn install
```

### 4. Start the Development Server

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server. You can access the app in your browser at:

```
http://localhost:5173
```

### 5. Build for Production

To build the app for production, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### 6. Preview the Production Build

To preview the production build locally, run:

```bash
npm run preview
```

This will serve the production build on a local server.

## Troubleshooting

If you encounter any issues, try the following:

1. Ensure all dependencies are installed by running `npm install` or `yarn install`.
2. Check that the correct Node.js version is installed (`node -v`).
3. If the development server fails to start, try clearing the cache:

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

4. If you encounter issues with environment variables, ensure you have a `.env` file with the required variables.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out if you have any questions or issues!