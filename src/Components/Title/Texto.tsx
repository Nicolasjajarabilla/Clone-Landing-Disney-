import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
type Props = {};

function Texto({}: Props) {
  return (
    <>
      <Image
        width={"180px"}
        position={"absolute"}
        top={"30vh"}
        left={"5vw"}
        src="https://cnbl-cdn.bamgrid.com/assets/478bf74ef5ffc184e7c96808eef869a4ca967cbcc5a8db8f7e3c4005d93bbfd5/original"
      />
      <Heading
        position={"absolute"}
        top={"40vh"}
        left={"5vw"}
        as={"h1"}
        fontSize={"44px"}
        fontFamily={"Inspire, sans-serif"}
        fontWeight={"600"}
        fontStyle={"normal"}
        my={"24px"}
        lineHeight={"50px"}
        color={"white"}
      >
        Hay un nuevo Disney+
      </Heading>
      <Text
        my={"24px"}
        position={"absolute"}
        fontSize={"30px"}
        fontFamily={"Inspire, sans-serif"}
        fontWeight={"400"}
        top={"48vh"}
        left={"5vw"}
        color={"white"}
      >
        donde todo se encuentra
      </Text>
      <Box
        position={"absolute"}
        top={"58vh"}
        left={"5vw"}
        display={"flex"}
        gap={"20px"}
      >
        <Button
          fontStyle={"normal"}
          fontFamily={"Inspire, sans-serif"}
          letterSpacing={"1.76px"}
          bgColor={"rgb(2, 214, 232)"}
          fontWeight={"400"}
          _hover={{
            opacity: "0.5",
            bgColor: "rgb(2, 214, 232)",
          }}
          fontSize={"18px"}
          w={"310px"}
          h={"60px"}
        >
          DISNEY+ ESTANDAR
        </Button>
        <Button
          _hover={{
            opacity: "0.5",
            bgColor: "rgb(2, 214, 232)",
          }}
          bgColor={"rgb(2, 214, 232)"}
          fontStyle={"normal"}
          fontFamily={"Inspire, sans-serif"}
          letterSpacing={"1.76px"}
          fontWeight={"400"}
          fontSize={"18px"}
          w={"310px"}
          h={"60px"}
        >
          DISNEY+ PREMIUM
        </Button>
      </Box>
      <Text
        width={"35%"}
        position={"absolute"}
        top={"68vh"}
        left={"5vw"}
        color={"gray.300"}
      >
        Disney+ Premium incluye todos los canales básicos de ESPN, torneos
        exclusivos y eventos deportivos; y Disney+ Estándar, una selección de
        canales de ESPN (ESPN e ESPN3).
      </Text>
    </>
  );
}

export default Texto;
