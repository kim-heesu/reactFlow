import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import type { Connection, Edge, Node } from "reactflow";
import "reactflow/dist/style.css";

let id = 0;
const getId = () => `node_${id++}`;

const FlowPage: React.FC = () => {
  const initialNodes: Node[] = [
    {
      id: getId(),
      position: { x: 250, y: 5 },
      data: { label: "시작 노드" },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  // ✅ 노드 추가
  const onAddNode = useCallback(() => {
    const newId = getId();
    const newNode: Node = {
      id: newId,
      position: { x: Math.random() * 600 + 50, y: Math.random() * 400 + 50 },
      data: { label: `노드 ${newId}` },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  // ✅ 노드 삭제 (선택된 노드 삭제 + 연결된 엣지 삭제)
  const onDeleteNode = useCallback(() => {
    if (!selectedNode) return;
    setNodes((nds) => nds.filter((n) => n.id !== selectedNode.id));
    setEdges((eds) =>
      eds.filter(
        (e) => e.source !== selectedNode.id && e.target !== selectedNode.id
      )
    );
    console.log("노드 삭제:", selectedNode);
    setSelectedNode(null);
  }, [selectedNode, setNodes, setEdges]);

  // ✅ 노드 클릭 이벤트
  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    console.log("노드 클릭:", node);
    setSelectedNode(node);
  }, []);

  // ✅ 엣지 클릭 이벤트
  const onEdgeClick = useCallback((_: React.MouseEvent, edge: Edge) => {
    console.log("엣지 클릭:", edge);
  }, []);

  // ✅ 노드 연결 시
  const onConnect = useCallback(
    (params: Edge | Connection) => {
      console.log("노드 연결:", params);
      setEdges((eds) => addEdge({ ...params, animated: true }, eds));
    },
    [setEdges]
  );

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div style={{ position: "absolute", zIndex: 10, padding: 10 }}>
        <button onClick={onAddNode} style={{ marginRight: 5 }}>
          노드 추가
        </button>
        <button onClick={onDeleteNode} disabled={!selectedNode} style={{ marginRight: 5 }}>
          노드 삭제
        </button>
        <button>
          엣지 삭제
        </button>
      </div>

       <ReactFlow
         nodes={nodes}
         edges={edges}
         onNodesChange={onNodesChange}
         onEdgesChange={onEdgesChange}
         onConnect={onConnect}
         onNodeClick={onNodeClick}
         onEdgeClick={onEdgeClick}
         fitView
       >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowPage;
