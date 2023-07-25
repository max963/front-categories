import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { getCategories } from "../services/category/category.services";

export function useGetCategories() {
    const [loading, setLoading] = useState(false);

    const getAllCategories = async () => {
        setLoading(true);
        const category: Category[] = await getCategories();
        setLoading(false);
        return category;
    }


    useEffect(() => {
        getAllCategories();
    }, []);

    return {
        getAllCategories,
        loading,
    };
}