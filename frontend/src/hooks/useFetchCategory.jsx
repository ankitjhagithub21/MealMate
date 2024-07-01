import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCategories} from "../app/slices/foodSlice"

const useFetchCategory = () => {
   
   const dispatch = useDispatch()
    useEffect(()=>{
      const fetchCategory = async() =>{
         try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            const data = await res.json()
            dispatch(setCategories(data.categories))
         }catch(error){
            console.log(error)
         }
      }
      fetchCategory()
    },[])
    
}

export default useFetchCategory
