import { useState } from "react";
import { Container, VStack, Input, Button, List, ListItem, Text, Checkbox, HStack, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Text fontSize="2xl" fontWeight="bold">Todo App</Text>
        <HStack w="100%">
          <Input 
            placeholder="Add a new task" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </HStack>
        <List spacing={3} w="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between">
              <HStack>
                <Checkbox 
                  isChecked={task.completed} 
                  onChange={() => toggleTaskCompletion(index)}
                />
                <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
              </HStack>
              <IconButton 
                aria-label="Delete task" 
                icon={<FaTrash />} 
                colorScheme="red" 
                onClick={() => deleteTask(index)} 
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;