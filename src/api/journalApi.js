import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vuex-demos-default-rtdb.europe-west1.firebasedatabase.app'
    
})

export default journalApi