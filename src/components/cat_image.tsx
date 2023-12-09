interface catImage {
  image: string;
  altText: string;
}

const CatImage: React.FC<catImage> = ({ image, altText }) => {
  return (
    <>
      <img className="card__image" src={image} alt={altText} />
    </>
  );
};

export default CatImage;
