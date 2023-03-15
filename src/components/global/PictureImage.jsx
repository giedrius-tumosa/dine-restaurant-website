import { nanoid } from "nanoid";

const PictureImage = (props) => {
  return (
    <picture className={props.className}>
      {props.sources.map((source) => (
        <source media={source.media} srcSet={source.srcSet} key={nanoid()} />
      ))}
      <img
        src={props.img.src}
        alt={props.img.alt}
        width={props.img.width}
        height={props.img.height}
      />
    </picture>
  );
};

export default PictureImage;

const props = {
  source: [
    {
      srcset: "",
      media: "",
    },
    {
      srcset: "",
      media: "",
    },
  ],
  img: {
    src: "",
    alt: "",
    srcset: "",
  },
};
