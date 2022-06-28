import './PiedPage.scss';

export default function PiedPage(props) {
  const annee = (new Date()).getFullYear();

  return (
    <footer className="PiedPage">
      &copy;2019-{annee} Tous droits réservés
    </footer>
  );
}