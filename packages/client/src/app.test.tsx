import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./app";

// Create a QueryClient instance for managing server state
const queryClient = new QueryClient();

test("renders search input", () => {
  // Render the App component within the QueryClientProvider to provide React Query context
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  // Find the input element by its placeholder text
  const input = screen.getByPlaceholderText("Search accommodation...");

  // Assert that the input element is present in the document
  expect(input).toBeInTheDocument();
});
