/** 

    @FUNCTIONS_REGARDING_DATA

*/



// Fetch contract from localstorage
export const fetchContractFromLocalStorage =  (accounts) => {
    const local = localStorage.getItem(accounts[0])
    if(local === null){
        return "no address found"
    }else {
        return local;
    }
}