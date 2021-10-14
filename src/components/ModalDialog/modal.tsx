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
} from "@chakra-ui/react"
import { ModalForm } from "../Forms/modalform"


export function ModalButton({ buttonText, variantType, displayType, sizeType }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button variant={variantType} display={displayType} size={sizeType} onClick={onOpen} >{buttonText}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader as="h2">Preencha os Dados Abaixo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ModalForm />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}