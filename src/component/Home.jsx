import { Link } from "react-router-dom"
import ItemList from "./ItemList"
import Header from "./Header";
export default function Home(){
  return (
    <>
      <Header></Header>
      <div>
        <h2>상품목록</h2>
        <ItemList></ItemList>
      </div>
    </>
  );
}