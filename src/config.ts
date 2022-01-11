let API_ENDPOINT: string;

if(process.env.NODE_ENV === 'production') {
    API_ENDPOINT = "https://apirestcountries.azurewebsites.net"
} else {
    API_ENDPOINT = "https://localhost:8001" //"https://localhost:8000"
}

export default API_ENDPOINT