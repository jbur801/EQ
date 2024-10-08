import { Button, Card, Container, Stack, TextField, Typography } from "@mui/material";
import TestCanvas from "../Three/TestCanvas";
import { useRef } from "react";

export default function WheelOfTodo() {
  console.log("code segment reached:landing");
//   const todo =useRef();

  const addTodo = (e:any)=>{
    e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData.getAll('TodoTitle'));
  };
  return (
    <Container sx={{ width: "100%", height: "100%" }}>
      <Card sx={{ width: "100%", height: "100%" }}>
        {/* <TestCanvas /> */}
        <form onSubmit={addTodo}>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Typography> Add a new TODO</Typography>
      
          <Stack >
            <TextField label="Title" name="TodoTitle" />
            <TextField label="Description" name="TodoDescription" />
            <TextField label="Priority" name="TodoDescription" />
          <Button type='submit'>
            <Typography>Create Todo</Typography>
          </Button>
          </Stack>

          <Button>
            <Typography>Join Lobby</Typography>
          </Button>
    
        </Stack>
        </form>
      </Card>
    </Container>
  );
}
