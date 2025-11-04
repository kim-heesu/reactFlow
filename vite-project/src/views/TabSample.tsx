import styled from '@emotion/styled';
import { useState } from 'react';

import TabItem from '../components/item/TabItem';

function TabSample(){

    // tab
    const tabInfo = [
        {
            name: "Tab 1",
            dataType: "tab1",
        },
        {
            name: "Tab 2",
            dataType: "tab2",
        },
        {
            name: "Tab 3",
            dataType: "tab3",
        },
    ]
    // tab Content
    const tabContent = {
        "tab1": <div>Content for Tab 1</div>,
        "tab2": <div>Content for Tab 2</div>,
        "tab3": <div>Content for Tab 3</div>,
    }

    type activeTabType = "tab1" | "tab2" | "tab3";
    const [activeTab, setActiveTab] = useState<activeTabType>("tab1");

    return (
        <StyledTabSample>
            <TabItem 
                size="small"
                color="orange"
                colorType="dark"
                item={tabInfo}
                activeTab={activeTab}
                onClick={(dataType:string) => setActiveTab(dataType as activeTabType)}
            />
            {tabContent[activeTab]}
        </StyledTabSample>
    )
}

const StyledTabSample = styled.div`

`

export default TabSample;