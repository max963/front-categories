import { Button, Flex, Stack } from "@chakra-ui/react";
import './menu.css'
import { Link } from "react-router-dom";

const Menu = ({children}: any) => {
    return (
        <>
            <Flex flexDirection={'row'}>
                <Flex>
                    <Flex flexDirection={'column'} margin={"0px 15px 0px 0px"}  gap={3}>
                        <Stack direction='column' spacing={4} align='center'>
                            <Link to={"/"}>
                                <Button className="menu-button" colorScheme='blue' variant='solid'>Dashboard</Button>
                            </Link>
                            <Link to={"/category"}>
                                <Button className="menu-button" colorScheme='blue' variant='solid'>Categorias</Button>
                            </Link>
                            <Link to={"new-category"}>
                                <Button className="menu-button" colorScheme='blue' variant={"solid"}>Nova Categoria</Button>
                            </Link>
                        </Stack>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        {children}
                    </Flex>
                </Flex>
            </Flex>
            
            
        </>
    )
}

export default Menu;