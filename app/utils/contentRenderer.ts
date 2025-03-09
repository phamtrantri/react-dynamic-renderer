import React from "react";

export const nodeToReact = (
  node: INode,
  selectedId?: string,
  onSelectNode?: (id: string) => void,
  hoveredId?: string,
  onHoverNode?: (id: string) => void
): React.ReactElement | null => {
  const convert = (node: INode): React.ReactNode => {
    // Get the appropriate React component based on node type
    const tagName = node.type.toLowerCase();
    const { id, type, value, name, children: _children, ...cssProps } = node;
    // Build props object with styling and other attributes
    const props: { [key: string]: string | object } = {
      id,
      key: id,
      style: {
        ...cssProps,
        position: "absolute",
        left: `${node.x}px`,
        top: `${node.y}px`,
        width: typeof node.width === "string" ? node.width : `${node.width}px`,
        height:
          typeof node.height === "string" ? node.height : `${node.height}px`,
      },
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent event bubbling
        if (onSelectNode) {
          onSelectNode(node.id);
        }
      },
      onMouseOver: (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onHoverNode) {
          onHoverNode(node.id);
        }
      },
    };

    // Add className if this node is selected
    if (selectedId === node.id) {
      props.className = "selectedActive";
    }

    if (hoveredId === node.id) {
      // If className already exists, add a space before adding the new class
      props.className = props.className
        ? `${props.className} hoveredActive`
        : "hoveredActive";
    }

    // Handle specific node types
    if (node.type === "Input") {
      props.value = value || "";
      return React.createElement(tagName, props);
    } else if (type === "P" || type === "Button") {
      // For P and Button, we'll pass the value as children
      return React.createElement(tagName, props, value || "");
    } else if (type === "Img") {
      props.src = value || "";
      props.alt = name || "image";
      return React.createElement(tagName, props);
    }

    // For Div and any other types with children
    const children = _children.map(convert);
    return React.createElement(
      tagName,
      props,
      children.length > 0 ? children : null
    );
  };

  return convert(node) as React.ReactElement;
};

export const findNodeById = (node: INode, id: string): INode | null => {
  if (node.id === id) return node;

  for (const child of node.children) {
    const found = findNodeById(child, id);
    if (found) return found;
  }

  return null;
};

export const updateNode = (rootNode: INode, updatedNode: INode) => {
  const dfs = (node: INode) => {
    if (node.id === updatedNode.id) {
      return updatedNode;
    }
    const children = [];
    for (const child of node.children) {
      const updatedChild = dfs(child);
      children.push(updatedChild);
    }
    node.children = children;
    return node;
  };
  return dfs(rootNode);
};
