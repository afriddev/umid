import GetIcon from "@/components/appcomponents/GetIcon";
import NextButton from "@/components/ui/NextButton";
import NextInput from "@/components/ui/NextInput";
import { Form } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";

function Home() {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
    console.log("Form Data:", e.target.email.value, e.target.password.value);
  }
  return (
    <div>
      <Toaster />
      <div className="p-10 ">
        <Form onSubmit={handleSubmit}
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
            startIcon={true}
          />
          <div>
            <NextInput
              label="password"
              placeholder="Please enter password"
              labelPlacement="inside"
              variant="bordered"
              errorMessage="please enter a valid password"
              type="password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              minLength={8}
              maxLength={15}  
              isRequired={true}
              isDisabled={false}
              startIcon={true}
            />
          </div>
          <div>
            <GetIcon icon="org" />
          </div>


          <NextButton type="submit" color="primary" variant="solid">
            Submit
          </NextButton>
        </Form>
      </div>
    </div>
  );
}
export default Home;

// import { FC, useState } from 'react';
// import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';

// interface ValidatedInputProps {
//   placeholder?: string;
//   onSubmit?: (value: string) => void;
// }

// const ValidatedInput: FC<ValidatedInputProps> = ({ placeholder = "Enter text", onSubmit }) => {
//   const [value, setValue] = useState<string>("");
//   const [isValid, setIsValid] = useState<boolean | null>(null);

//   const handleSubmit = () => {
//     if (value.trim() === "") {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       onSubmit?.(value);
//     }
//   };

//   return (
//     <div className="flex flex-col items-start space-y-2">
//       <div className="relative w-full">
//         <input
//           type="text"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//           placeholder={placeholder}
//           value={value}
//           onChange={(e) => {
//             setValue(e.target.value);
//             setIsValid(null); // Reset validity on change
//           }}
//         />
//         <div className="absolute inset-y-0 right-3 flex items-center">
//           {isValid === true && <IoCheckmarkCircle className="text-green-500 text-xl" />}
//           {isValid === false && <IoCloseCircle className="text-red-500 text-xl" />}
//         </div>
//       </div>
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default ValidatedInput;
