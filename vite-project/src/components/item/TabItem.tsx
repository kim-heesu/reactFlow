import styled from "@emotion/styled";

interface TabInfoProps {
    name: string;
    dataType: string;
    children?: React.ReactNode;
}
interface TabItemProps {
    size: "small" | "medium" | "large";
    color: string;
    colorType: string;
    item: TabInfoProps[];
    onClick: (dataType: string) => void; // dataType 전달
    activeTab: string;
}

export default function TabItem(props: TabItemProps) {
    return (
        <StyledTabItem color={props.color}> 
            {props.item.map((tab: TabInfoProps) => (
                <li key={tab.dataType} datatype={tab.dataType}>
                    <StyledTabBtn 
                    colorType={props.colorType} 
                    className={tab.dataType == props.activeTab ? "active" : ""}
                    onClick={() => props.onClick(tab.dataType)}>
                        {tab.name}
                    </StyledTabBtn>
                </li>
            ))}
        </StyledTabItem>
    );
};

const StyledTabItem = styled.ul<{color: string}>`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0 0.4rem;
    background: ${(props) => props.color};
`;
const StyledTabBtn = styled.button<{colorType: string}>`
    padding: 1.2rem 1rem;
    font-size: 1.2rem;
    opacity: 0.8;
    color: ${(props)=> props.colorType === "dark" ? "#FFFFFF" : "#000000"}; 
    &.active {
        opacity: 1;
    }
`;