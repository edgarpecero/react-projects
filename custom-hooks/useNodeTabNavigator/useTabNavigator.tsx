import { Box, ButtonProps, IconButton, SxProps, Theme, Typography, Tabs, Tab } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { cloneElement, useCallback } from 'react';
import { allyProps } from '../helpers/Utils';

export interface NavigatorNode {
  index: number;
  label: string;
  children?: NavigatorNode[];
  buttonProps?: ButtonProps[];
}

interface RenderIndexChildrenAsButtonsProps {
  nodes: NavigatorNode[];
  value: number;
  element: React.ReactElement;
}

interface BackNavigationButtonProps {
  value: number;
  nodes: NavigatorNode[];
  title?: string;
  goBack: (index: number) => void;
  sx?: SxProps<Theme>;
}

interface NavigatorTabsProps {
  nodes: NavigatorNode[];
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

export const findIndexByLabel = (nodes: NavigatorNode[], label: string): number | null => {
  const node = nodes.find(node => node.label === label);
  if (node) {
    return node.index;
  }
  for (const child of nodes) {
    if (child.children) {
      const index = findIndexByLabel(child.children, label);
      if (index !== null) {
        return index;
      }
    }
  }
  return null;
};

export const findParentIndex = (nodes: NavigatorNode[], index: number): number | null => {
  for (const node of nodes) {
    if (node.index === index) {
      return null;
    }
    if (node.children) {
      const childIndex = node.children.findIndex(child => child.index === index);
      if (childIndex !== -1) {
        return node.index;
      } else {
        const parentIndex = findParentIndex(node.children, index);
        if (parentIndex !== null) {
          return parentIndex;
        }
      }
    }
  }
  return null;
};

export const getNodeByIndex = (nodes: NavigatorNode[], index: number): NavigatorNode | null => {
  for (const node of nodes) {
    if (node.index === index) {
      return node;
    }
    if (node.children) {
      const childNode = getNodeByIndex(node.children, index);
      if (childNode) {
        return childNode;
      }
    }
  }
  return null;
};

const getParentNodeByIndex = (nodes: NavigatorNode[], index: number): NavigatorNode | null => {
  for (const node of nodes) {
    if (node.index === index) {
      return null;
    }
    if (node.children) {
      for (const childNode of node.children) {
        if (childNode.index === index) {
          return node;
        }
      }
      const parentNode = getParentNodeByIndex(node.children, index);
      if (parentNode) {
        return parentNode;
      }
    }
  }
  return null;
}

export const NavigatorTabs = ({ nodes, value, onChange }: NavigatorTabsProps) => {
  const node = getNodeByIndex(nodes, value);
  const selectedNode = node?.children ? node?.children : nodes;
  const tabs = selectedNode.map((tab, index) => <Tab key={`${value}-tab-${index}`} label={tab.label} {...allyProps(index)} />)

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={onChange} aria-label={`navigator-tabs-${node?.label}`}>
        {tabs}
      </Tabs>
    </Box>
  );
};

export const RenderIndexChildrenAsButtons = ({ nodes, value, element }: RenderIndexChildrenAsButtonsProps): React.ReactElement => {
  const node = getNodeByIndex(nodes, value);
  const buttonsWithProps = node?.children?.map((button, index) => {
    return cloneElement(element, { ...button.buttonProps![0], children: button.label, key: index });
  });

  return <>{buttonsWithProps}</>;
};

export const BackNavigationButton = ({ nodes, sx, value, goBack }: BackNavigationButtonProps) => {
  const nodeParent = getParentNodeByIndex(nodes, value);
  const node = getNodeByIndex(nodes, value);

  const handleGoBack = useCallback(() => {
    if (nodeParent !== null) {
      goBack(nodeParent.index);
    }
  }, [nodeParent, goBack]);

  return <>{nodeParent !== null
    ? <Box sx={{ display: 'flex', justifyContent: 'flex-start !important', alignItems: 'center', gap: 1, ...sx }}>
      <IconButton aria-label="delete" onClick={() => handleGoBack()}>
        <ArrowBackIosNewIcon fontSize="inherit" />
      </IconButton>
      <Typography variant='h2' gutterBottom>{node?.label || ''}</Typography>
    </Box>
    : null
  }</>;
};
