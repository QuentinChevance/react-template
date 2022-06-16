import Loader from "../../components/Loader";
import useApplications from "../../hooks/useApplications";
import AddApplication from "./AddApplication";

const Applications = () => {
  const { applications, isLoading, isError, removeApplication } =
    useApplications();

  if (isLoading) {
    return <Loader value="Chargement des applications..." />;
  }

  if (isError) {
    return (
      <div>Une erreur est survenue lors du chargement des applications...</div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl mb-2 dark:text-slate-50">
        Liste des applications
      </h2>
      <AddApplication />
      <ul className="">
        {applications?.map((application) => (
          <li
            key={application.id}
            className="p-2 rounded hover:text-slate-50 dark:text-slate-50 hover:bg-sky-400 flex justify-between group"
          >
            <div className="flex">
              <img src={application.logo} className="w-7 h-7 mr-2" />
              {application.name}
            </div>
            <button
              className="invisible bg-slate-50 rounded w-7 h-7 group-hover:visible"
              onClick={() => removeApplication(application.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;
