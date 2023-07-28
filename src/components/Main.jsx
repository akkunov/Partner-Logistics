import {Section} from "./Section";
import '../styles/Main.css'
export const  MainContent= (props) => {
    const {mainContentRef} = props
    const bgImage3 = `#1D3557`;
    return(
        <Section bgColor={bgImage3}
                 width={'100vm'}
                 height={'100vh'}>
                    <div ref={mainContentRef}
                        className={'title-description'}>
                        <div>
                            <span className={'title-text'}>
                                Уважаемый клиент,
                            </span>
                        </div>
                        <div className={'card-description'}>
                            <h3 className={'description'}>
                                Мы предлагаем вам уникальную возможность разместить вашу рекламу на наших
                                современных LED экранах, которые находятся в привлекательных и стратегически
                                важных местах города. LED экраны обладают высокой яркостью и четкостью
                                изображения, что позволит вашей рекламе быть заметной днем и ночью.
                            </h3>
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_234_943)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M200 50V4.37114e-06L100 0V49.9803C99.9893 22.3751 77.6077 4.37114e-06 50 4.37114e-06H2.18557e-06V100H50C22.3858 100 -1.20706e-06 122.386 0 150L2.18557e-06 200H100L100 150C100 177.614 122.386 200 150 200H200L200 100H150.02C177.625 99.9893 200 77.6077 200 50Z" fill="url(#paint0_linear_234_943)"/>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_234_943" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFD9A0"/>
                                        <stop offset="1" stop-color="#FFF5F1"/>
                                    </linearGradient> <clipPath id="clip0_234_943">
                                    <rect width="200" height="200" fill="white"/>
                                </clipPath> </defs>
                            </svg>
                        </div>

                    </div>
        </Section>
    )
}