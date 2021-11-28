/** 

    @FUNCTIONS_REGARDING_DATA

*/



// Fetch contract from localstorage
export const fetchContractFromLocalStorage =  (accounts) => {
    const local = localStorage.getItem(accounts[0])
    if(local === null){
        localStorage.setItem("INITIAL_SESSION", true);
        return ""
    }else {
        localStorage.setItem("INITIAL_SESSION", false);
        return local;
    }
}