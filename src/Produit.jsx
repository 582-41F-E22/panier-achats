import './Produit.scss';

export default function Produit(props) {
  return (
    <article className="Produit">
      <div className="image">
        <img src={"/photos-produits/" + props.id + ".webp"} alt={props.nom} />
      </div>
      <div className="info">
        <h3>{props.nom}</h3>
        <p className="prix">{props.prix} $CA</p>
        <button>Ajouter au panier</button>
      </div>
    </article>
  );
}