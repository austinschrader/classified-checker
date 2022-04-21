import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import Dashboard from "./components/Dashboard";

const theme = createTheme({
  palette: {
    background: {
      default: "#f9f5ea",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
