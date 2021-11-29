import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Box,
    Image,
    Text
} from "@chakra-ui/react"


export default function BasicUsage() {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                <ModalOverlay />
                <ModalContent>
                    <Image src='./images/ac-modal.png' alt='Promoção Angelina Cortinas' />
                </ModalContent>
            </Modal>
        </>
    )
}