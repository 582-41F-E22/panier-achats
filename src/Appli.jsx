import { useEffect, useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';

export default function Appli() {
  // État du compteur de clic
  const [compteurClic, setCompteurClic] = useState(0);

  // const etatPanier = useState({});
  // const panier = etatPanier[0];
  // const setPanier = etatPanier[1];
  // Remarquez l'utilisation du Hook useState()
  // Remarquez l'utilisation de l'initialisation "paresseuse"
  const [panier, setPanier] = useState(
    () => JSON.parse(window.localStorage.getItem('tapw-panier')) || {}
  );

  // Exécuter du code lorsque un état change après le chargement du composant
  // Crochet (Hook) : useEffect()
  useEffect(
    ()=> {
      console.log("On écrit le panier dans localStorage : ", panier);
      window.localStorage.setItem('tapw-panier', JSON.stringify(panier));
    }
  , [panier]); // deps

  

  return (
    <div className="Appli">
      <Entete panier={panier} />
      <button onClick={()=>setCompteurClic(compteurClic+1)}>Nombre de clic : {compteurClic}</button>
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