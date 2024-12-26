export default function Page({params}:{params:{id:string}}){

    return (
        <>
        <h2>This is user page {params.id}</h2>
        </>
    )
}