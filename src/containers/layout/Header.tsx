import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const Header = () => {
    const { userContext, setUserContext } = useAuth()

    return (
        <header className="bg-white shadow-md py-2 mb-4 md:mb-8 sticky top-0 z-40">
            <div className={`container mx-auto xl:max-w-screen-xl duration-150 ${userContext.loading ? "opacity-0" : "opacity-100"}`}>
                <nav className="flex justify-between">
                    <ul className="flex items-center gap-x-5">
                        <li>
                            <Link className="py-2 block" href="/">خانه</Link>
                        </li>
                        <li>
                            <Link className="py-2 block" href="/blogs">وبلاگ</Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-x-4">
                        {
                            userContext.user
                                ? <>
                                    <button onClick={() => setUserContext({ type: "SIGNOUT" })} className="bg-red-400 px-2 py-1 rounded-lg text-white">خروج</button>
                                    <Link className="py-2 block" href="/profile">پروفایل</Link>
                                </>
                                : <>
                                    <Link className="py-2 block" href="/signIn">ورود</Link>
                                    <Link className="py-2 block" href="/signUp">ثبت نام</Link>
                                </>
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;