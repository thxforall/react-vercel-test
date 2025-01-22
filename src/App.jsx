import Box from './components/Box.jsx';
import './App.css';

function App() {
  return (
    <main>
      <Box backgroundColor="tomato" isRound={true}>1</Box>
      <Box backgroundColor="orange" isRound={false}>2</Box>
      <Box backgroundColor="yellow" isRound={true}>3</Box>
      <Box backgroundColor="green" isRound={false}>4</Box>
      <Box backgroundColor="blue" isRound={true}>5</Box>
    </main>
  );
}

export default App;
