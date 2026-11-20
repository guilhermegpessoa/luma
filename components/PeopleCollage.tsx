import Image from 'next/image';
import { collageCircle, collageFrame, type CollageImage } from '@/lib/content';

const { width: FW, height: FH } = collageFrame;
const pctX = (v: number) => `${(v / FW) * 100}%`;
const pctY = (v: number) => `${(v / FH) * 100}%`;

export function PeopleCollage({ images }: { images: CollageImage[] }) {
  return (
    <div
      className="relative mx-auto w-full max-w-[611px]"
      style={{ aspectRatio: `${FW} / ${FH}` }}
    >
      <div
        aria-hidden
        className="absolute rounded-full bg-blue-light"
        style={{
          left: pctX(collageCircle.x),
          top: pctY(collageCircle.y),
          width: pctX(collageCircle.size),
          height: pctY(collageCircle.size),
        }}
      />

      {images.map((img) => (
        <div
          key={img.src}
          className="absolute overflow-hidden rounded-[4px] shadow-[0_4px_16px_rgba(47,91,255,0.12)]"
          style={{
            left: pctX(img.x),
            top: pctY(img.y),
            width: pctX(img.w),
            height: pctY(img.h),
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 130px, 25vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
