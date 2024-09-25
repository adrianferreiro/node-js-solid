// import axios from 'axios';


export class HttpClient {
    //voy a crearme mi propio método get por si en algun momento tengo que dejar de usar el paquete axios
    // async get(url: string) {
    //     const { data, status } = await axios.get(url);
    //     console.log({ status });
    //     return { data, status };
    // }

    async get(url: string) {
        const resp = await fetch(url);
        const data = await resp.json();
        return { data, status: resp.status };
    }

}