import Image from 'next/image'

export function Picture({ src, alt }) {
  return (
    <>
      <Image
        className="rounded-md shadow-2xl overflow-hidden"
        src={src}
        alt={alt}
        width={400}
        height={400}
        objectFit="cover"
      />
    </>
  )
}
