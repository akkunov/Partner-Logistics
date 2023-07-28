import '../styles/Header.css'

const Header =  (props) => {
    const {handleHeaderClick, handlePricingClick,handleMainCick,handleFooterClick} = props;

    return(
        <>
            <header className={'header'}>
                <div onClick={handleMainCick}>
                    <h2 >Домой</h2>
                </div>
                <div onClick={handleFooterClick}><h2>Контакты</h2></div>
                <div onClick={handlePricingClick}><h2>Цены</h2></div>
            </header>
        </>
    )
}


export default Header;