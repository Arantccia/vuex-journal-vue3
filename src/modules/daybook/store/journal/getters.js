// traemos información del state y la podemos procesar.

export const getEntriesbyTerm = ( state ) => (term = '') =>{
    if(term.length === 0)  return state.entries

    return state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))   
} 

export const getEntrybyId = ( state ) => ( id = '' ) =>{
    // lo estamos haciendo así para no mandarlo por referencia
    // ya que no queremos que cambien el state de esta manera. 
    const entry = state.entries.find( entryId => entryId.id === id )
     
    if(!entry) return

    return {...entry}

} 