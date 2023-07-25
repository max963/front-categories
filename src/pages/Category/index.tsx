import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Stack,
    Skeleton,
    IconButton,
  } from '@chakra-ui/react'
import { useGetCategories } from '../../hooks/useGetCategories';
import { useEffect, useState } from 'react';
import { Category } from '../../models/category.model';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useDeleteCategory } from '../../hooks/useDeleteCategory';
import Swal from 'sweetalert2';
import { useToast } from '../../contexts/toast';
import EditModal from './component/modalEdit';
import { useUpdateCategory } from '../../hooks/useUpdateCategory';

const CategoryPage = () => {
    const { getAllCategories, loading } = useGetCategories();
    const { removeCategory } = useDeleteCategory();
    const { updateCategory } = useUpdateCategory();
    const { toast } = useToast();
    const [categories, setCategories] = useState<Category[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState<Category>()
    const loadCategories = async () => {
        console.log
        const data = await getAllCategories();
        setCategories(data);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };


    const deleteCategory = async (id: string) => {
        Swal.fire({
            title: 'Deseja deletar a categoria?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Sim',
            denyButtonText: `Não`,
          }).then(async (result) => {
            if (result.isConfirmed) {
            try {
                await removeCategory(id);
                toast.success("Categoria removida com sucesso!", {
                    id: "toast-principal",
                });
                setInterval(() => {
                    window.location.reload()
                }, 1000)
            } catch {
                toast.error("Erro ao remover categoria!", {
                    id: "toast-principal",
                });
            }
            } 
          })
    }

    const handleUpdateCategory = (item: Category) => {
        setData(item);
        handleOpenModal();
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveData = async (editedData: Category) => {
        setData(editedData);
        const status = await updateCategory(editedData)
        if (status == 200 || status == 201 || status == 204) {
            toast.success("Categoria alterada com sucesso!", {
                id: "toast-principal",
            });

            setInterval(() => {
                window.location.reload()
            }, 1000)

        }
    };

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <>
            <h3>Categorias</h3>

            {
                !loading ? (
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                            <Tr>
                                <Th>Categoria</Th>
                                <Th>Ações</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    categories && categories.map((item, index) => (
                                        <Tr key={index}>
                                            <Td>{item.name}</Td>
                                            <Td>
                                                <IconButton
                                                    isRound={true}
                                                    variant='solid'
                                                    colorScheme='green'
                                                    aria-label='Done'
                                                    fontSize='12px'
                                                    icon={<EditIcon />}
                                                    marginRight={10}
                                                    onClick={() => handleUpdateCategory(item)}
                                                    // onClick={handleOpenModal}
                                                    />    

                                                <IconButton
                                                    isRound={true}
                                                    variant='solid'
                                                    colorScheme='red'
                                                    aria-label='Done'
                                                    fontSize='12px'
                                                    icon={<DeleteIcon />}
                                                    onClick={() => deleteCategory(item.id)}
                                                    />    
                                            </Td>
                                        </Tr>
                                    ))
                                }
                            
                            </Tbody>
                            
                        </Table>
                    </TableContainer>
                    ) 
                    : (
                        <Stack>
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                        </Stack>
                    )
            }
            { data && <EditModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveData} data={data} />}
        </>
    )
}

export default CategoryPage;