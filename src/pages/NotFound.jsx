import { Link } from "react-router-dom"

export default function NotFound (){
    return (
        <div>
             <h1>404 找不到頁面</h1>
            <Link to="/">回到首頁</Link>
            {/* <a href="/"> 原生的 a標籤處理外部網站連結</a> */}
        </div>
    )
}