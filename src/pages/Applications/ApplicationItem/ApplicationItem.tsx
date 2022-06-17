import Application from "../../../domain/Application";

interface ApplicationItemProps {
  application: Application;
  onDelete: () => void;
}

const ApplicationItem = ({ application, onDelete }: ApplicationItemProps) => {
  return (
    <li className="p-2 rounded hover:text-slate-50 dark:text-slate-50 hover:bg-sky-400 flex justify-between group">
      <div className="flex">
        <img src={application.logo} className="w-7 h-7 mr-2" />
        {application.name}
      </div>
      <button
        className="invisible bg-slate-50 rounded w-7 h-7 group-hover:visible"
        onClick={onDelete}
      >
        ❌
      </button>
    </li>
  );
};

export default ApplicationItem;
