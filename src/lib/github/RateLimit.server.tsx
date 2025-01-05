import { token } from "../helper";

export default async function getRateLimit() {
  if (!token) {
    throw new Error(
      "GitHub token is missing. Please add it to your environment variables."
    );
  }

  try {
    const response = await fetch("https://api.github.com/rate_limit", {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("Rate Limit Info:", data);

    return data;
  } catch (error: any) {
    console.error("Error fetching rate limit:", error);
    throw new Error(error.message);
  }
}
