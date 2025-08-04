import Header from "./Header";
import Review from "./Review";

export default function Item(props){
    return (
        <>
            <Header></Header>
            <img src="https://picsum.photos/150/150" alt={props.title} />
            <h4>{props.title}</h4>
            <p>{props.price}</p>
            <div>
                <input type="button" value="구매하기" />
                <input type="button" value="장바구니" />
            </div>
            <Review></Review>
        </>
    )
}