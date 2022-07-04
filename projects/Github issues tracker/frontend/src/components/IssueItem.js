import Tooltip from "./Tooltip";
import BubbleButton from "./BubbleButton";
import Avatar from "./Avatar";

import { SET_MULTIPLE_ASSUGNEES } from "../config";

// helper
const setMultiple = (shouldSet) => {
  if (!shouldSet) return [];

  return [
    {
      login: "no assignee",
      html_url: "#/",
      avatar_url:
        "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png"
    },
    {
      login: "no assignee",
      html_url: "#/",
      avatar_url:
        "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png"
    },
    {
      login: "no assignee",
      html_url: "#/",
      avatar_url:
        "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png"
    }
  ];
};

// the component
const IssueItem = ({ data, index }) => {
  const assigneeAvatar = data.assignee ||
    data.assignees[0] || {
      login: "no assignee",
      html_url: "#/"
    };

  const assignees = data.assignees.length
    ? data.assignees.filter((a) => a.login !== assigneeAvatar.login)
    : setMultiple(SET_MULTIPLE_ASSUGNEES);

  return (
    <article>
      <div className="index">{index + 1}</div>
      <div className="avatar">
        <Avatar person={assigneeAvatar} />
      </div>
      <div className="body">
        <h5>
          <Tooltip
            text={
              "Created: " +
              new Date(data.created_at).toLocaleString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric"
              }) +
              "\n\nUpdated: " +
              new Date(data.updated_at).toLocaleString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric"
              }) +
              "\n\nClick to go to issue."
            }
          >
            <a href={data.html_url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </Tooltip>
        </h5>
        <span>
          <Tooltip
            doNotRender={assigneeAvatar.html_url === "#/"}
            text={`Go see ${assigneeAvatar.login}'s profile.`}
          >
            <a
              href={assigneeAvatar.html_url}
              target={assigneeAvatar.html_url === "#/" ? "" : "_blank"}
              rel="noreferrer"
            >
              {assigneeAvatar.login}
            </a>
          </Tooltip>
        </span>
        {assignees.length > 0 && (
          <span className="other-assignees">
            | Others:{" "}
            {assignees.map((a, i) => (
              <a
                key={i}
                href={a.html_url}
                title={a.login}
                target="_blank"
                rel="noreferrer"
              >
                <Avatar person={assigneeAvatar} />
              </a>
            ))}
          </span>
        )}

        <BubbleButton num={data.comments} url={data.comments_url} />
      </div>
    </article>
  );
};

export default IssueItem;
