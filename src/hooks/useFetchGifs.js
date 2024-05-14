import { useEffect, useState } from "react";
import { getGifs } from "../helpers/gifs";



export const useFetchGifs = (category) =>{

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
        const bunchOfImages = await getGifs(category);
        setImages(bunchOfImages);
        setIsLoading(false);
    }
    
    useEffect(()=>{
        getImages();
    },[])

    return {
        images,
        isLoading
    }
}