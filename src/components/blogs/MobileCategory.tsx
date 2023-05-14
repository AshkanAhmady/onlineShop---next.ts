import Link from "next/link";
import { useRouter } from "next/router";
import { CategoryListPropsType } from "src/types";

const MobileCategory = ({ categoryData }: CategoryListPropsType) => {
    const { query } = useRouter()

    return (
        <>
            <Link href={`/blogs/`} className={`${!query.categorySlug ? "bg-purple-200 text-purple-800 border-purple-800 border-2" : "bg-white text-gray-500"} duration-150 block text-sm  whitespace-nowrap border border-gray-500  px-3 py-1 rounded-full`}>همه مقالات</Link>

            {
                categoryData.map((category) => {
                    return <Link href={`/blogs/${category.englishTitle}`} key={category._id} className={`${query.categorySlug === category.englishTitle ? "bg-purple-200 text-purple-800 border-purple-800 border-2" : "bg-white text-gray-500"} block text-sm  whitespace-nowrap border border-gray-500  px-3 py-1 rounded-full`}>{category.title}</Link>
                })
            }
        </>
    );
}

export default MobileCategory;