import React from 'react';

// INTERFACES
import { ImageProps } from '../../@types';

const Image: React.FC<ImageProps> = ({ src, classes, alt }: ImageProps) => {
  const [image, setImage] = React.useState<string>();
  React.useEffect(() => {
    (async function fetchImage() {
      await fetch(src)
        .then((response) => setImage(response.url))
        .catch((err) => console.log(err));
    }());
  });
  return (
    <img className={classes} src={image as string} alt={alt} />
  );
};

Image.defaultProps = {
  alt: '',
};

export default Image;
