import Router from "./Router";
import { GlobalStyles } from "./common/styles/GlobalStyles";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
