import { useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';

export default function Appli() {
  // const etatPanier = useState({});
  // const panier = etatPanier[0];
  // const setPanier = etatPanier[1];
  const [panier, setPanier] = useState({prd001: {}, prd005: {}});

  console.log("la variable d'état qui gère le panier : ", panier);

  return (
    <div className="Appli">
      <Entete panier={panier} />
      <ListeProduits panier={panier} setPanier={setPanier}/>
      <PiedPage />
    </div>
  );
}


/*
let panier =
{
  prd001: {
    prix: 25.99,
    qte: 1
  }
}
*/