import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'
import CodeScanner from './code-scanner'
import Drinks from './drinks'

const engine = new Styletron()

function App() {
  const onNewScanResult = (...args) => {
    console.log(args)
  }
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Drinks />
      </BaseProvider>
    </StyletronProvider>
  )
}
//<CodeScanner fps={10} qrbox={250} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />

export default App
