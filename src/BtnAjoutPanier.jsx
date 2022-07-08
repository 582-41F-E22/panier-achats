import Badge from '@mui/material/Badge';
import './BtnAjoutPanier.scss';

export default function BtnAjoutPanier({onClick, classe, qte, texte}) {
    return (
        <Badge badgeContent={qte} color="success">
            <button onClick={onClick} className={`BtnAjoutPanier ${classe}`}>{texte}</button>
        </Badge>
    );
}