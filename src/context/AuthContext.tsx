import axios from "axios";
import Router from "next/router";
import { createContext, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { ChildsComponentsType } from "src/types";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext<any>({ user: null, undefined })

const initialState = {
    user: null,
    loading: true,
    error: null
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "SIGNIN_PENDING": return { user: null, error: null, loading: true }
        case "SIGNIN_SUCCESS": return { user: action.payload, error: null, loading: false }
        case "SIGNIN_REJECT": return { user: null, error: action.error, loading: false }
        // case "CLEAR_USER_DATA": return { user: null, error: null, loading: false }
        default: return { ...state }
    }
}

const asyncActionHandlers: any = {
    SIGNIN: ({ dispatch }: any) => (action: any) => {
        dispatch({ type: "SIGNIN_PENDING" })
        axios.post("http://localhost:5000/api/user/signin", action.payload, { withCredentials: true })
            .then(({ data }) => {
                toast.success("با موفقیت وارد شدید")
                dispatch({ type: "SIGNIN_SUCCESS", payload: data })
                Router.push("/")
            })
            .catch(err => {
                toast.error(err?.response?.data?.message)
                dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.message })
            })
    },
    SIGNUP: ({ dispatch }: any) => (action: any) => {
        dispatch({ type: "SIGNIN_PENDING" })
        axios.post("http://localhost:5000/api/user/signup", action.payload, { withCredentials: true })
            .then(({ data }) => {
                toast.success("ثبت نام با موفقیت انجام شد")
                dispatch({ type: "SIGNIN_SUCCESS", payload: data })
                Router.push("/")
            })
            .catch(err => {
                toast.error(err?.response?.data?.message)
                dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.message })
            })
    },
    SIGNOUT: ({ dispatch }: any) => (action: any) => {
        axios.get("http://localhost:5000/api/user/logout", { withCredentials: true })
            .then(() => {
                // first way
                // dispatch({ type: "CLEAR_USER_DATA" })
                // or
                window.location.href = "/"
                Router.push("/")
            })
            .catch()
    },
    // get user data after page is refreshad
    LOAD_USER: ({ dispatch }: any) => (action: any) => {
        dispatch({ type: "SIGNIN_PENDING" })
        axios.get("http://localhost:5000/api/user/load", { withCredentials: true })
            .then(({ data }) => {
                dispatch({ type: "SIGNIN_SUCCESS", payload: data })
            })
            .catch(err => {
                dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.message })
            })
    },
};

const AuthProvider: React.FC<ChildsComponentsType> = ({ children }) => {
    const [userContext, setUserContext] = useReducerAsync(reducer, initialState, asyncActionHandlers)

    useEffect(() => {
        setUserContext({ type: "LOAD_USER" })
    }, [])

    return <AuthContext.Provider value={{ userContext, setUserContext }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext)