import NextInput from "@/components/ui/NextInput";

function Login() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-[30vw] h-[50vh] p-4    border ">
        <div className="flex flex-col ">
          <NextInput icon="user" startIcon={true} label="User Name" />
          <NextInput icon="user" startIcon={true} label="User Name" />
        </div>
      </div>
    </div>
  );
}
export default Login;
