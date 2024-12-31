
import NextInput from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { Form, Button, Input } from "@nextui-org/react";

function Home() {

  const { register, handleSubmit, } = useForm();


  return <div>Hello world


    <div className="p-10 bg-slate-400">

      <Form validationBehavior="native" className="pt-10 bg-slate-400 ">
        <Input required label="Email" type="email"
          name="email"
        />
        <NextInput
          label="password"
          labelPlacement="inside"
          variant="bordered"
          errorMessage="please enter a valid password"
          type="text"
          name="password"

          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"

          minLength={8}
          maxLength={8}
          isRequired={true}
          isDisabled={false}
          startIcon={true}
        />

        <NextInput
          label="password"
          labelPlacement="outside"
          variant="bordered"
          errorMessage="please enter a valid password"
          type="text"
          name="password"
          placeholder="Enter your password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"

          minLength={8}
          maxLength={8}
          isRequired={true}
          isDisabled={false}
          startIcon={true}
        />


        <Button type="submit" color="primary" variant="solid">
          Submit
        </Button>
      </Form>
    </div>


    <Form validationBehavior="native" className="pt-10" onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <Input

          placeholder="Enter your userId"
          {...register('userId', {
            required: 'userId is required',
            pattern: {
              value: /^[a-zA-Z0-9]*$/,
              message: 'userId can only contain alphanumeric characters',
            },
          })}
          required

          label="userId"
          labelPlacement="outside"
          name="userId"
          type="text"
        />
        {/* {errors.userId && <p className=' text-red-600'>{errors.userId.message}</p>} */}
      </div>

      <Button type="submit" color="primary" variant="solid">
        Submit
      </Button>
    </Form>
  </div>;
}
export default Home;
