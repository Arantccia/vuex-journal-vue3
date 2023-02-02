// son sicronas hacen la modificación del state 
// como el state es reactivo lo comunica a todos los componentes que le atañen

export const setEntries = ( state, entries) =>{
    //estamos creando un nuevo arrary con lo valores
    //que tenia el state (state.entries) 
    //mas las entries que nos manda la actiosn, que tambien
    // las desestructuramos para crear una copia y que no apunte al mismo sitio.
    // de esta forma evitamos modificar el objeto state sin que lo sepa vuex
    state.entries = [...state.entries, ...entries]
    // lo ponemos a false por que ya nos ha llegado la info de las actions
    state.isLoading = false
    
} 

export const updateEntry = ( state, entry) =>{

    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[idx] = entry
} 

export const addEntries = ( state, entry ) =>{
   
    state.entries = [entry, ...state.entries]
    
} 