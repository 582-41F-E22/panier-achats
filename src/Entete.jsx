import './Entete.scss';
// import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Entete(props) {
  // Code JS du composant

  // Renvoyer le "rendu" visuel du composant
  return (
    <header className='Entete'>
      <h2>Magasin</h2>
      <nav>
        <ul>
          <li>mon compte</li>
          <li>
            <Badge badgeContent={5} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </li>
        </ul>
      </nav>
    </header>
  );
}