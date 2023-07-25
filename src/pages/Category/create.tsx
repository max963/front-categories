import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useNewCategory } from '../../hooks/useNewCategory';
import { NewCategoryDto } from '../../models/dtos/new-category.dto';
import { useToast } from '../../contexts/toast';

type FormData = {
    id: number;
    name: string;
  };

const CreateCategory = () => {
    const { newCategory } = useNewCategory();
    const { toast } = useToast();

    const [formData, setFormData] = useState<FormData>({
        id: 0,
        name: '',
      });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newCategoryData: NewCategoryDto = {
            name: formData.name
        }
        try {
            const status = await newCategory(newCategoryData);
            if (status == 200 || status === 201) {
                toast.success("Categoria criada com sucesso!", {
                id: "toast-principal",
              });
            } 
        } catch (error) {
            toast.error("Erro ao criar categoria!", {
                id: "toast-principal",
            });
        }
    };
    
    return (
        <>
            <Box mt={8} mx="auto" maxWidth="400px">
                <form onSubmit={handleSubmit}>
                    
                    <FormControl id="name" mb={4}>
                    <FormLabel>Nome</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Enviar</Button>
                </form>
                </Box>
        </>
    )
}

export default CreateCategory;