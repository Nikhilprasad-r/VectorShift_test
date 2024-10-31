const express = require("express");
const bodyParser = require("body-parser");
const { Graph } = require("graphlib");
import { isDAG } from "./helpers/isDAG";

const app = express();
app.use(bodyParser.json());

// Basic health check route
app.get("/", (req, res) => {
  res.json({ Ping: "Pong" });
});

// Pipeline parsing route
app.post("/pipelines/parse", (req, res) => {
  const { nodes, edges } = req.body;

  // Calculate the number of nodes and edges
  const numNodes = nodes.length;
  const numEdges = edges.length;

  // Initialize a directed graph
  const graph = new Graph({ directed: true });

  // Add nodes and edges to the graph
  nodes.forEach((node) => graph.setNode(node.id));
  edges.forEach((edge) => graph.setEdge(edge.source, edge.target));

  // Check if the graph is a Directed Acyclic Graph (DAG)
  const isDAGResult = isDAG(graph);

  // Return the result
  res.json({
    num_nodes: numNodes,
    num_edges: numEdges,
    is_dag: isDAGResult,
  });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
