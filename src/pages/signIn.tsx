import Head from "next/head";
import { LoginDataType, LoginHookFormType } from "src/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/FormInput";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
// import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignIn } from "src/redux/user/actions";

const formSchema = Yup.object().shape({
    email: Yup.string()
        .required("ایمیل را وارد کنید")
        .email("فرمت ایمیل را به درستی وارد کنید"),
    password: Yup.string()
        .required("رمز را وارد کنید")
});

const SingIn = () => {
    const { register: login, handleSubmit, formState: { errors, isValid } }: LoginHookFormType = useForm({ mode: "onTouched", resolver: yupResolver(formSchema) });
    const router = useRouter()
    const dispatch: any = useDispatch()
    const { user } = useSelector((state: any) => state.userSignIn)

    useEffect(() => {
        if (user) router.push("/")
    }, [user])

    const onSubmit = (data: LoginDataType) => {
        dispatch(userSignIn(data))
    };

    return (
        <>
            <Head>
                <title>Sing-In</title>
            </Head>
            <div className="md:max-w-md px-4 container mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4" >
                    <h1 className="font-black text-2xl text-violet-700 mb-4">ورود</h1>
                    <Input
                        label="ایمیل"
                        type="email"
                        name="email"
                        error={errors.email?.message}
                        validation={{ ...login("email") }}
                    />
                    <Input
                        label="رمز عبور"
                        type="password"
                        name="password"
                        error={errors.password?.message}
                        validation={{ ...login("password") }}
                    />
                    <button disabled={!isValid} type="submit" className="w-full py-2 rounded-lg bg-violet-800 text-white" >ورود</button>
                    <Link className="mt-4 py-4 cursor-pointer" href="/signUp">هنوز ثبت نام نکردی؟</Link>
                </form>

            </div>
        </>
    );
}

export default SingIn;