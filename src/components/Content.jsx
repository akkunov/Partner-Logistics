
import {Pricing} from "./Pricing";
import {MainContent} from "./Main";
import {HeaderSection} from "./HeaderSection";
import {Footer} from "./Footer";
import {useEffect, useRef} from "react";

export const Content = () => {
    const headerRef = useRef(null);
    const mainContentRef = useRef(null);
    const pricingRef = useRef(null);
    const contactRef = useRef(null);

    const handleHeaderClick = () => {
        if (headerRef.current) {
            headerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleMainContentClick = () => {
        if (mainContentRef.current) {
            mainContentRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handlePricingClick = () => {
        if (pricingRef.current) {
            pricingRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleFooterClick = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
        return(
            <>
                <HeaderSection  headeRef={headerRef}
                                handleHeaderClick={handleHeaderClick}
                                handleMainCick={handleMainContentClick}
                                handlePricingClick={handlePricingClick}
                                handleFooterClick={handleFooterClick}

                />
                    <MainContent
                        mainContentRef={mainContentRef}

                    />
                    <Pricing
                        pricingRef={pricingRef}

                    />
                    <Footer contactREf={contactRef}/>
            </>
            )

}