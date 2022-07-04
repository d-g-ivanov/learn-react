// will not work to display comments
export const USE_MOCK = false;
export const GITHUB_ISSUES_URL =
  "https://api.github.com/repos/{user}/{repo}/issues";
export const GITHUB_ISSUES_PARAMS = { state: "open", per_page: 100 };
export const GITHUB_ISSUES_KEEP = [
  "id",
  "number",
  "title",
  "assignee",
  "assignees",
  "comments",
  "comments_url",
  "html_url",

  "login",
  "avatar_url",
  "updated_at",
  "created_at"
];
export const SET_MULTIPLE_ASSUGNEES = false;
