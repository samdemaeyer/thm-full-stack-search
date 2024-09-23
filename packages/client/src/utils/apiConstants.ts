// Import function to get the CodeSandbox host
import { getCodeSandboxHost } from "@codesandbox/utils";

// Retrieve the host for CodeSandbox, using port 3001
const codeSandboxHost = getCodeSandboxHost(3001);

// Define the API_URL based on whether a CodeSandbox host is available
export const API_URL = codeSandboxHost
  ? `https://${codeSandboxHost}` // Use the CodeSandbox host if available
  : "http://localhost:3001"; // Fallback to localhost for local development
