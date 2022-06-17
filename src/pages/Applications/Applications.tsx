import Loader from "../../components/Loader";
import useApplications from "../../hooks/useApplications";
import AddApplication from "./AddApplication";
import ApplicationItem from "./ApplicationItem";

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
      <ul>
        {applications?.map((application) => (
          <ApplicationItem
            key={application.id}
            application={application}
            onDelete={() => removeApplication(application.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Applications;
