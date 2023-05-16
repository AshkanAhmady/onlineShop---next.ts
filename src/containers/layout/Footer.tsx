import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full py-3 bg-gray-300">
            <p className="text-gray-700 flex items-center justify-center" dir="ltr">
                Made with <HeartIcon className="w-6 h-6 fill-red-500 mx-1" /> by Ashkan
            </p>
        </footer>
    );
}

export default Footer;