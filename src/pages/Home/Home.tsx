import { Link } from "react-router-dom";
import useApplications from "../../hooks/useApplications";

const Home = () => {
  const { prefetchApplications } = useApplications(false);

  return (
    <>
      <Link
        to="applications"
        className="text-3xl font-bold underline"
        onMouseEnter={prefetchApplications}
      >
        Pour consulter la liste des applications, cliquer.
      </Link>
    </>
  );
};

export default Home;
