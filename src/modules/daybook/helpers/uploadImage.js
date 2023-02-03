import axios from "axios"

const uploadImage = async( file ) =>{

    if(!file)return

    try {
        const formData = new FormData()
        //mandamos la clave y el valor ejmp key = upload_preset y la clave = curso-vue
        // tal cual como lo necesitamos en el postman
        formData.append('upload_preset', 'curso-vue')
        formData.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/dqcwrts6c/image/upload'

        const {data}= await axios.post(url,formData)
        //console.log(data)
        return data.secure_url
        
    } catch (error) {
        console.log('Error al cargar la imagen, revisar logs')
        console.log(error)
    }

}

export default uploadImage