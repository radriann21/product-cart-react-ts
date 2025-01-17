type ImageCardProps = {
  image: Image,
  name: string
}

export const ImageCard = ({ name, image }: ImageCardProps) => {
  return (
    <picture className="w-full rounded-md overflow-hidden">
      <source media="(min-width: 1024px)" srcSet={image.desktop} />
      <source media="(min-width: 768px)" srcSet={image.tablet} />
      <img className="w-full rounded-md object-cover" src={image.mobile} alt={name} />
    </picture>
  )
}