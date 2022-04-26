import axios from "axios";

async function makeRequest (url: string, method: string, headers: any) {
    try {
        let data;

        await axios({
            baseURL: url,
            timeout: 1000,
            headers: headers
        }).then((response) => {
            data = response
        });

        return data;

    } catch (error) {
        console.log(error);
    }


}