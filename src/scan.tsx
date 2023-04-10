import { useEffect, useState } from 'react'
import CodeScanner from './code-scanner'
import useData from './hooks/use-data'

type Props = {
  onProduct: (product: string) => void
}

const URL = 'https://cocktails-ewguxkvnaa-uc.a.run.app/barcodes'

type Response = {
  product_name: string
}

// Scan code and request data
export default function Scan({ onProduct }: Props) {
  const [barcode, setBarcode] = useState('')
  const body = { barcode }
  const { data, loading, error, call } = useData<Response>(URL, body, [])

  useEffect(() => {
    if (barcode) {
      call()
    }
  }, [barcode])

  const title = data?.product_name
  useEffect(() => {
    if (title) {
      onProduct(title)
    }
  }, [title])

  const onNewScanResult = (barcode: string) => {
    setBarcode(barcode)
  }

  if (loading) {
    return <div>Searching for barcode</div>
  }

  if (error) {
    return <div>{error.toString()}</div>
  }

  return (
    <CodeScanner fps={10} qrbox={250} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />
  )
}
