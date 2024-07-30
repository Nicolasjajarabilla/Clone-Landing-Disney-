import { Heading, Text } from "@chakra-ui/react";

type Props = {};

function index({}: Props) {
  return (
    <>
      <Heading
        fontFamily={"Inspire, sans-serif"}
        fontWeight={"600"}
        color={"white"}
        fontSize={"24px"}
        as={"h3"}
        position={"absolute"}
        top={"130vh"}
        width={"35vw"}
        left={"5vw"}
      >
        Las mejores series y películas de Star y el deporte de ESPN
      </Heading>
      <Text
        fontFamily={"Inspire, sans-serif"}
        width={"35vw"}
        left={"5vw"}
        position={"absolute"}
        top={"140vh"}
        color={"gray.100"}
      >
        Estrenos de películas, clásicos, sagas, comedias animadas y producciones
        originales de Star, además de los deportes y programas en vivo de ESPN.
      </Text>
    </>
  );
}

export default index;
