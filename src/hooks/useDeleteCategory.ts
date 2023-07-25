import { useState } from "react";
import { deleteCategory } from "../services/category/category.services";

export function useDeleteCategory() {
    const [loading, setLoading] = useState(false);

    const removeCategory = async (id: string) => {
        setLoading(true);
        await deleteCategory(id);
        setLoading(false);
    }

    return {
        removeCategory,
        loading,
    };
}
