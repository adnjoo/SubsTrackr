import Image from "next/image";

export const Icon = ({ name }: { name: string }) => {
  return (
    <Image
      alt={name}
      src={`/icons/${name}.png`}
      className="mb-2 ml-auto h-10 w-10 rounded-3xl bg-white object-contain"
      width={40}
      height={40}
      unoptimized
    />
  );
};
