import { Box, Heading, Text } from "@chakra-ui/react";

type Props = {};

function SoloDisney({}: Props) {
  return (
    <Box position={"absolute"} top={"340vh"} left={"5vw"}>
      <Heading
        fontWeight={"400"}
        fontSize={"35px"}
        fontFamily={"Inspire, sans-serif"}
        color={"white"}
      >
        Solo en Disney+
      </Heading>
      <Text
        color={"white"}
        my={"25px"}
        fontFamily={"Inspire, sans-serif"}
        fontWeight={"500"}
      >
        ¡Las mejores producciones originales y exclusivas!
      </Text>
    </Box>
  );
}

export default SoloDisney;
