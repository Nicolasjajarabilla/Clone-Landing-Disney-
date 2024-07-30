import { Box, Heading, Text } from "@chakra-ui/react";

type Props = {};

function Plataformas({}: Props) {
  return (
    <Box position={"absolute"} top={"400vh"} left={"38.5%"} my={"50px"}>
      <Heading
        color={"white"}
        fontFamily={"Inspire, sans-serif"}
        fontStyle={"normal"}
        fontWeight={"450"}
      >
        Cuando y donde quieras
      </Heading>
      <Text color={"gray.300"} my={"24px"} mx={"10px"}>
        Disfrutá tus favoritos en cualquier momento y lugar.
      </Text>
    </Box>
  );
}

export default Plataformas;
