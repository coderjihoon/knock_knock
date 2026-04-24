import Image from "next/image";

export type NotionFaceAvatarVariant =
  | "monggeul"
  | "pogeun"
  | "dugeun"
  | "sobok"
  | "banjjak"
  | "jogak"
  | "mulgyeol"
  | "yeoul"
  | "darang"
  | "seubim"
  | "ongi"
  | "byeolbit";

const avatarImageByVariant: Record<NotionFaceAvatarVariant, string> = {
  monggeul: "/notion/woman/notion1.png",
  pogeun: "/notion/man/notion2.png",
  dugeun: "/notion/woman/notion7.png",
  sobok: "/notion/woman/notion8.png",
  banjjak: "/notion/woman/notion11.png",
  jogak: "/notion/man/notion4.png",
  mulgyeol: "/notion/man/notion5.png",
  yeoul: "/notion/man/notion6.png",
  darang: "/notion/man/notion10.png",
  seubim: "/notion/woman/notion12.png",
  ongi: "/notion/woman/notion13.png",
  byeolbit: "/notion/woman/notion14.png",
};

export function NotionFaceAvatar({
  variant,
  className = "",
}: {
  variant: NotionFaceAvatarVariant;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-full border border-dark-olive/10 ${className}`}
    >
      <Image
        src={avatarImageByVariant[variant]}
        alt=""
        fill
        sizes="44px"
        className="object-cover"
      />
    </div>
  );
}
