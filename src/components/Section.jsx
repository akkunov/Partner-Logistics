export const Section = (props) => {
    const {children, bgColor,width, height} = props

    return(
        <section style={{width: width,
            height: height,
            backgroundColor: bgColor }}>
            {children}
        </section>)
}

