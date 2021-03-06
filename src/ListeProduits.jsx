import './ListeProduits.scss';
import Produit from './Produit';
// import tabProduits from './data/produits.json';
import { Link } from "react-router-dom";
import {bdFirestore} from './firebase/init';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function ListeProduits({panier, setPanier}) {
  // console.log('Tableau des produits : ', tabProduits);
  // let tabJsxProduits = [];
  // for (let i = 0; i < tabProduits.length; i++) {
  //   tabJsxProduits[i] = <Produit id={tabProduits[i].id} nom={tabProduits[i].nom} prix={tabProduits[i].prix} />;
  // }

  const [produits, setProduits] = useState([]);

  useEffect(()=>
    () => getDocs(collection(bdFirestore, 'produits')).then(
      qs => setProduits(qs.docs.map(doc => ({id: doc.id, ...doc.data()})))
    )
  , []);

  return (
    <main className="ListeProduits">
      <h2>Produits disponibles</h2>
      <section>
        {produits.map(
          prd => 
            <Link key={prd.id} to={`/nos-produits/${prd.id}`}>
              <Produit panier={panier} setPanier={setPanier} id={prd.id} nom={prd.nom} prix={prd.prix}/>
            </Link>
        )}
        {/* {tabJsxProduits} */}
      </section>
    </main>
  );
}