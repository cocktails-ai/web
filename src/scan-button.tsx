import { useState } from 'react'
import { Button } from 'baseui/button'
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from 'baseui/modal'
import CameraIcon from './camera-icon'
import CodeScanner from './code-scanner'
import Scan from './scan'

type Props = {
  onProduct: (product: string) => void
}

export default function ScanButton({ onProduct }: Props) {
  const [isOpen, setIsOpen] = useState(true)

  const close = () => setIsOpen(false)

  const handleProduct = (title: string) => {
    onProduct(title)
    close()
  }

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        <CameraIcon />
      </Button>

      <Modal
        onClose={close}
        closeable
        isOpen={isOpen}
        animate
        autoFocus
        size={SIZE.default}
        role={ROLE.dialog}>
        <ModalBody>
          <Scan onProduct={handleProduct} />
        </ModalBody>
        <ModalFooter>
          <ModalButton kind="secondary" onClick={close}>
            Cancel
          </ModalButton>
        </ModalFooter>
      </Modal>
    </>
  )
}
