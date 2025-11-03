import styled from '@emotion/styled';
import { useState } from 'react';

import TabItem from '../components/item/TabItem';
import TabContent from '../components/item/TabContent';

function TabSample(){

    // tab
    const tabInfo = [
        {
            name: "Tab 1",
            dataType: "tab1",
            children: <div>Content for Tab 1</div>,
        },
        {
            name: "Tab 2",
            dataType: "tab2",
            children: <div>Content for Tab 2</div>,
        },
        {
            name: "Tab 3",
            dataType: "tab3",
            children: <div>Content for Tab 3</div>,
        },
    ]
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <StyledTabSample>
            <TabItem 
                size="small"
                color="orange"
                colorType="dark"
                item={tabInfo}
                activeTab={activeTab}
                onClick={(dataType:string) => setActiveTab(dataType)}
            />
            <TabContent tabInfo={tabInfo} activeTab={activeTab}/>
        </StyledTabSample>
    )
}

const StyledTabSample = styled.div`

`

export default TabSample;