import axios from "axios";

export const requestListener = async (url: any, data: any, method: any) => {
    debugger;
    let serverUrl = 'http://localhost:3500/'
    try {
        let responseData :any;
        if(method == 'POST')
        {
            responseData =  await axios({
                method:method,
                url:serverUrl+url,
                data:data
                
            })
        }
        if( method == 'GET')
        {

            responseData =  await axios({
                method:method,
                url:serverUrl+url,
            })
        }
     
        debugger
        return responseData
    }
    catch (ex) {
        console.log("ex ==== ", ex);

        return "Will return error message here\n" + ex
    }
}