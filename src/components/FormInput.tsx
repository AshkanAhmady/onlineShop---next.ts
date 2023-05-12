import { InputPropsType } from "src/types";

const Input = ({ label, name, type, error, validation }: InputPropsType) => {

    return (
        <>
            <div className="flex justify-between items-center">
                <label className="text-stone-500 duration-150 font-medium" htmlFor={name}>
                    {`${label}`}
                </label>
                <span className="text-red-500 text-xs py-1">{error}</span>
            </div>
            <input
                className="bg-white duration-150 border border-gray-300 rounded shadow border-grey-dark outline-none px-2 py-1 mt-1"
                {...validation}
                name={name}
                type={type}
                id={name}
            />
        </>
    );
}

export default Input;