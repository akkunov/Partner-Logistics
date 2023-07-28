import {Section} from "./Section";
import '../styles/Pricing.css'
import {useState} from "react";
import { motion } from "framer-motion";

const ledScreensData = [
    {
        location: "Ул. Фрунзе - ул. Абдрахманова (Ю-В) (напротив цирка) (3х6 м)",
        inventoryNumber: "Инв. №12",
        screenSize: "576 x 288 пикселей (6x3 метра)",
        durations: {
            "10 секунд": 20000,
            "15 секунд": 25000,
        },
    },
    {
        location: "Фучика/Рыскулова",
        inventoryNumber: "Инвентаризационный код № 14",
        screenSize: "576 x 288 пикселей (6x3 метра)",
        durations: {
            "10 секунд": 20000,
            "15 секунд": 25000,
        },
    },
    {
        location: "Ул. Ч. Валиханова (пр. Чуй – Чолпон-Атинского)",
        inventoryNumber: "Инвентаризационный код №39",
        screenSize: "576 x 288 пикселей (6x3 метра)",
        durations: {
            "10 секунд": 20000,
            "15 секунд": 25000,
        },
    },
    {
        location: "Гагарина/Тернопольская",
        inventoryNumber: "Инвентаризационный код № 19",
        screenSize: "576 x 288 пикселей (6x3 метра)",
        durations: {
            "10 секунд": 17000,
            "15 секунд": 22000,
        },
    },
    {
        location: "Гагарина/Бронированная",
        inventoryNumber: "Инвентаризационный код № 22",
        screenSize: "576 x 288 пикселей (6x3 метра)",
        durations: {
            "10 секунд": 17000,
            "15 секунд": 22000,
        },
    },
    {
        location: "Жайыл-Баатыр/Кара-Кужур (ЖМ Арча-Бешик по магистрали, район физкультурного оздоровительного комплекса “Газпром”)",
        inventoryNumber: "Инвентаризационный код № 24",
        screenSize: "576 x 288 пикселей (6x3 метра)",
        durations: {
            "10 секунд": 17000,
            "15 секунд": 22000,
        },
    },
    {
        location: "Жайыл-Баатыр/Айылчиева (ЖМ Арча-Бешик по магистрали, район отеля “Garden Hotel SPA”)",
        inventoryNumber: "Инвентаризационный код № 26",
        screenSize: "576 x 288 пикселей (6x3 метра)",
        durations: {
            "10 секунд": 17000,
            "15 секунд": 22000,
        },
    },
    {
        location: "Пр. Чуй - ул. Павлова (С-З)",
        inventoryNumber: "Инвентаризационный код №1",
        screenSize: "4x3 метра",
        durations: {
            "10 секунд": 17000,
            "15 секунд": 22000,
        },
    },
    {
        location: "Пр. Чуй - ул. Фучика (С-В)",
        inventoryNumber: "Инвентаризационный код №5",
        screenSize: "4x3 метра",
        durations: {
            "10 секунд": 17000,
            "15 секунд": 22000,
        },
    },
    {
        location: "Ул. Гагарина – ул. Бронированная (Ю-З)",
        inventoryNumber: "Инвентаризационный код №21",
        screenSize: "576 x 288 пикселей (6x3 метра)",
        durations: {
            "10 секунд": 17000,
            "15 секунд": 22000,
        },
    },
    {
        location: "Ул. Жайыл Баатыра - ул. Сары Булун (С-В, ЖМ Арча-Бешик по магистрали, район отеля “Garden Hotel SPA”)",
        inventoryNumber: "Инвентаризационный код №28",
        screenSize: "576 x 288 пикселей (6x3 метра)",
        durations: {
            "10 секунд": 17000,
            "15 секунд": 22000,
        },
    },
];

export const Pricing = (props) => {
    const [open, setOpen] = useState(null);
    const {pricingRef} = props;
    const bgColor = "#A8DADC";
    const width = "100vm";
    const height = "auto";

    const openMenu = (index) => {
        setOpen((prevIndex) => (prevIndex === index ? null : index));
    };


    return (
        <Section bgColor={bgColor} width={width} height={height}>
            <div ref={pricingRef}
                className={'wrap'}>
                <div>
                    <a href={'https://2gis.kg/bishkek/geo/15763337430171930?m=74.611672%2C42.868771%2F19.35'}>fsdgs</a>
                    <span className={'description-3rd'}>Описание доступных локаций и стоимость размещения на 1 месяц:</span>
                </div>
                    <div className="box-wrapper"
                    >
                        {ledScreensData.length !== 0 &&
                            ledScreensData.map((item, index) => (
                                <div
                                    key={index}
                                    className="item-wrapper"
                                    onClick={() => openMenu(index)}
                                    style={{height : open === index ? 'auto' : '20vh',
                                        marginBottom: "10px"}}

                                >
                                    <div className="location">
                                        <motion.a whileTap={{scale: 0.9}}>{item.location}</motion.a>
                                    </div>
                                    <span
                                        className={`box ${open === index ? "open" : ""}` }
                                        style={{marginBottom: "10px"}}
                                    >
                                        <p>
                                          <i> {item.inventoryNumber}</i>
                                        </p>
                                        <p>📏 Размеры экрана: {item.screenSize}</p>
                                        <span>💼 Стоимость размещения:</span>
                                        <p>
                                          10 секунд: {item.durations["10 секунд"]} сом
                                          <br />
                                          15 секунд: {item.durations["15 секунд"]} сом
                                        </p>
                                      </span>
                                </div>
                            ))}
                    </div>
            </div>
        </Section>
    );
};