import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

import React, { useState } from 'react'

import Script from 'next/script'


export function HeroForm() {
    const submit = e => {
        e.preventDefault()
        fetch(`https://hooks.zapier.com/hooks/catch/3660927/bte5w7a/`, {
            method: 'POST',
            body: JSON.stringify({ name, mail, phone, adgroupid, campaignid }),
        }).then(() => setIsSent(true)).catch(() => alert("There was an error, please try again"))
    }


    const [isSent, setIsSent] = useState(false)

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')


    const [adgroupid, setAdgroupid] = useState('0')
    const [campaignid, setCampaignid] = useState('')



    return (
        <>
            <Script src="https://cdn.jsdelivr.net/gh/gkogan/sup-save-url-parameters/sup.min.js" />
            <Flex
                as="form"
                action="https://hooks.zapier.com/hooks/catch/8297333/btlja79/"
                method="post"
                onSubmit={submit}

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
                        fontFamily="DM Sans"
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
                        fontFamily="DM Sans"
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
                        fontFamily="DM Sans"
                        fontSize="large"
                    />
                </FormControl>
                <FormControl id="adgroupid">
                    <Input
                        name="adgroupid"
                        type="text"

                        onChange={e => setAdgroupid(e.target.value)}
                    />
                </FormControl>
                <FormControl id="campaignid">
                    <Input
                        name="campaignid"
                        type="text"

                        onChange={e => setCampaignid(e.target.value)}
                    />
                </FormControl>
                <Button type="submit" size="md" variant={isSent ? "successful" : "solid"} mt={["5", "0"]} >{isSent ? 'Atendimento solicitado!' : 'Iniciar Atendimento'}</Button>
            </Flex>
        </>
    )
}