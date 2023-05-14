import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import Pagination from '@mui/material/Pagination';

interface PaginationPropsType {
    totalPages: number
    page: number
}

const PaginationComponent = ({ totalPages, page }: PaginationPropsType) => {
    const router = useRouter()

    const pageHandler = (e: React.ChangeEvent<unknown>, page: number) => {
        router.query.page = `${page}`
        routerPush(router)
    }

    return (
        <div className='flex justify-center col-span-6' dir='ltr'>
            {
                totalPages > 1 && (
                    <Pagination count={totalPages} page={page} onChange={pageHandler} color="primary" />
                )
            }
        </div>
    );
}

export default PaginationComponent;