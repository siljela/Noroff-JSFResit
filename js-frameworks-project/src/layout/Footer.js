import React from 'react'

function Footer() {
    return (
        <footer className="footer">
                <ul className="footer-list">
                    <h3>External sources</h3>
                    <li className="footer-list_item"><a href="https://pokeapi.co/">API &rsaquo;</a></li>
                    <li className="footer-list_item"><a href="https://www.thefactsite.com/151-pokemon-facts/">Pokemon facts &rsaquo;</a></li>
                    <li className="footer-list_item"><a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon">What is pokemon? &rsaquo;</a></li>
                </ul>
                <ul className="footer-list">
                    <h3>Social media</h3>
                    <li className="footer-list_item"><a href="twitter.com">Follow us on Twitter &rsaquo;</a></li>
                    <li className="footer-list_item"><a href="facebook.com">Follow us on Facebook &rsaquo;</a></li>
                    <li className="footer-list_item"><a href="instagram.com">Follow us on Instagram &rsaquo;</a></li>
                </ul>
                <ul className="footer-list">
                    <h3>Pokemon cards</h3>
                    <li className="footer-list_item">Poke Inc.</li>
                    <li className="footer-list_item">copyright &commat; pokemon inc.</li>
                    <li className="footer-list_item">published 19.12.2021</li>
                </ul>
        </footer>
    )
}

export default Footer
