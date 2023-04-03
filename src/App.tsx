import { useState } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Button } from "baseui/button";

const engine = new Styletron();

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className="App">
          <h1>Vite + React</h1>
          <div className="card">
            <Button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
