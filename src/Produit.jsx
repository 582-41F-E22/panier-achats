import BtnAjoutPanier from './BtnAjoutPanier';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Produit.scss';

export default function Produit({panier, setPanier, id, nom, prix}) {
  function ajouterArticle() {
    if(panier[id]) {
      panier[id].qte++;
    }
    else {
      panier[id] = {prix: prix, qte: 1};
    }
    // Il faut CHANGER l'état "panier" : utiliser le mutateur setPanier()
    // ET lui donner un nouvel objet panier !!!
    // Pour obtenir une nouvelle copie de l'objet panier, il faut le cloner !!
    setPanier({...panier}); // shallow copy
    // setPanier(JSON.parse(JSON.stringify(panier))); // deep copy
    // Autre méthode : Object.assign()
    // setPanier(Object.assign({}, panier)); // shallow copy
  }
  
  // État du bouton
  let btnTexte = "Ajouter au panier";
  let btnQte = 0;
  let btnClasse = "";

  if(panier[id]) {
    btnTexte = <AddCircleOutlineIcon/>;
    btnQte = panier[id].qte;
    btnClasse = "article-present";
  }

  return (
    <article className="Produit">
      <div className="image">
        <img src={"photos-produits/" + id + ".webp"} alt={nom} />
      </div>
      <div className="info">
        <h3>{nom}</h3>
        <p className="prix">{prix} $CA</p>
        <BtnAjoutPanier onClick={ajouterArticle} texte={btnTexte} qte={btnQte} classe={btnClasse}/>
      </div>
    </article>
  );
}