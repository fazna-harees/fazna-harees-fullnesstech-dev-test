import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import Router from './utils/routes';
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Router/>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
