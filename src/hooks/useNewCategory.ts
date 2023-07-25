import { useState } from "react";
import { postCategory } from "../services/category/category.services";
import { NewCategoryDto } from "../models/dtos/new-category.dto";

export function useNewCategory() {
    const [loading, setLoading] = useState(false);

    const newCategory = async (model: NewCategoryDto) => {
        setLoading(true);
        const { status } = await postCategory(model);
        setLoading(false);
        return status;
    }


    return {
        newCategory,
        loading,
    };
}
