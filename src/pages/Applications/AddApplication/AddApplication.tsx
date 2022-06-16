import { useState } from "react";
import useApplications from "../../../hooks/useApplications";

const DEFAULT_FORM = {
  appName: "",
  appLogo: "",
};

const AddApplication = () => {
  const resetForm = () => {
    setForm(DEFAULT_FORM);
    setShouldDisplayForm(false);
  };
  const { applications, addApplication } = useApplications(true, resetForm);
  const [shouldDisplayForm, setShouldDisplayForm] = useState(false);
  const [form, setForm] = useState(DEFAULT_FORM);

  const isFormValid =
    Object.values(form).find((value) => value.length === 0) === undefined;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      addApplication({
        name: form.appName,
        logo: form.appLogo,
        id: applications ? applications.length + 1 : 0,
      });
    }
  };

  const handleChangeAppName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((currForm) => ({ ...currForm, appName: event.target.value }));
  };

  const handleChangeAppLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((currForm) => ({ ...currForm, appLogo: event.target.value }));
  };

  if (!shouldDisplayForm) {
    return (
      <button
        onClick={() => setShouldDisplayForm(true)}
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Ajouter une application
      </button>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={form.appName}
          onChange={handleChangeAppName}
          placeholder="Nom de l'application"
          type="text"
          required
          className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          value={form.appLogo}
          onChange={handleChangeAppLogo}
          placeholder="Url du logo"
          type="text"
          required
          className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={!isFormValid}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Valider
        </button>
      </form>
    </div>
  );
};

export default AddApplication;
