import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { IoCheckmark } from "react-icons/io5";
import { GoHorizontalRule } from "react-icons/go";

type Props = {};

function Planes({}: Props) {
  return (
    <>
      <Box
        background={"#00091a"}
        position={"absolute"}
        top={"200vh"}
        h={"110vh"}
        w={"100%"}
        textAlign={"center"}
      >
        <Heading
          my={"24px"}
          color={"white"}
          fontFamily={"Inspire, sans-serif"}
          fontWeight={"600"}
          fontStyle={"normal"}
        >
          ¿Qué plan vas a elegir?
        </Heading>
        <Text mt={"24px"} color={"gray.300"}>
          Podrás modificarlo o cancelarlo cuando quieras.
        </Text>
      </Box>
      <Box
        position={"absolute"}
        top={"220vh"}
        left={"45vw"}
        w={"auto"}
        height={"auto"}
      >
        <Box display={"flex"}>
          <Box w={"auto"} color={"white"} borderTop={"1px solid gray"}>
            <Image
              src="https://cnbl-cdn.bamgrid.com/assets/478bf74ef5ffc184e7c96808eef869a4ca967cbcc5a8db8f7e3c4005d93bbfd5/original"
              w={"auto"}
              h={"60px"}
              my={"24px"}
              mx={"80px"}
            />
            <Text
              fontSize={"16px"}
              fontFamily={"Inspire, sans-serif"}
              fontWeight={"700"}
              textAlign={"center"}
              my={"20px"}
            >
              Estandar
            </Text>
            <Button
              bg={"rgb(2, 214, 232)"}
              my={"24px"}
              ml={"30px"}
              h={"60px"}
              fontFamily={"Inspire, sans-serif"}
              fontWeight={"400"}
              _hover={{ opacity: "0.8", bgColor: "rgb(2, 214, 232)" }}
            >
              ARS 7.399/MES (FINAL)
            </Button>
          </Box>
          <Box
            color={"white"}
            bgColor={"gray.800"}
            h={"80vh"}
            w={"auto"}
            borderTop={"1px solid gray.800"}
          >
            <Image
              src="https://cnbl-cdn.bamgrid.com/assets/478bf74ef5ffc184e7c96808eef869a4ca967cbcc5a8db8f7e3c4005d93bbfd5/original"
              w={"auto"}
              h={"60px"}
              my={"24px"}
              mx={"80px"}
            />
            <Text
              fontSize={"16px"}
              fontFamily={"Inspire, sans-serif"}
              fontWeight={"700"}
              textAlign={"center"}
              my={"20px"}
            >
              Premium
            </Text>
            <Button
              bg={"rgb(2, 214, 232)"}
              my={"24px"}
              mx={"20px"}
              h={"60px"}
              fontFamily={"Inspire, sans-serif"}
              fontWeight={"400"}
              _hover={{ opacity: "0.8", bgColor: "rgb(2, 214, 232)" }}
            >
              ARS 10.549/MES (FINAL)
            </Button>
          </Box>
        </Box>

        <Box
          borderTop={"1px solid gray"}
          w={"50vw"}
          position={"absolute"}
          top={"32vh"}
          right={"0vw"}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Text color={"gray.300"} w={"22vw"} my={"18px"}>
              Estrenos de películas, series originales y clásicos de Disney,
              Pixar, Marvel, Star Wars, National Geographic y Star
            </Text>
            <Text
              position={"absolute"}
              left={"28.7vw"}
              fontSize={"35px"}
              my={"20px"}
            >
              <IoCheckmark color={"white"} />
            </Text>
            <Text
              position={"absolute"}
              right={"5vw"}
              fontSize={"35px"}
              my={"20px"}
            >
              <IoCheckmark color={"white"} />
            </Text>
          </Box>
          <Box
            borderTop={"1px solid gray"}
            display={"flex"}
            justifyContent={"space-between"}
            color={"gray.300"}
          >
            <Text my={"18px"}>El Deporte de ESPN</Text>
            <Text my={"18px"} w={"15vw"} position={"absolute"} right={"14vw"}>
              Selección de canales de ESPN (ESPN e ESPN3)
            </Text>
            <Text my={"18px"} w={"13vw"} textAlign={"center"}>
              Todos los canales básicos de ESPN, torneos y más de 500 eventos
              exclusivos por mes
            </Text>
          </Box>
          <Box
            borderTop={"1px solid gray"}
            display={"flex"}
            justifyContent={"space-between"}
            color={"gray.300"}
          >
            <Text my={"18px"} w={"20vw"}>
              Calidad de video hasta 4K UHD/HDR y sonido Dolby Atmos
            </Text>
            <Text my={"18px"} w={"15vw"} position={"absolute"} right={"6.7vw"}>
              <GoHorizontalRule fontSize={"40px"} color={"gray.300"} />
            </Text>
            <Text my={"18px"} mx={"100px"}>
              <IoCheckmark fontSize={"35px"} color={"white"} />
            </Text>
          </Box>
          <Box
            borderTop={"1px solid gray"}
            display={"flex"}
            justifyContent={"space-between"}
            color={"gray.300"}
          >
            <Text my={"18px"} w={"20vw"}>
              Dispositivos para ver en simultáneo
            </Text>
            <Text
              fontSize={"24px"}
              my={"18px"}
              w={"15vw"}
              position={"absolute"}
              right={"6vw"}
            >
              2
            </Text>
            <Text fontSize={"24px"} my={"18px"} mx={"110px"}>
              4
            </Text>
          </Box>
          <Box
            borderTop={"1px solid gray"}
            display={"flex"}
            justifyContent={"space-between"}
            color={"gray.300"}
          >
            <Text my={"18px"} w={"20vw"}>
              Descargas para ver tus favoritos sin conexión ni demoras
            </Text>
            <Text
              my={"18px"}
              w={"15vw"}
              fontSize={"35px"}
              position={"absolute"}
              right={"6.5vw"}
            >
              <IoCheckmark color={"white"} />
            </Text>
            <Text my={"18px"} fontSize={"35px"} mx={"100px"}>
              <IoCheckmark color={"white"} />
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Planes;
