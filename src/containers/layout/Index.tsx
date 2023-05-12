import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col flex-1 px-5 m:px-0">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;