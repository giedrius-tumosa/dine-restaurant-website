const FigureImage = (props) => {
  return (
    <figure className={props.className}>
      <img src={props.src} alt={props.alt} width={props.width} height={props} />
    </figure>
  );
};

export default FigureImage;
