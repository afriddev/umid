import NextButton from "@/components/ui/NextButton";
import NextInput from "@/components/ui/NextInput";
import { Form } from "@nextui-org/react";

function Home() {
  return (
    <div>
      <div className="p-10 ">
        <Form
          validationBehavior="native"
          className="pt-10 flex flex-col gap-6  "
        >
          <NextInput
            isRequired={true}
            label="Email Id"
            placeholder="Please enter Email Id"
            name={"email"}
            type="email"
            errorMessage="please enter a valid Email"
          />
          <NextInput
            label="password"
            placeholder="Please enter password"
            labelPlacement="inside"
            variant="bordered"
            errorMessage="please enter a valid password"
            type="text"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            minLength={8}
            maxLength={15}
            isRequired={true}
            isDisabled={false}
            startIcon={true}
          />

          <NextButton type="submit" color="primary" variant="solid">
            Submit
          </NextButton>
        </Form>
      </div>
    </div>
  );
}
export default Home;
