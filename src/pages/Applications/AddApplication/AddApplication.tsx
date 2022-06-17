import { useState } from "react";
import useApplications from "../../../hooks/useApplications";
import Input from "./Input";

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
        id: applications ? Date.now() : 0, // the Id generation should be done on the server but in our case, we generate it on the front
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
        <Input
          value={form.appName}
          onChange={handleChangeAppName}
          placeHolder="Nom de l'application"
        />
        <Input
          value={form.appLogo}
          onChange={handleChangeAppLogo}
          placeHolder="Url du logo"
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
