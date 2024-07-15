const socket = new WebSocket('ws://localhost:5000');

socket.onopen = () => {
  console.log('WebSocket connection opened');
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('WebSocket message received:', data);
  // Handle incoming messages (update state in components if needed)
};

export default socket;
