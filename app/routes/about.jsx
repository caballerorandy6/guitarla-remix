import image from "../../public/img/nosotros.jpg";
import styles from "~/styles/about.css";

export function meta() {
  return {
    title: "GuitarLa - About Us",
    description: "Venta de guitarras, blog de música y mucho más.",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: image,
      as: "image",
    },
  ];
}

function About() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={image} alt="about_image" />

        <div>
          <p>
            Proin finibus pretium dignissim. Vestibulum ante enim, hendrerit at
            nisl in, pharetra ultrices lorem. Mauris volutpat pretium quam, eu
            vehicula mi volutpat quis. Vestibulum vitae mattis augue. Nam eget
            aliquam tortor. Ut posuere interdum mi ut posuere. Duis pulvinar
            velit eu felis lacinia, vel sodales odio condimentum.
          </p>
          <p>
            {" "}
            Nulla condimentum pellentesque cursus. Pellentesque rutrum, neque ac
            faucibus efficitur, tortor diam congue diam, et feugiat eros quam
            sit amet nibh. Aliquam feugiat elementum urna, et hendrerit ex.
            Curabitur ut luctus massa. Mauris mollis mi id metus sollicitudin
            tincidunt. Nulla vitae tellus eget nunc posuere ultrices. Vivamus
            pellentesque tellus sed augue efficitur laoreet. Etiam sed
            pellentesque orci, eget suscipit metus.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
