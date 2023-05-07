import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

const DesktopSortBar = () => {
    return (
        <div className='rounded-3xl bg-white px-4 flex items-center'>
            <div className='flex items-center gap-2'>
                <AdjustmentsHorizontalIcon className='w-6 h-6' />
                <span className='text-gray-700'>مرتب سازی:</span>
            </div>
            <ul className='flex items-center gap-4 mr-3'>
                <li className='text-gray-700 cursor-pointer py-3' >پر بازید ترین</li>
                <li className='text-gray-700 cursor-pointer py-3' >جدید ترین</li>
                <li className='text-gray-700 cursor-pointer py-3' >محبوب ترین</li>
            </ul>
        </div>

    );
}

export default DesktopSortBar;