import './Entete.scss';
// import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from "react-router-dom";

export default function Entete(props) {
  // Code JS du composant
  const panier = props.panier;
  const tabPanier = Object.values(panier);

  const infoPanier = calculerSommaire(tabPanier);
  console.log("Tableau des valeurs du panier : ", tabPanier);

  // Renvoyer le "rendu" visuel du composant
  return (
    <header className='Entete'>
      <h2><Link to="/">Magasin</Link></h2>

      <nav className="nav-principale">
        <span><NavLink to="/nos-produits" className={({isActive})=>(isActive) ? 'nav-active' : ''}>Nos produits</NavLink></span>
        <span><NavLink to="/a-propos-de-nous" className={({isActive})=>(isActive) ? 'nav-active' : ''}>A propos de nous</NavLink></span>
      </nav>

      <nav className='nav-secondaire'>
        <ul>
          <li>mon compte</li>
          <li>
            <Badge badgeContent={infoPanier.articlesTot} color="primary">
              <label htmlFor="cc-sommaire-panier">
                <ShoppingCartIcon />
              </label>
            </Badge>
            <input type="checkbox" id="cc-sommaire-panier" />
            <div className="sommaire-panier">
              <h3>Sommaire du panier</h3>
              <div>
                <span>Articles différents</span>
                <span>{infoPanier.articlesDiff}</span>
              </div>
              <div>
                <span>Articles totaux</span>
                <span>{infoPanier.articlesTot}</span>
              </div>
              <div>
                <span>Sous-total</span>
                <span>{infoPanier.sousTotal}</span>
              </div>
              <div>
                <span>Taxes</span>
                <span>{infoPanier.taxes}</span>
              </div>
              <div>
                <span>Total</span>
                <span>{infoPanier.total}</span>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function calculerSommaire(tabPanier) {
  let st = tabPanier.reduce((acc, article)=> acc + (article.qte*article.prix), 0);
  let taxes = 0.14995*st
  return {
    articlesDiff: tabPanier.length,
    articlesTot: tabPanier.reduce((acc, cour)=> acc + cour.qte, 0),
    sousTotal: st.toFixed(2),
    taxes: taxes.toFixed(2),
    total: (st+taxes).toFixed(2)
  }
}