import "./styles.css";

// components
import Form from "./components/Form";
import IssueList from "./components/IssueList";

// others
import { GithubIssuesProvider } from "./store/GithubIssuesContext";

export default function App() {
  return (
    <GithubIssuesProvider>
      <div className="subcontainer from-container">
        <Form />
      </div>
      <div className="subcontainer issue-container">
        <IssueList />
      </div>
    </GithubIssuesProvider>
  );
}
