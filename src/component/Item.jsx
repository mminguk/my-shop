import { Link } from "react-router-dom";
export default function Item(props){
  return (
    <div className='item'>
      <Link to='/item_info'>
        <img src="https://picsum.photos/150/150" alt=""/>
        <h4>{props.title}</h4>
        <p>{props.price}</p>
      </Link>

    </div>
  );
}
