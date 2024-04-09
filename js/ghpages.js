// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: "YOUR-TOKEN",
});

await octokit.request("POST /repos/{owner}/{repo}/pages", {
  owner: "OWNER",
  repo: "REPO",
  source: {
    branch: "main",
    path: "/docs",
  },
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
