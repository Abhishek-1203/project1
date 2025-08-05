import './footer.css';
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} slncomputers. All rights reserved.</p>
                <div className="socials">
                    <a href="https://www.instagram.com/slncomputer/" target="_blank" rel="noopener noreferrer">Instagram</a> |
                    <a href='https://youtube.com/@slncomputer' target='_blank' rel='noopener noreferrer'>Youtube</a>
                </div>
            </footer>

        </>
    )
}