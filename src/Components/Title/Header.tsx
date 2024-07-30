import { Button } from "@chakra-ui/react";

type Props = {};

function Header({}: Props) {
  return (
    <>
      <Button
        position={"absolute"}
        left={"88vw"}
        mt={"10px"}
        width={"190px"}
        height={"50px"}
        fontSize={"18px"}
        borderRadius={"2px"}
        bg={"trasparent"}
        color={"gray.100"}
        border={"1px solid white"}
        fontFamily={"Inspire, sans-serif"}
        fontStyle={"normal"}
        fontWeight={"400"}
        letterSpacing={"1.76px"}
        _hover={{ bg: "white", color: "black", transition: "0.3s" }}
      >
        INICIAR SESIÓN
      </Button>
    </>
  );
}

export default Header;
