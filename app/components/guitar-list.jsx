import Guitar from "./guitar";

function GuitarList({ guitars }) {
  return (
    <>
      <h2 className="heading">Nuestra Colección</h2>
      {guitars?.length && (
        <div className="guitarras-grid">
          {guitars.map((guitar) => (
            <Guitar key={guitar?.id} guitar={guitar?.attributes} /> //key={guitar.attributes.url}
          ))}
        </div>
      )}
    </>
  );
}

export default GuitarList;
