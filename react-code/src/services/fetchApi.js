export const fetchApi = async(setLoading,setProducts,finalUrl) => {
    try{
        setLoading(true);
        const response = await fetch(finalUrl);
        const result = await response.json();
        setProducts(result);
        setLoading(false);
    }catch(err){
        setLoading(false);
        console.log(err);
    }
}