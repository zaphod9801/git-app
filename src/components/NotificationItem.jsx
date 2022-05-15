import {
    Box, Text
} from "@chakra-ui/react";

export function NotificationItem(product) {

    return (

        <>


            {product.quantity === 0 ?

                <Box bgColor="orange.100" px={10} pb={2}  borderRadius="3xl">
                    <Text fontSize="md" ml={1} mt={3} color="gray.500">
                        {`Te quedaste sin ${product.quantity}, deberías comprar ahora!`}
                    </Text>
                </Box>
                : product.quantity < 11 ?

                    <Box bgColor="orange.100" px={10} pb={2}   borderRadius="3xl">
                        <Text fontSize="md" ml={1} mt={3} color="gray.500">
                            {`Te quedan ${product.quantity} unidades de ${product.product.name}, apurate a comprar!`}
                        </Text>
                    </Box>

                    : product.quantity < 51 ?

                        <Box bgColor="orange.100" px={10} pb={2}  borderRadius="3xl">
                            <Text fontSize="md" ml={1} mt={3} color="gray.500">
                                {`Aun te quedan ${product.quantity} unidades de ${product.product.name}`}
                            </Text>
                        </Box>
                        : null


            }



        </>


    )

}