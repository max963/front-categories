import { Category } from "../../models/category.model";
import { NewCategoryDto } from "../../models/dtos/new-category.dto";
import { api } from "./api";


export async function getCategories(): Promise <Category[]> {
    console.log(api)
    const { data } = await api.get(`/api/category`);
    return data;
}

export async function getCategory(id: string): Promise <{
    data: any;
    status: number;
  }> {
    const { data, status } = await api.get(`/api/category/${id}`);
    return { data, status };
}

export async function postCategory(dto: NewCategoryDto): Promise <{
    data: any;
    status: number;
  }> {
    const { data, status } = await api.post(`/api/category/`, dto);
    console.log('status', status, 'data', data)
    return { data, status };
}

export async function putCategory(dto: Category): Promise <{
    data: any;
    status: number;
  }> {
    console.log(dto);
    const { data, status } = await api.put(`/api/category/`, dto);
    return { data, status };
}

export async function deleteCategory(id: string): Promise <{
    data: any;
    status: number;
  }> {
    const { data, status } = await api.delete(`/api/category/${id}`);
    return { data, status };
}