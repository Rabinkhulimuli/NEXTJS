import Link from "next/link"
export default function Upage(){

    return(
        <>
            <div>
                <h1>dashboard user</h1>
                <ul>
                    <li> <Link href="/dashboard/user/1">User1</Link></li>
                    <li> <Link href="/dashboard/user/2">User2</Link></li>
                    <li> <Link href="/dashboard/user/3">User3</Link></li>
                    <li> <Link href="/dashboard/user/4">User4</Link></li>
                    
                </ul>
                
            </div>
        </>
    )
}