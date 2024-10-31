// Helper function to check if the graph is a DAG
export const isDAG = (graph) => {
  const visited = new Set();
  const visiting = new Set();

  const dfs = (node) => {
      if (visiting.has(node)) return false; 
      if (visited.has(node)) return true; 

      visiting.add(node);
      for (const neighbor of graph.successors(node)) {
          if (!dfs(neighbor)) return false; 
      }
      visiting.delete(node);
      visited.add(node);
      return true;
  };

  for (const node of graph.nodes()) {
      if (!visited.has(node)) {
          if (!dfs(node)) return false; 
      }
  }
  return true; 
};
