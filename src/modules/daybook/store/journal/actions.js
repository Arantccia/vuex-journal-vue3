//Acciones son llamadas async que pueden llamar a una mutacion
// normalmente se utiliza para comunicarse con la api.

import journalApi from "@/api/journalApi"

export const loadEntries = async( {commit} ) =>{
    const {data} = await journalApi.get('/entries.json')
    const entries = []
    for( let id of Object.keys(data) ){
        entries.push({
            id,
            ...data[id]
        })
    }
  commit('setEntries', entries)
} 

export const updateEntry = async({commit}, entry)=>{
  
    const {date, picture, text} = entry
    const body = {date, picture, text}

    const data = await journalApi.put( `/entries/${entry.id}.json`, body)
    commit ('updateEntry', { ...entry })

}

export const createEntry = async( {commit}, entry ) =>{
    let body = { ...entry }
    body = {...body, picture:null }
    const {data} = await journalApi.post('/entries.json', body)
    commit ('addEntries', body)
    return data.name
}
