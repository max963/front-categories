import { useEffect, useState } from "react";
import { Category } from "../models/category.model";

export function useFindCategory(id: string) {
    const [loading, setLoading] = useState(false);

    const getCategory = async (id: string) => {
        setLoading(true);
        const category: Category[] = await getCategory(id);
        setLoading(false);
        return category;
    }


    useEffect(() => {
        getCategory(id);
    }, []);

    return {
        getCategory,
        loading,
    };
}
