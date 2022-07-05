import Badge from '@mui/material/Badge';
import './BtnAjoutPanier.scss';

export default function BtnAjoutPanier(props) {
    return (
        <Badge badgeContent={180} color="success">
            <button className='BtnAjoutPanier'>Ajouter au panier</button>
        </Badge>
    );
}