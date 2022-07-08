import './Entete.scss';
// import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Entete(props) {
  // Code JS du composant
  const panier = props.panier;
  const tabPanier = Object.values(panier);

  const infoPanier = calculerSommaire(tabPanier);
  console.log("Tableau des valeurs du panier : ", tabPanier);

  // Renvoyer le "rendu" visuel du composant
  return (
    <header className='Entete'>
      <h2>Magasin</h2>
      <nav>
        <ul>
          <li>mon compte</li>
          <li>
            <Badge badgeContent={Object.values(panier).length} color="primary">
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
                <span>358.96</span>
              </div>
              <div>
                <span>Taxes</span>
                <span>52.56</span>
              </div>
              <div>
                <span>Total</span>
                <span>411.62</span>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function calculerSommaire(tabPanier) {
  return {
    articlesDiff: tabPanier.length,
    articlesTot: tabPanier.reduce((acc, cour)=> acc + cour.qte, 0),
    sousTotal: 100,
    taxes: 15,
    total: 115
  }
}