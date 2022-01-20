export const CREATE_BOOK = 'CREATE_BOOK';
export const GET_BOOK_LIST = 'GET_BOOK_LIST';

export interface GetBookListAction {
    type: typeof GET_BOOK_LIST;
    payload: any;
}

export interface CreateBookAction {
    type: typeof CREATE_BOOK;
    payload:any
}

export type BookActions = GetBookListAction | CreateBookAction;