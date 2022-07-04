// hooks
import { useContext, useEffect, useState } from "react";

// components
import IssueItem from "./IssueItem";

// others
import { GithubIssuesContext } from "../store/GithubIssuesContext";
import useGetGithub from "../utils/useGetGithub";

// the component
const IssueList = () => {
  const { state } = useContext(GithubIssuesContext);

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);
  const [error, setError] = useState(null);

  // handle submit
  const [status, getData] = useGetGithub(state);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      if (!noData && state.user && state.repo) {
        loadList(page);
      }
    }
  };

  const [isOngoing, setIsOngoing] = useState(false);
  const loadList = async (page) => {
    if (isOngoing) return;
    setIsOngoing(true);
    const data = await getData(page);

    if (data.error) return setError(data.error);

    if (data.data.length === 0) return setNoData(true);

    setPage((old) => old + 1);
    setList((old) => [...old, ...data.data]);
    setIsOngoing(false);
  };

  useEffect(() => {
    // do nothing if no user or repo
    if (!state.user && !state.repo) return;

    // if they changed, reset the main variables
    setList([]);
    setPage(1);
    setNoData(false);
    setError(null);

    // work on the data
    loadList(1);
  }, [state.user, state.repo]);

  return (
    <section>
      {list.map((item, i) => (
        <IssueItem key={item.id} data={item} index={i} />
      ))}
      {noData && <p className="full-width">No more data to be loaded!</p>}
      {status === "pending" && (
        <div className="full-width">
          <div className="spinner">
            <div></div>
          </div>
        </div>
      )}
      {error && <p className="full-width error">{error}</p>}
    </section>
  );
};

export default IssueList;
