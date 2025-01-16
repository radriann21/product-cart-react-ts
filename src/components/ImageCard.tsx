type ImageCardProps = {
  image: Image,
  name: string
}

export const ImageCard = ({ name, image }: ImageCardProps) => {
  return (
    <picture className="w-full rounded-md overflow-hidden">
      <img className="w-full rounded-md object-cover" src={image.desktop} alt={name} />
    </picture>
  )
}