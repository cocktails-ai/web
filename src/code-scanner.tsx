import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect } from 'react'

type Props = {
  fps?: number
  qrbox?: number
  disableFlip?: boolean
  qrCodeSuccessCallback?: (c: string) => void
  qrCodeErrorCallback?: () => void
  aspectRatio?: any
  verbose?: boolean
}

const qrcodeRegionId = 'html5qr-code-full-region'

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props: Props) => {
  let config: any = {}
  if (props.fps) {
    config.fps = props.fps
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip
  }
  return config
}

const CodeScanner = (props: Props) => {
  useEffect(() => {
    // when component mounts
    const config = createConfig(props)
    const verbose = props.verbose === true
    // Suceess callback is required.
    if (!props.qrCodeSuccessCallback) {
      throw 'qrCodeSuccessCallback is required callback.'
    }
    const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose)
    html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback)

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch(error => {
        console.error('Failed to clear html5QrcodeScanner. ', error)
      })
    }
  }, [])

  return <div id={qrcodeRegionId} />
}

export default CodeScanner
