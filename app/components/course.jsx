function Course({ course }) {
  //console.log(course);

  const { title, description, image } = course;

  return (
    <section className="curso">
      <style jsx="true">{`
        .curso {
          background-image: linear-gradient(
              to right,
              rgb(0 0 0 / 0.65),
              rgb(0 0 0 / 0.7)
            ),
            url(${image.data.attributes.url});
        }
      `}</style>

      <div className="contenedor curso-grid">
        <div className="contenido">
          <h2 className="heading">{title}</h2>
          <p className="texto">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default Course;
