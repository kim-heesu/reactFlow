import styled from "@emotion/styled";
import { useState , useCallback } from 'react';
import { ReactFlow, Background, Controls, applyEdgeChanges, applyNodeChanges, addEdge, Panel } from '@xyflow/react';
import type { Node, Edge, NodeChange, EdgeChange ,Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const FlowWrap = styled.div`
  position: relative; 
  height: 100%;
  width: 100%;
  .react-flow__controls {
    left: auto;
    right: 0;
    flex-direction: row;
  }
  .react-flow__panel.top {
    padding: 1rem;
    background:#fff;  
    box-shadow: 0 0 1rem 0.2rem rgba(0,0,0,0.1);
    button {
      display: block;
      width: 10rem;
      border: 1px solid #000;
      padding: 0.1rem 0.4rem;
      border-radius: 0.4rem;
      background: #fff;
    }

    .box {
      padding: 1rem 0;
      margin: 1rem 0; 
      strong {
        display: block;
        margin-bottom: 1rem;
      }
      & + .box {
        border-top: 1px solid #ddd;
      }
    }
  }
`


export default function FlowSample() {
  //노드 객체
  const initialNodes:Node[] = [
    {
      id: 'n1',
      position: { x: 0, y: 0 },
      data: { label: 'Node 1' },
      type: 'input',
    },
    {
      id: 'n2',
      position: { x: 100, y: 100 },
      data: { label: 'Node 2' },
      type: 'default' // 미 지정시 기본타입
    },
   {
      id: 'n3',
      position: { x: 200, y: 200 },
      data: { label: 'Node 3' },
    },
   {
      id: 'n4',
      position: { x: 300, y: 300 },
      data: { label: 'Node 4' },
      type: 'output'
    },
    {
      id:'group',
      position: {x: 400, y: 400},
      data: {label: 'group'},
      type: 'group'
    }
  ];

  // 엣지 객체
  const initialEdges:Edge[] = [
    {
      id: 'n1-n2',
      source: 'n1',
      target: 'n2',
    },
    {
      id: 'n2-n3',
      source: 'n2',
      target: 'n3',
      type: 'step',
      label: 'add edges label'
    },
  ];
  
  // 상태초기화
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // node,edges 체인지 핸들러
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),[],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),[],
  );

  // 노드 연결 핸들러
  const onConnect = useCallback(
    (params: Connection) => setEdges((edgesSnapshot)=> addEdge(params, edgesSnapshot)),[]
  );
  
  // 현재 노드와 엣지를 콘솔에 출력
  const onConsoleLog = () => {
    console.log('nodes list',nodes);
    console.log('edges list',edges);
  }

  // 백그라운드 스타일을 설정
  const [variant , setvariant] = useState('dots');
  const [bgColor , setbgColor] = useState('gray');

  const onBgStyledChange = (type:string) => {
    setvariant(type)
  }
  
  return (
    <FlowWrap>
      <Panel position="top-left">
        <div className="box">
          <button type="button" onClick={onConsoleLog}>Node,edge정보</button>
        </div>
        <div className="box">
          <strong>background styled</strong>
          <button type="button" onClick={()=>{onBgStyledChange('dots')}}>dots</button>
          <button type="button" onClick={()=>{onBgStyledChange('lines')}}>lines</button>
          <button type="button" onClick={()=>{onBgStyledChange('cross')}}>cross</button>
        </div>

      </Panel>
      <ReactFlow 
      nodes={nodes} 
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      >
        <Background color={bgColor} variant={variant} />
        <Controls />
      </ReactFlow>
    </FlowWrap>
  );
}