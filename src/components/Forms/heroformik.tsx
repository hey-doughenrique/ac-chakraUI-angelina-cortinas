import * as React from "react";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import { BsWhatsapp } from "react-icons/bs";
import { useRouter } from "next/router";

export default function FormikExample() {
  const { query } = useRouter();

  function validateName(value) {
    let error;
    if (!value) {
      error = "Como devemos te chamar?";
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email inválido. ";
    }
    return error;
  }

  function validatePhone(value) {
    let error;
    if (!value) {
      error = "Verifique o número.";
    }
    return error;
  }

  return (
    <>
      <Formik
        initialValues={{
          // name: "",
          campaignId: query.campaignid,
          adgroupId: query.adgroupid,
        }}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            fetch(`https://hooks.zapier.com/hooks/catch/3660927/bte5w7a/`, {
              method: "POST",
              body: JSON.stringify(values, null, 2),
            }),
              3000;
            // alert(JSON.stringify(values, null, 2))
            // // actions.setSubmitting(false),
            window.location.href = "https://bit.ly/3GkyZzH";
            // window.open(
            //     'https://bit.ly/32BJlNx',
            //     '_blank'
            // )
          });
        }}
      >
        {(props) => (
          <Flex
            alignItems="center"
            flexDirection={["column", "row"]}
            w="100%"
            maxWidth={["100%", "980px"]}
            bg="white"
            mt="8"
            p="8"
            borderRadius={8}
            color="neutral.500"
          >
            <Form id="hero">
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name">Nome</FormLabel>
                    <Input
                      {...field}
                      id="name"
                      placeholder="Digite seu nome"
                      variant="flushed"
                      fontSize="large"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Seu melhor email</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="exemplo@email.com.br"
                      variant="flushed"
                      fontSize="large"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="phone" validate={validatePhone}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.phonel && form.touched.phone}
                  >
                    <FormLabel htmlFor="phone">Telefone</FormLabel>
                    <Input
                      {...field}
                      id="phone"
                      placeholder="(11) 9 9900-9000"
                      variant="flushed"
                      fontSize="large"
                    />
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="campaignid">
                {({ field, form }) => (
                  <FormControl display="none">
                    <Input
                      {...field}
                      type="hidden"
                      id="campaignid"
                      value={props.values.campaignId}
                      readOnly
                      placeholder="CampaignId"
                      variant="flushed"
                      fontSize="large"
                    />
                  </FormControl>
                )}
              </Field>

              <Field name="adgroupid">
                {({ field, form }) => (
                  <FormControl display="none">
                    <Input
                      {...field}
                      type="hidden"
                      id="adgroupid"
                      value={props.values.adgroupId}
                      readOnly
                      placeholder="adgroupId"
                      variant="flushed"
                      fontSize="large"
                    />
                  </FormControl>
                )}
              </Field>

              <Button
                id="submited"
                isLoading={props.isSubmitting}
                type="submit"
                leftIcon={<BsWhatsapp />}
                mt={["6", "0"]}
                minW="auto"
              >
                Atendimento via Whatsapp
              </Button>
            </Form>
          </Flex>
        )}
      </Formik>
    </>
  );
}
