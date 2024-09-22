import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./app";

// Create a QueryClient instance
const queryClient = new QueryClient();

test("renders search input", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  const input = screen.getByPlaceholderText("Search accommodation...");
  expect(input).toBeInTheDocument();
});
