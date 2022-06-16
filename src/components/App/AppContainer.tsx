import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { DarkModeProvider } from "../../contexts/DarkModeContext";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minutes
    },
  },
});

const AppContainer = () => {
  const renderReactQueryDevTools = () => {
    if (import.meta.env.DEV) {
      return <ReactQueryDevtools initialIsOpen={false} />;
    }
  };
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
      {renderReactQueryDevTools()}
    </QueryClientProvider>
  );
};

export default AppContainer;
