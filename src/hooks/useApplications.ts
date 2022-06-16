import { useMutation, useQuery } from "react-query";
import { queryClient } from "../components/App/AppContainer";
import Application from "../domain/Application";

const fetchApplications = async () => {
  const res = await fetch("/api/applications.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (await res.json()) as Application[];
};

/**
 * Simulate a POST method to add an application
 * @param application Application à ajouter
 * @returns Promise qui resolve avec le contenu de l'application ajoutée
 */
const postApplication = (application: Application) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(application);
    }, 1000);
  });

/**
 * Simulate a DELETE method to remove an application
 * @param applicationId Id of the application to delete
 * @returns Promise that resolves with de id of the removed application
 */
const deleteApplication = (applicationId: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(applicationId);
    }, 1000);
  });

const QUERY_ID = "applications";

const useApplications = (enabled = true, mutationCallback?: () => void) => {
  const query = useQuery(QUERY_ID, fetchApplications, { enabled });
  const postMutation = useMutation(postApplication, {
    onMutate: async (application) => {
      mutationCallback && mutationCallback();
      await queryClient.cancelQueries(QUERY_ID);

      const previousApplications = queryClient.getQueryData(QUERY_ID);
      queryClient.setQueryData(
        QUERY_ID,
        (oldApplications: Application[] | undefined) => {
          return oldApplications
            ? [...oldApplications, application]
            : [application];
        }
      );
      return { previousApplications };
    },
    onError: (err, _, context) => {
      if (context) {
        queryClient.setQueryData(QUERY_ID, context.previousApplications);
      }
    },
  });

  const deleteMutation = useMutation(deleteApplication, {
    onMutate: async (applicationId: number) => {
      mutationCallback && mutationCallback();
      await queryClient.cancelQueries(QUERY_ID);

      const previousApplications = queryClient.getQueryData(QUERY_ID);
      queryClient.setQueryData(
        QUERY_ID,
        (oldApplications: Application[] | undefined) => {
          if (oldApplications) {
            return [...oldApplications].filter(
              (application) => application.id !== applicationId
            );
          }
          return [];
        }
      );
      return { previousApplications };
    },
    onError: (err, _, context) => {
      if (context) {
        queryClient.setQueryData(QUERY_ID, context.previousApplications);
      }
    },
  });

  const prefetchApplications = async () => {
    await queryClient.prefetchQuery(QUERY_ID, fetchApplications);
  };

  /**
   * Adds an application to the list of applications with optimistic rendering
   * @param application Application to add to the list
   */
  const addApplication = (application: Application) => {
    postMutation.mutate(application);
  };

  /**
   * Removes an application from the list by its Id with optimistic rendering
   * @param applicationId Id of the application
   */
  const removeApplication = (applicationId: number) => {
    deleteMutation.mutate(applicationId);
  };

  return {
    ...query,
    applications: query.data,
    prefetchApplications,
    addApplication,
    removeApplication,
  };
};

export default useApplications;
