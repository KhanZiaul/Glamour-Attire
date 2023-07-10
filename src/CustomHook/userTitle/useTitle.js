import { useEffect } from "react";

function useTitle(title){
    useEffect(()=>{
        document.title = `${title} - Glamour Attire`
    },[title])
}
export default useTitle;