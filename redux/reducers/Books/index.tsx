import { GET_BOOK_LIST,CREATE_BOOK } from "../../../types/actions/Books/books.action";

import { AppActions } from "../../../types";

interface BookList {
    id: any,
    title: any,
    year: any,
    description:any
}

let initialState : { 
    listBook : BookList[],
    
}

  initialState= {
    listBook:[],
 }

 interface ReducerActions {
     type: String,
     payload?: any
 }
 const Book =(state = initialState, action: ReducerActions)=>{
     switch(action.type)
     {
        case CREATE_BOOK:
             return {
                 ...state,
                 listBook : [...state.listBook, action.payload]
             };

        case GET_BOOK_LIST:
            debugger
            return {
                ...state,
                listBook: action.payload
            }

        default:
            return state
            
        

     }
 }

 export default Book;