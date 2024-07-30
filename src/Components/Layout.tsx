import { Box } from "@chakra-ui/react";
import Title from "./Title";
import Movies from "./Movies";
import Planes from "./Planes";
import SoloDisney from "./SoloDisney";
import Plataformas from "./Plataformas";

type Props = {};

function Layout({}: Props) {
  return (
    <>
      <Box
        backgroundImage={
          "url(https://cnbl-cdn.bamgrid.com/assets/d2cfe2e2f77df1893199c9b71ac803f6f14984488f6f97219f241df887103c33/original)"
        }
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        height={"100vh"}
      >
        <Title></Title>
      </Box>
      <Box
        backgroundImage={
          "url(https://cnbl-cdn.bamgrid.com/assets/be8feab8abc4cb62b92e0472a58fdbe0045058b16247299a349998ceb318188e/original)"
        }
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        height={"100vh"}
      >
        <Movies />
      </Box>
      <Box height={"110vh"}>
        <Planes></Planes>
      </Box>
      <Box
        backgroundImage={
          "url(https://cnbl-cdn.bamgrid.com/assets/9a3fc9f7f6bc33220820f32f3b2997f16203d7f317bb5f2caf27722ead28f26f/original)"
        }
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        height={"100vh"}
      >
        <SoloDisney />
      </Box>
      <Box
        backgroundImage={
          "url(https://cnbl-cdn.bamgrid.com/assets/07221cbbc9c4240cff0bc122a3c3faa68f3997d8a37fb17deaefaec1698a4ad3/original)"
        }
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        height={"100vh"}
      >
        <Plataformas />
      </Box>
    </>
  );
}

export default Layout;
