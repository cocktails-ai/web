import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import CodeScanner from './code-scanner'

const engine = new Styletron()

function App() {
  const onNewScanResult = (...args) => {
    console.log(args)
  }
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <CodeScanner fps={10} qrbox={250} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />
      </BaseProvider>
    </StyletronProvider>
  )
}

export default App
