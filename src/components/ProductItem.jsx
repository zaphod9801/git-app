import {
    Heading, Center, Icon, Spacer, Input, Box, Flex, Grid, VStack, StackDivider, Button, InputGroup, InputRightElement, HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function ProductItem(product) {

    return (

        <>
            <Box>
                <HStack>

                    <VStack>
                    <Text fontSize="l" color="gray.500">  {product.product.name} </Text>

                    </VStack>

                </HStack>
            </Box>

        </>


    )


}