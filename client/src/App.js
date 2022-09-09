import React, { useEffect, useState } from "react";
import Main from "./component/Main";
import DataProvider from "./GlobalContext";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/Theme";
import BeatLoader from "react-spinners/BeatLoader";

function App(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <BeatLoader
          size={20}
          color={"#8956ff"}
          loading={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <DataProvider>
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
        </DataProvider>
      )}
    </div>
  );
}

export default App;
