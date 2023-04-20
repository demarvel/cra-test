import { orders, outerwear } from '../../orders'
import { useLocation } from 'react-router-dom'
import { Categoies } from '../../components/Categories/Categories'

/** Страница со списком товаров. */
export const ProductsPage = () => {
    const { hash } = useLocation()

    return (
        <>
            <h5>Товары</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad omnis tenetur reprehenderit dicta repudiandae 
                voluptas! Doloribus quia unde veniam, nulla ipsum iste quibusdam sunt odio dolor nesciunt corrupti facilis.</p>
            {hash !== '' ? (
                <>
                    {hash === '#cross' && <Categoies categoryName={'Кроссовки'} ordersArray={orders} />}
                    {hash === '#outerwear' && <Categoies categoryName={'Верхняя одежда'} ordersArray={outerwear} />}
                    {hash === '#underwear' && <Categoies categoryName={'Нижняя одежда'} ordersArray={orders} />}
                </>
            ) : (
                <>
                    <Categoies categoryName={'Кроссовки'} ordersArray={orders} />
                    <Categoies categoryName={'Верхняя одежда'} ordersArray={outerwear} />
                    <Categoies categoryName={'Нижняя одежда'} ordersArray={orders} />
                    <Categoies categoryName={'Прочее'} />
                </>
            )}
        </>
    )
}