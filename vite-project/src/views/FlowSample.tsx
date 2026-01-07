import { useGetList } from "@/api/service/project";

export default function FlowSample(){
    const { data } = useGetList();
    return (
        <>ddd
            {data}
        </>
    )
}