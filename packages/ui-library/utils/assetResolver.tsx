interface assetType {
  src: string;
  type?: string;
  [key: string]: any;
};
/**
 * If the src starts with @images, then it will use the require function to load the image. Otherwise,
 * it will just use the src as is.
 * @param {assetType}  - src - the source of the asset
 * @returns A React component that will render a video or image tag depending on the type prop.
 */
export default function AssetResolver({ src, type = "image", ...params }: assetType) {
  if (type == "video") {
    if (src?.startsWith("@videos")) {
      return <iframe src={require(`@videos/${src.replace('@videos/', '')}`)} {...params}></iframe>
    }
    else {
      return <iframe src={src}  {...params}></iframe>
    }
  }
  else {
    if (src?.startsWith("@images")) {
      return <img src={require(`@images/${src.replace('@images/', '')}`)} {...params} />
    }
    else {
      return <img src={src} {...params} />
    }
  }
}
