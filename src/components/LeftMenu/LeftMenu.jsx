import { Nav } from 'react-bootstrap'

/** Компонент с отображением левого меню */
export const LeftMenu = () => {
    return (
        <>
            <h5>Товары</h5>
            <Nav className="flex-column">
                <Nav.Link href="/products#cross">Кроссовки</Nav.Link>
                <Nav.Link href="/products#outerwear">Верхняя одежда</Nav.Link>
                <Nav.Link href="/products#underwear">Нижняя одежда</Nav.Link>
            </Nav>
        </>
    )
}