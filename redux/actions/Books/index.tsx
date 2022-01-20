import { Dispatch } from "react";
import { AppActions  } from "../../../types";
import { GET_BOOK_LIST,CREATE_BOOK } from "../../../types/actions/Books/books.action";
import { requestListener } from "../../../helper/api";
export const bookList = () => {

    return (dispatch: Dispatch<AppActions>) => {
        debugger
        requestListener('books',null,'GET').then(data =>{
            debugger
            if(data?.status == 200)
            {
                dispatch({type:GET_BOOK_LIST, payload:data.data})
            }
        })
     
    }
}

export const bookCreate = (payload:any) => {

    return (dispatch: Dispatch<AppActions>) => {
        debugger
        requestListener('books',payload,'POST').then(data =>{
            debugger
            if(data?.status == 200 || data?.status == 201)
            {
                dispatch({type:CREATE_BOOK, payload:data.data})
            }
        })
     
    }
}