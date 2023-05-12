import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white shadow-md py-2 mb-8">
            <div className="container mx-auto xl:max-w-screen-xl px-4 md:px-0">
                <nav className="flex justify-between">
                    <ul className="flex items-center gap-x-5">
                        <li>
                            <Link className="py-2 block" href="/">خانه</Link>
                        </li>
                        <li>
                            <Link className="py-2 block" href="/blogs">بلاگ ها</Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-x-4">
                        <Link className="py-2 block" href="/profile">پروفایل</Link>
                        <Link className="py-2 block" href="/signIn">ورود</Link>
                        <Link className="py-2 block" href="/signUp">ثبت نام</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;