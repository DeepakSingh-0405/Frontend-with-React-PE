

function Header({title}) {
    return (
        
        <header style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#353434",
            padding: "20px",
            width: "100vw",
            color: "white   ",
            overflow: "hidden",
        }}>
            <h1>{title}</h1>
            <nav style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "between",
                gap: "20px",
                marginTop: "10px"
            }}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header