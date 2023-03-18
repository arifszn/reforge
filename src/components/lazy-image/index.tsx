import { useState, Fragment, useEffect } from 'react';

export type LazyImageType = {
  placeholder: React.ReactNode;
  src: string;
  [key: string]: string | React.ReactNode | undefined;
};

const LazyImage = ({ placeholder, src, ...rest }: LazyImageType) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;

    imageToLoad.onload = () => {
      setLoading(false);
    };
  }, [src]);

  return (
    <Fragment>{loading ? placeholder : <img src={src} {...rest} />}</Fragment>
  );
};

export default LazyImage;
