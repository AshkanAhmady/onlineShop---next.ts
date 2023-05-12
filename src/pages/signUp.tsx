import Head from "next/head";
import { LoginHookFormType, RegisterDataType } from "src/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/FormInput";
import Link from "next/link";
import { useForm } from "react-hook-form";

const formSchema = Yup.object().shape({
    name: Yup.string()
        .required("نام و نام خانوداگی را وارد کنید")
        .min(4, "نام کاربری شما باید حداقل 4 کاراکتر باشد"),
    phoneNumber: Yup.string()
        .required("شماره موبایل را وارد کنید")
        .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
        .nullable(),
    email: Yup.string()
        .required("ایمیل را وارد کنید")
        .email("فرمت ایمیل را به درستی وارد کنید"),
    password: Yup.string()
        .required("رمز را وارد کنید")
        .min(4, "رمز شما باید حداقل 4 کاراکتر باشد"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "رمزها مطابقت ندارند")
});

const SingUp = () => {
    const { register, handleSubmit, formState: { errors, isValid } }: LoginHookFormType = useForm({ mode: "onTouched", resolver: yupResolver(formSchema) });

    const onSubmit = (data: RegisterDataType) => {
        console.log(data)
    };

    return (
        <>
            <Head>
                <title>Sing-up</title>
            </Head>
            <div className="md:max-w-md px-4 container mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4" >
                    <h1 className="font-black text-2xl text-violet-700 mb-4">ثبت نام</h1>
                    <Input
                        label="نام و نام خانوادگی"
                        type="text"
                        name="name"
                        error={errors.name?.message}
                        validation={{ ...register("name") }}
                    />
                    <Input
                        label="ایمیل"
                        type="email"
                        name="email"
                        error={errors.email?.message}
                        validation={{ ...register("email") }}
                    />
                    <Input
                        label="شماره موبایل"
                        type="tel"
                        name="phoneNumber"
                        error={errors.phoneNumber?.message}
                        validation={{ ...register("phoneNumber") }}
                    />
                    <Input
                        label="رمز عبور"
                        type="password"
                        name="password"
                        error={errors.password?.message}
                        validation={{ ...register("password") }}
                    />
                    <Input
                        label="تکرار رمز"
                        type="password"
                        name="confirmPassword"
                        error={errors.confirmPassword?.message}
                        validation={{ ...register("confirmPassword") }}
                    />
                    <button disabled={!isValid} type="submit" className="w-full py-2 rounded-lg bg-violet-800 text-white" >ورود</button>
                    <Link className="mt-4 py-4 cursor-pointer" href="/signIn">قبلا ثبت نام کردی؟</Link>
                </form>

            </div>
        </>
    );
}

export default SingUp;