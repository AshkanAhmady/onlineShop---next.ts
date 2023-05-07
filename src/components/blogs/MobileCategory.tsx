import Link from "next/link";
import { CategoryListPropsType } from "src/types";

const MobileCategory = ({ categoryData }: CategoryListPropsType) => {
    return (
        <>
            {
                categoryData.map((category) => {
                    return <Link href={`/blogs/${category.englishTitle}`} key={category._id} className='block text-sm bg-white whitespace-nowrap border border-gray-500 text-gray-500 px-3 py-1 rounded-full'>{category.title}</Link>
                })
            }
        </>
    );
}

export default MobileCategory;