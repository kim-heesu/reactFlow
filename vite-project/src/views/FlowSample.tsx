import { useGetList } from "@/api/service/project";

export default function FlowSample(){
    const { data } = useGetList();
    return (
        <>ddd
            {data?.map(item => <div key={item.id}>{item.name}</div>)}
        </>
    )
}