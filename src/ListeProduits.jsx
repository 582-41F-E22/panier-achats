import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {
  // console.log('Tableau des produits : ', tabProduits);
  // let tabJsxProduits = [];
  // for (let i = 0; i < tabProduits.length; i++) {
  //   tabJsxProduits[i] = <Produit id={tabProduits[i].id} nom={tabProduits[i].nom} prix={tabProduits[i].prix} />;
  // }

  return (
    <main className="ListeProduits">
      <h2>Produits disponibles</h2>
      <section>
        {tabProduits.map(
          prd => <Produit id={prd.id} nom={prd.nom} prix={prd.prix}/>
        )}
        {/* {tabJsxProduits} */}
      </section>
    </main>
  );
}