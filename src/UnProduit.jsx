import { useParams } from "react-router-dom";
export default function UnProduit() {
    let params = useParams();
    return (
        <section>
            <h2>Détail du produit</h2>
            <p>Identifiant du produit : {params.prdId}</p>
        </section>
    );
}