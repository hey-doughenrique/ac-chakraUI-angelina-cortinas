import { Button, FormControl, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import Script from "next/script";

export default function FormikExample() {
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
          <Form id="hero">
            <Field name="name">
              <FormControl>
                {({ field }) => <Input {...field} type="text" id="name" />}
              </FormControl>
            </Field>

            <Field name="email">
              <FormControl>
                {({ field }) => <Input {...field} type="email" id="email" />}
              </FormControl>
            </Field>

            <Field name="campaignid">
              {({ field }) => (
                <FormControl isReadOnly>
                  <Input {...field} type="hidden" value="" id="campaignid" />
                </FormControl>
              )}
            </Field>

            <Button id="submited" isLoading={props.isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
