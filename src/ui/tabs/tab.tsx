import { useState } from 'react';
import { styled } from 'styled-components';

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

const TabsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--border-primary-color);
  margin-bottom: 20px;
`;

const Tab = styled.button<{isSelected: boolean}>`
  all: unset;
  color: black;
  font-size: 18px;
  font-weight: 500;
  margin: 0 20px;
  padding: 10px 10px;
  border-bottom: 3px solid;
  border-color: ${({isSelected}) =>(isSelected ? '#424147' : 'transparent')};
  cursor: pointer;
  &:hover {
    color: #2436A7;
  }

  &:disabled{
    color: gray;
    cursor: auto;
  }
`;
