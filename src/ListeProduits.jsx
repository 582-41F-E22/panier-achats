import './ListeProduits.scss';
import Produit from './Produit';

export default function ListeProduits(props) {
  return (
    <main className="ListeProduits">
      <h2>Produits disponibles</h2>
      <section>
        <Produit id="prd001" nom="T-Shirt rayé noir et blanc" prix={25.99} />
        <Produit id="prd002" nom="Pantalon en cotton" prix="70.95" />
      </section>
    </main>
  );
}