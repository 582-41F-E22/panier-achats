import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit({panier, setPanier, id, nom, prix}) {
  return (
    <article className="Produit">
      <div className="image">
        <img src={"photos-produits/" + id + ".webp"} alt={nom} />
      </div>
      <div className="info">
        <h3>{nom}</h3>
        <p className="prix">{prix} $CA</p>
        <BtnAjoutPanier />
      </div>
    </article>
  );
}