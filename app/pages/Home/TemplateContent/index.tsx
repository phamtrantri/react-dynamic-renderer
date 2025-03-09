import { nodeToReact } from "@utils/contentRenderer";
import styles from "./style.module.css";
const TEMPLATE_ID = "templateContainer";

interface IProps {
  rootNode: INode;
  selectedNodeId?: string;
  hoveredNodeId?: string;
  onSelectNode: (id: string | undefined) => void;
  onHoverNode: (id: string | undefined) => void;
}

const TemplateContent: React.FC<IProps> = ({
  rootNode,
  selectedNodeId,
  hoveredNodeId,
  onHoverNode,
  onSelectNode,
}) => {
  return (
    <div id={TEMPLATE_ID} className={styles.wrapper}>
      {nodeToReact(
        rootNode,
        selectedNodeId,
        onSelectNode,
        hoveredNodeId,
        onHoverNode
      )}
    </div>
  );
};

export default TemplateContent;
