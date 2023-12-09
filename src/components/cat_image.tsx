interface catImage {
  image: string;
  altText: string;
  licenseType: string;
  licenseURL: string;
  atributionName: string;
  attributionURL: string;
}

const CatImage: React.FC<catImage> = ({
  image,
  altText,
  licenseType,
  licenseURL,
  atributionName,
  attributionURL,
}) => {
  return (
    <>
      <img className="card__image" src={image} alt={altText} />
      <p className="card_text_small">
        Image licensed under <a href={licenseURL}>{licenseType}</a>
        {atributionName && (
          <>
            &nbsp;by <a href={attributionURL}>{atributionName}</a>
          </>
        )}
      </p>
    </>
  );
};

export default CatImage;
