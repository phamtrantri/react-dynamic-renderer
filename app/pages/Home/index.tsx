import Header from "@components/Header";
import type { Route } from "../../+types/root";
import Settings from "./Settings";
import TemplateContent from "./TemplateContent";
import styles from "./style.module.css";
import { template as _rootNode } from "@data/template";
import { useState } from "react";
import { findNodeById, updateNode } from "@utils/contentRenderer";

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Template Settings" },
    { name: "description", content: "Template Settings" },
  ];
}

const Home = () => {
  const [rootNode, setRootNode] = useState<INode>(_rootNode);
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>(
    undefined
  );
  const [hoveredNodeId, setHoveredNodeId] = useState<string | undefined>(
    undefined
  );

  const selectedNode = selectedNodeId
    ? findNodeById(rootNode, selectedNodeId)
    : null;

  const handleUpdateNode = (updatedNode: INode) => {
    const newRootNode = updateNode(rootNode, updatedNode);
    setRootNode({ ...newRootNode });
  };

  return (
    <main className={styles.wrapper}>
      <Header />
      <section className={styles.body}>
        <TemplateContent
          rootNode={rootNode}
          selectedNodeId={selectedNodeId}
          hoveredNodeId={hoveredNodeId}
          onHoverNode={setHoveredNodeId}
          onSelectNode={setSelectedNodeId}
        />
        <Settings selectedNode={selectedNode} onUpdateNode={handleUpdateNode} />
      </section>
    </main>
  );
};
export default Home;
