
export default function Footer() {
    return (
        <footer style={{
            backgroundColor: "#919191",
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "1rem",
            textAlign: "center",
        }}>
            <p>Copyright &copy; 2024 My React App. All rights reserved.</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '0.5rem', }}>
                <nav style={{ display: 'flex', gap: '0.75rem' }}>
                    <a href="#" style={{ color: '#007bff', textDecoration: 'none', fontSize: '0.9rem' }}>Home</a>
                    <a href="#" style={{ color: '#007bff', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
                    <a href="#" style={{ color: '#007bff', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
                </nav>
                <small style={{ color: '#666', fontSize: '0.85rem' }}>Built with React • v1.0</small>
            </div>


        </footer>
    );

}