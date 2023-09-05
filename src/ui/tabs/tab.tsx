import { Tab, TabsWrapper } from './tabs.styles';
import { useState } from 'react';

type TabsProps = {
  tabs: TabModel[];
  defaultSelectedTabId?: number;
};

export interface TabModel {
  id: number;
  name: string;
  isDisabled?: boolean;
}

export const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
  const [selectedTabId, setSelectedTabId] = useState<number>(
    props.defaultSelectedTabId || 1
  );
  return (
    <TabsWrapper>
      {props.tabs.map((element, id) => (
        <Tab
          key={id}
          onClick={() => setSelectedTabId(element.id)}
          isSelected={element.id === selectedTabId}
          disabled={element.isDisabled}
        >
          {element.name}
        </Tab>
      ))}
    </TabsWrapper>
  );
};
