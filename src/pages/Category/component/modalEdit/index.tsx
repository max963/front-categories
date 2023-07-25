import { useState } from "react";
import { Category } from "../../../../models/category.model";
import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";


interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: Category) => void;
    data: Category; 
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, data }) => {
    const [editedData, setEditedData] = useState<any>(data);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditedData((prevData: any) => ({ ...prevData, [name]: value })); 
    };
    
    const handleSave = () => {
        onSave(editedData);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Editar Dados</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Stack direction={"column"} spacing={3}>
                    <Input variant='outline'
                        type="text"
                        name="id" 
                        value={editedData.id} 
                        onChange={handleChange}
                        disabled={true}
                    />

                    <Input variant='outline'
                        type="text"
                        name="name" 
                        value={editedData.name} 
                        onChange={handleChange}
                    />
                </Stack>

            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Salvar
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    );

 
};

export default EditModal;