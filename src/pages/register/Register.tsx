import NextButton from "@/components/ui/NextButton";
import NextInput from "@/components/ui/NextInput";
import { Switch } from "@heroui/react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { DateInput } from "@heroui/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import GetIcon from "@/components/appcomponents/GetIcon";
import { InputOtp } from "@heroui/input-otp";
import {
  GMAIL_PATTERN,
  INDIAN_PHONE_PATTERN,
  PAN_PATTERN,
} from "./regexPatterns";

function Register() {
  const [step, setStep] = useState<number>(4);
  const {
    setError,
    register,
    formState,
    setValue,
    clearErrors,
    handleSubmit,
    control,
    watch,
  } = useForm();
  const { errors } = formState;
  const [timer, setTimer] = useState<number>(60);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleTimerChange() {
    for (let index = 60; index >= 0; index--) {
      await sleep(1000);
      setTimer(index);
    }
  }

  function handleMobileOtp() {
    setStep(2);
    handleTimerChange();
  }

  function handleRegister(e: any) {
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      handleMobileOtp();
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    } else if (step === 4) {
      setValue("emailVerificationEnabled", false);
      setStep(5);
    }
  }

  function handlePassordChange(value: string) {
    let temp = [
      "password Must Be 9-12 alpha numeical",
      "1 Upper Case",
      "1 Special Letter",
    ];
    if (value.match(/\W/)) {
      temp = temp?.filter((_, index) => index != 2);
    }
    if (/\p{Lu}/u.test(value)) {
      temp = temp?.filter((_, index) => index != 1);
    }

    if (
      value.match(/\W/) &&
      /\p{Lu}/u.test(value) &&
      value?.length >= 9 &&
      value?.length <= 12
    ) {
      temp = [];
    }
    return temp;
  }

  function handleClearError(e: any, field: string, message: string) {
    const value = e?.target?.value;
    setValue(field, value);

    if (value) {
      clearErrors(field);
    } else {
      setError(field, {
        type: "manual",
        message,
      });
    }

    if (field === "panNumber") {
      value.repl;
    }

    if (field === "password1") {
      if (handlePassordChange(watch("password1")).length !== 0) {
        setError("password1", {
          type: "manual",
          message: handlePassordChange(watch("password1")).join(),
        });
      }
    }

    if (field === "password2") {
      if (watch("password1") !== watch("password2")) {
        setError("password2", {
          type: "manual",
          message: "Password does't match",
        });
      }
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] px-8 py-4 flex flex-col">
      <div className="w-full text-2xl  flex items-center  justify-between ">
        <div>
          <img src="umid.png" className=" max-w-[7vw]" />
        </div>
        <div className="text-2xl font-semibold">User Registration</div>
        <div className="flex items-center gap-20 ">
          <img src="railway-logo.png" className="max-w-[4vw]" />
          <img src="railtel-logo.png" className="max-w-[3vw]" />
        </div>
      </div>

      <div className="border w-full rounded-md mt-10 p-6 ">
        <form
          className="flex flex-col gap-14"
          onSubmit={handleSubmit(handleRegister)}
        >
          <Switch
            defaultSelected={false}
            onValueChange={(value) => {
              setValue("retired", value);
            }}
          >
            Retired
          </Switch>
          <div className="flex items-center w-[90vw] gap-10">
            <div className="w-[20vw]">
              <NextInput
                isDisabled={step !== 0}
                className="w-[20vw]"
                {...register("employeeNo", {
                  required: "Please Enter Employee P.P.O / P.F No",
                  disabled: step !== 0,
                })}
                onchange={(e) => {
                  handleClearError(
                    e,
                    "employeeNo",
                    "Please Enter Employee P.P.O / P.F No"
                  );
                }}
                startIcon={true}
                label="Employee P.P.O / P.F No"
                icon="user"
                isRequired={true}
                errorMessage={errors.employeeNo?.message as string}
              />
            </div>

            {!watch("retired") && (
              <div className="w-[20vw]">
                <NextInput
                  isDisabled={step !== 0}
                  className="w-[20vw]"
                  {...register("panNumber", {
                    required: "Please Enter PAN Number",
                    disabled: step !== 0,
                    pattern: PAN_PATTERN,
                  })}
                  onchange={(e) => {
                    handleClearError(e, "panNumber", "Please Enter PAN Number");
                  }}
                  startIcon={true}
                  label="PAN Number"
                  icon="card"
                  isRequired={true}
                  errorMessage={errors.panNumber?.message as string}
                />
              </div>
            )}

            <div className="w-[20vw] flex">
              <Controller
                name="dob"
                control={control}
                disabled={step !== 0}
                rules={{
                  required: "Please Enter Date Of Birth",
                  onChange(event) {
                    handleClearError(
                      event,
                      "dob",
                      "Please Enter Date Of Birth"
                    );
                  },
                }}
                render={({ field }) => (
                  <DateInput
                    isDisabled={step !== 0}
                    {...field}
                    startContent={<GetIcon icon="calender" />}
                    isInvalid={
                      ((errors?.dob?.message as string) ?? "").length > 0
                    }
                    errorMessage={errors?.dob?.message as string}
                    label={
                      <div className="flex items-center ml-1">
                        {"Date Of birth"}{" "}
                        <GetIcon
                          icon="star"
                          className="text-destructive w-1 h-1 ml-1 "
                        />
                      </div>
                    }
                    placeholderValue={new CalendarDate(1995, 11, 6)}
                  />
                )}
              />
            </div>
          </div>
          {step != 0 && (
            <div className="flex  w-[90vw] gap-10">
              <div className="w-[20vw]">
                <NextInput
                  className="w-[20vw]"
                  isDisabled={step !== 0}
                  startIcon={true}
                  label="Employee Name"
                  icon="user"
                  value="Shaik Afrid"
                  isRequired={true}
                />
              </div>

              <div className=" gap-10 flex   flex-col   ">
                <div className="flex items-center gap-5 ">
                  <div>
                    <NextInput
                      isDisabled={step >= 2}
                      {...register("mobileNumber", {
                        required: "Please enter Mobile Number",
                        disabled: step >= 2,
                        pattern: INDIAN_PHONE_PATTERN,
                      })}
                      onchange={(e) => {
                        handleClearError(
                          e,
                          "mobileNumber",
                          "Please enter Mobile Number"
                        );
                      }}
                      className="w-[20vw]"
                      startIcon={true}
                      label="Mobile Number"
                      icon="call"
                      errorMessage={errors?.mobileNumber?.message as string}
                      isRequired={true}
                    />
                  </div>

                  {watch("emailVerificationEnabled") && (
                    <div>
                      <NextInput
                        isDisabled={step === 5}
                        {...register("emailId", {
                          required: "Please enter Email Id",
                          disabled: step === 5,
                          pattern: GMAIL_PATTERN,
                        })}
                        onchange={(e) => {
                          handleClearError(
                            e,
                            "emailId",
                            "Please enter Email Id"
                          );
                        }}
                        className="w-[20vw]"
                        startIcon={true}
                        label="Email Id"
                        icon="email"
                        errorMessage={errors?.emailId?.message as string}
                        isRequired={true}
                      />
                    </div>
                  )}

                  <div className="relative">
                    {(step === 1 ||
                      (step === 3 && watch("emailVerificationEnabled"))) && (
                      <NextButton type="submit" className="h-8 rounded-3xl">
                        Send Otp
                      </NextButton>
                    )}
                    {(step === 2 ||
                      (step == 4 && watch("emailVerificationEnabled"))) && (
                      <div className="flex flex-col gap-2">
                        <InputOtp
                          {...register(step == 2 ? "mobileOtp" : "emailOtp", {
                            required: `Please enter ${step == 2 ? "Mobile Otp" : "Email otp"} `,
                          })}
                          onChange={(e) => {
                            handleClearError(
                              e,
                              step == 2 ? "mobileOtp" : "emailOtp",
                              `Please enter ${step == 2 ? "Mobile Otp" : "Email otp"} `
                            );
                          }}
                          errorMessage={errors?.mobileOtp?.message as string}
                          isInvalid={
                            ((errors?.mobileOtp?.message as string) ?? "")
                              .length > 0
                          }
                          label="OTP input field for"
                          length={4}
                          name="otp"
                          placeholder="Enter code"
                          validationBehavior="native"
                        />
                        {(step == 2 ||
                          (step == 4 && watch("emailVerificationEnabled"))) && (
                          <div className="relative">
                            <div className="flex flex-col gap-3 items-center absolute ">
                              <div className="flex items-center gap-6">
                                <NextButton
                                  className="h-8 rounded-3xl"
                                  type="submit"
                                >
                                  verify Otp
                                </NextButton>
                                <NextButton
                                  isDisabled={timer !== 0}
                                  className="h-8 rounded-3xl"
                                >
                                  Resend Otp
                                </NextButton>
                              </div>

                              {timer !== 0 && (
                                <div>
                                  <div>
                                    Resend Otp In{" "}
                                    <span className="text-destructive font-semibold">
                                      {" "}
                                      {timer}
                                    </span>{" "}
                                    Seconds
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {(step === 3 ||
                      (step === 4 && watch("emailVerificationEnabled"))) && (
                      <div>
                        <div className="absolute  -top-10 ">
                          <Switch
                            className="flex items-center gap-1 text-nowrap "
                            onValueChange={(value) => {
                              if (!value) {
                                setStep(3);
                              }
                              setTimer(60);
                              setTimeout(() => {
                                setValue("emailVerificationEnabled", value);
                                handleTimerChange();
                              }, 200);
                            }}
                            defaultSelected={false}
                          >
                            <GetIcon icon="email" /> Email verification
                          </Switch>
                        </div>
                        {watch("emailVerificationEnabled") && <div></div>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {(step === 3 || step === 4 || step === 5) && (
            <div className="flex w-[90vw] gap-10">
              <div className="w-[20vw]">
                <NextInput
                  isDisabled={watch("emailVerificationEnabled")}
                  className="w-[20vw]"
                  {...register("userId", {
                    required: "Please Enter User Id",
                    disabled: watch("emailVerificationEnabled"),
                  })}
                  onchange={(e) => {
                    handleClearError(e, "userId", "Please Enter User Id");
                  }}
                  startIcon={true}
                  label="User Id"
                  icon="user"
                  isRequired={true}
                  errorMessage={errors?.userId?.message as string}
                />
              </div>
              <div className="w-[20vw]">
                <NextInput
                  isDisabled={
                    watch("emailVerificationEnabled") || !watch("userId")
                  }
                  className="w-[20vw]"
                  {...register("password1", {
                    required: "Please Enter Password",
                    disabled:
                      watch("emailVerificationEnabled") || !watch("userId"),
                  })}
                  onchange={(e) => {
                    handleClearError(e, "password1", "Please Enter Password");
                  }}
                  startIcon={true}
                  label="Password"
                  icon="user"
                  isRequired={true}
                  errorMessage={errors?.password1?.message as string}
                />
              </div>

              <div className="w-[20vw]">
                <NextInput
                  isDisabled={
                    watch("emailVerificationEnabled") || !watch("password1")
                  }
                  className="w-[20vw]"
                  {...register("password2", {
                    required: "Please Re Enter Password",
                    disabled:
                      watch("emailVerificationEnabled") || !watch("password1"),
                  })}
                  onchange={(e) => {
                    handleClearError(
                      e,
                      "password2",
                      "Please Re Enter Password"
                    );
                  }}
                  startIcon={true}
                  label="Re Enter Password"
                  icon="card"
                  isRequired={true}
                  errorMessage={errors?.password2?.message as string}
                />
              </div>
              <div>
                <NextButton
                  type="submit"
                  className=" px-20 text-xl "
                  size="lg"
                  isDisabled={watch("emailVerificationEnabled")}
                >
                  Register
                </NextButton>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center w-full mt-10">
            {step === 0 && (
              <NextButton className="px-10" size="lg" type="submit">
                {"Validate Details"}
              </NextButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
