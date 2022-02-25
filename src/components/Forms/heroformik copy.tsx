import { Button, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import { useRouter } from "next/router";

export default function FormikExample() {
  const { query } = useRouter();

  return (
    <>
      <Formik
        initialValues={
          {
            // campaignid: " ",
          }
        }
        onSubmit={(values) => {
          setTimeout(() => {
            console.log(values);
          });
        }}
      >
        {(props) => (
          <Form>
            <Field name="campaignid">
              <Input value={query.campaignid} />
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
