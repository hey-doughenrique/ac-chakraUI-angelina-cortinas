import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import ModalFormik from '../Forms/modalformik'


export function ModalButton({ buttonText, variantType, displayType }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button variant={variantType} display={displayType} onClick={onOpen} >{buttonText}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader as='h2'>Preencha os Dados Abaixo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ModalFormik />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}