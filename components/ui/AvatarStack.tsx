import Image from 'next/image';

export type Avatar = { src: string; alt?: string };

type AvatarStackProps = {
  avatars: Avatar[];
  size?: number;
  ringClassName?: string;
  className?: string;
};

export function AvatarStack({
  avatars,
  size = 28,
  ringClassName = 'border-cream',
  className = '',
}: AvatarStackProps) {
  return (
    <ul className={`flex items-center ${className}`}>
      {avatars.map((a, i) => (
        <li key={a.src} className={i > 0 ? '-ml-2' : ''}>
          <Image
            src={a.src}
            alt={a.alt ?? ''}
            width={size * 2}
            height={size * 2}
            style={{ width: size, height: size }}
            className={`rounded-full border-2 object-cover ${ringClassName}`}
          />
        </li>
      ))}
    </ul>
  );
}
