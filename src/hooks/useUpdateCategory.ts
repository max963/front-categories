import { useState } from "react";
import { putCategory } from "../services/category/category.services";
import { Category } from "../models/category.model";

export function useUpdateCategory() {
    const [loading, setLoading] = useState(false);

    const updateCategory = async (model: Category) => {
        setLoading(true);
        const { status } = await putCategory(model);
        setLoading(false);
        return status;
    }

    return {
        updateCategory,
        loading,
    };
}
