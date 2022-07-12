import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedPage from './PiedPage';
import Accueil from './Accueil'
import APropos from './APropos';
import UnProduit from "./UnProduit";

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

  const elt = <><div><p>Page non définie</p></div><p>Deuxième ligne</p></>;

  return (
    <div className="Appli">
      <Entete panier={panier} />

      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='nos-produits' element={<ListeProduits panier={panier} setPanier={setPanier}/>}/>
        <Route path='nos-produits/:prdId' element={<UnProduit/>}/>
        <Route path='a-propos-de-nous' element={<APropos/>}/>

        <Route path='*' element={elt}/>
      </Routes>

      <PiedPage />
    </div>
  );
}