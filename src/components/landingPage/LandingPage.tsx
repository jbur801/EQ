import { Button, Card, Container, Stack, Typography } from "@mui/material";
import TestCanvas from "../Three/TestCanvas";

export default function LandingPage() {
  console.log("code segment reached:landing");
  return (
    <Container sx={{ width: "100%", height: "100%" }}>
      <Card sx={{ width: "100%", height: "100%" }}>
        {/* <TestCanvas /> */}
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography> Welkom to Auction</Typography>
          <Button>
            <Typography>Create lobby</Typography>
          </Button>
          <Button>
            <Typography>Join Lobby</Typography>
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
