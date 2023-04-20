import './HomePage.css'
import { Categoies } from '../../components/Categories/Categories'
import { orders, outerwear, underwear } from '../../orders'

/** Главная страница. */
export const HomePage = () => {
    return (
        <>
            <h5>Главная страница</h5>
            <Categoies categoryName={'Кроссовки'} ordersArray={orders} />
            <Categoies categoryName={'Верхняя одежда'} ordersArray={outerwear} />
            <Categoies categoryName={'Нижняя одежда'} ordersArray={underwear} />
            <Categoies categoryName={'Прочее'} />
        </>
    )
}