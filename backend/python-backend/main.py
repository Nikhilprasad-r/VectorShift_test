from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import networkx as nx

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

class PipelineData(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    nodes = pipeline.nodes
    edges = pipeline.edges
    num_nodes = len(nodes)
    num_edges = len(edges)
    graph = nx.DiGraph()
    graph.add_nodes_from(node["id"] for node in nodes)
    graph.add_edges_from((edge["source"], edge["target"]) for edge in edges)
    is_dag = nx.is_directed_acyclic_graph(graph)
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
