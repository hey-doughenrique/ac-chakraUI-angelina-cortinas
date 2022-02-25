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

import Script from "next/script";

export default function FormikForm() {
  function validateName(value) {
    let error;
    if (!value) {
      error = "Type a valid name.";
    }
    return error;
  }

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/gh/gkogan/sup-save-url-parameters/sup.min.js" />

      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => {
          setTimeout(() => {
            fetch(`https://hooks.zapier.com/hooks/catch/3660927/bte5w7a/`, {
              method: "POST",
              body: JSON.stringify(values, null, 2),
            }),
              3000;
          });
        }}
      >
        {(props) => (
          <Flex>
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
                      onChange={(e) => {
                        e.preventDefault();
                      }}
                      onBlur={(e) => {
                        e.preventDefault();
                      }}
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="campaignid">
                {({ field }) => (
                  <FormControl isReadOnly>
                    <Input {...field} type="hidden" id="campaignid" />
                  </FormControl>
                )}
              </Field>

              <Button
                id="submited"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Flex>
        )}
      </Formik>
    </>
  );
}
