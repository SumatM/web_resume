
export function getLocalFile(key){
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem(key))
      }
   
}