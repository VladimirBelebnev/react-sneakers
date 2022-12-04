import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Drawer from "./components/Drawer/Drawer";

const array = [
    {
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "12 999",
        img: "1.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Air Max 270",
        price: "12 999",
        img: "2.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "8 499",
        img: "3.jpg",
    },
    {
        name: "Кроссовки Puma X Aka Boku Future Rider",
        price: "8 999",
        img: "4.jpg",
    },
    {
        name: "Мужские Кроссовки Under Armour Curry 8",
        price: "15 199",
        img: "5.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Kyrie 7",
        price: "11 299",
        img: "6.jpg",
    },
    {
        name: "Мужские Кроссовки Jordan Air Jordan 11",
        price: "10 799",
        img: "7.jpg",
    },
    {
        name: "Мужские Кроссовки Nike LeBron XVIII",
        price: "16 499",
        img: "8.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Lebron XVIII Low",
        price: "13 999",
        img: "9.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: "8 499",
        img: "10.jpg",
    },
    {
        name: "Кроссовки Puma X Aka Boku Future Rider",
        price: "8 999",
        img: "11.jpg",
    },
    {
        name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
        price: "11 299",
        img: "12.jpg",
    },
];

const App = () => {
    return (
        <>
            {/* <Drawer /> */}
            <div className="wrapper">
                <Header />
                <Content array={array} />
            </div>
        </>
    );
};

export default App;
