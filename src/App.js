import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {

  // Test Edges and nodes
  // const { addNode, addEdge } = useStore((state) => ({
  //   addNode: state.addNode,
  //   addEdge: state.onConnect,
  // }));

  // You can comment out or remove this useEffect if you want no initial nodes/edges
  // useEffect(() => {
  //   // Adding initial nodes
  //   addNode({ id: 'node1', type: 'input', position: { x: 0, y: 0 }, data: { text: 'Input Node' } });
  //   addNode({ id: 'node2', type: 'customOutput', position: { x: 150, y: 0 }, data: { text: 'Custom Output Node' } });
  //   addNode({ id: 'node3', type: 'text', position: { x: 300, y: 0 }, data: { text: 'Text Node' } });

  //   // Adding initial edges
  //   addEdge({ id: 'edge1', source: 'node1', target: 'node2' });
  //   addEdge({ id: 'edge2', source: 'node2', target: 'node3' });
  // }, [addNode, addEdge]);


  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
