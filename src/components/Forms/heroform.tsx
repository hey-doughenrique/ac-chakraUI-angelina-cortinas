import { Flex, FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react"
import { BsWhatsapp } from 'react-icons/bs';

import React, { useState } from 'react'

import Script from 'next/script'


export function HeroForm() {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')


    const [adgroupid, setAdgroupid] = useState('')
    const [campaignid, setCampaignid] = useState('')

    const [isSent, setIsSent] = useState(false)

    const submit = e => {
        e.preventDefault()
        fetch(`https://hooks.zapier.com/hooks/catch/3660927/bte5w7a/`, {
            method: 'POST',
            body: JSON.stringify({ name, mail, phone, adgroupid, campaignid }),
        }).then(() => setIsSent(true)).catch(() => alert("There was an error, please try again"))
        // window.location.href = "http://strides.digital"
    }

    return (
        <>

            <Script src="https://cdn.jsdelivr.net/gh/gkogan/sup-save-url-parameters/sup.min.js" />
            <Flex
                as="form"
                action="https://hooks.zapier.com/hooks/catch/8297333/btlja79/"
                method="post"
                onSubmit={submit}

                alignItems='center'
                flexDirection={["column", "row"]}
                w="100%"
                maxWidth={["100%", "980px"]}
                bg="white"
                mt="8"
                p="8"
                borderRadius={8}
                color="neutral.500"

            >
                <FormControl id="email">
                    <FormLabel>Nome</FormLabel>
                    <Input
                        name="name"
                        type="text"
                        label="Nome"
                        placeholder="Digite seu nome"
                        onChange={e => setName(e.target.value)}

                        variant="flushed"
                        fontSize="large"
                    />

                </FormControl>
                <FormControl id="email">
                    <FormLabel>Seu melhor email</FormLabel>
                    <Input
                        name="email"
                        type="mail"
                        placeholder="exemplo@email.com.br"
                        label="E-mail"
                        onChange={e => setMail(e.target.value)}

                        variant="flushed"
                        fontSize="large"
                    />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Telefone</FormLabel>
                    <Input
                        name="phone"
                        type="number"
                        placeholder="(11) 9 9900-9000"
                        label="Telefone"
                        onChange={e => setPhone(e.target.value)}

                        variant="flushed"
                        fontSize="large"
                    />
                </FormControl>
                <FormControl display="none" id="adgroupid">
                    <Input
                        name="adgroupid"
                        type="hidden"

                        onChange={e => setAdgroupid(e.target.value)}
                    />
                </FormControl>
                <FormControl display="none" id="campaignid">
                    <Input
                        name="campaignid"
                        type="text"

                        onChange={e => setCampaignid(e.target.value)}
                    />
                </FormControl>
                <Button
                    id="submited"
                    type="submit"

                    variant={isSent ? "successful" : "solid"}
                    leftIcon={<BsWhatsapp />}

                    mt={["6", "0"]}
                    minW='auto'
                    p='2rem'

                >
                    {isSent ? 'Atendimento solicitado!' : 'Atendimento via Whatsapp'}
                </Button>
            </Flex>
        </>
    )
}