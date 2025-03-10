import { isJsonString } from "@utils/validation";
import styles from "./style.module.css";
import React, { useEffect, useState } from "react";

interface IProps {
  selectedNode: INode | null;
  onUpdateNode: (updatedNode: INode) => void;
}

const Settings: React.FC<IProps> = ({ selectedNode, onUpdateNode }) => {
  const [cssText, setCssText] = useState<string>("{}");

  useEffect(() => {
    if (selectedNode) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, children, name, type, value, ...cssProps } = selectedNode;
      setCssText(JSON.stringify(cssProps, null, 2));
    } else {
      setCssText("{}");
    }
  }, [selectedNode]);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCssText(value);

    if (!isJsonString(value)) return;

    const updatedNode: INode = {
      id: selectedNode?.id,
      children: selectedNode?.children,
      type: selectedNode?.type,
      value: selectedNode?.value,
      name: selectedNode?.name,
      ...JSON.parse(value),
    };
    onUpdateNode(updatedNode);
  };
  return (
    <aside className={styles.wrapper}>
      <div className={styles.header}>
        <span>Page settings</span>
      </div>
      {!selectedNode ? null : (
        <div className={styles.componentSelector}>
          <label>#{selectedNode.id}</label>
          <textarea
            className={styles.inspector}
            style={{ height: "200px" }}
            value={cssText}
            onChange={handleOnChange}
          />
        </div>
      )}
    </aside>
  );
};

export default Settings;
