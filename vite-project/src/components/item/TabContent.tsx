import styled from "@emotion/styled";
import React from "react";

interface TabItemProps {
    tabInfo: {
        name?: string;
        dataType: string; 
        children: React.ReactNode 
    }[];
    activeTab: string;
}

export default function TabItem(props: TabItemProps) {
    const activeChildren = props.tabInfo.filter(tab=> tab.dataType === props.activeTab)
    .map(tab=><React.Fragment key={tab.dataType}>{tab.children}</React.Fragment>);

    return (
        <StyledTabContent>
            {activeChildren}
        </StyledTabContent>
    );
};

const StyledTabContent = styled.div`
    padding: 1.5rem 1.2rem
`;