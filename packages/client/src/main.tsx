import React from "react"; // Import React to use JSX
import ReactDOM from "react-dom/client"; // Import the root API for rendering
import App from "./app.tsx"; // Import the main App component
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import for managing server state
import "./index.css"; // Import global CSS styles

const queryClient = new QueryClient(); // Create a new instance of QueryClient for React Query

// Render the application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {" "}
    {/* Enables additional checks and warnings for components */}
    <QueryClientProvider client={queryClient}>
      {" "}
      {/* Provide the QueryClient to the app */}
      <App /> {/* Render the main App component */}
    </QueryClientProvider>
  </React.StrictMode>
);
