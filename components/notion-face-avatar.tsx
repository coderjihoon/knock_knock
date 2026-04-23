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

type HairStyle =
  | "wave"
  | "crop"
  | "bob"
  | "bun"
  | "fringe"
  | "parted"
  | "rounded"
  | "curly";

type EyeStyle = "dots" | "smile" | "closed";
type MouthStyle = "soft" | "smile" | "flat";
type AccessoryStyle = "none" | "glasses" | "clip" | "earring";

type AvatarSpec = {
  background: string;
  glow: string;
  skin: string;
  shirt: string;
  hair: string;
  hairShade: string;
  eyebrow: string;
  eye: string;
  lip: string;
  blush: string;
  accessoryColor: string;
  hairStyle: HairStyle;
  eyeStyle: EyeStyle;
  mouthStyle: MouthStyle;
  accessory: AccessoryStyle;
};

const avatarSpecs: Record<NotionFaceAvatarVariant, AvatarSpec> = {
  monggeul: {
    background: "#F5F1E8",
    glow: "#E0E7D5",
    skin: "#E8C2AD",
    shirt: "#9DAC84",
    hair: "#5B4638",
    hairShade: "#7A6354",
    eyebrow: "#564338",
    eye: "#3C342E",
    lip: "#A56A61",
    blush: "#E6A596",
    accessoryColor: "#D5DDC5",
    hairStyle: "wave",
    eyeStyle: "smile",
    mouthStyle: "soft",
    accessory: "none",
  },
  pogeun: {
    background: "#ECE7DC",
    glow: "#DCE3CE",
    skin: "#D7A287",
    shirt: "#AEBB91",
    hair: "#3E332D",
    hairShade: "#5A4C45",
    eyebrow: "#3A302A",
    eye: "#352D28",
    lip: "#8E6158",
    blush: "#D99688",
    accessoryColor: "#B1BE8B",
    hairStyle: "crop",
    eyeStyle: "dots",
    mouthStyle: "flat",
    accessory: "glasses",
  },
  dugeun: {
    background: "#E9EDE4",
    glow: "#F7F3EC",
    skin: "#EEC8B1",
    shirt: "#D1C2A1",
    hair: "#63453D",
    hairShade: "#825D52",
    eyebrow: "#5D433A",
    eye: "#3E3530",
    lip: "#AD7067",
    blush: "#EAAE9E",
    accessoryColor: "#C6D09A",
    hairStyle: "bob",
    eyeStyle: "smile",
    mouthStyle: "smile",
    accessory: "clip",
  },
  sobok: {
    background: "#F6F2E9",
    glow: "#DFE6D4",
    skin: "#C98F74",
    shirt: "#8FA26C",
    hair: "#2E2521",
    hairShade: "#59453E",
    eyebrow: "#2E2521",
    eye: "#2E2521",
    lip: "#955C57",
    blush: "#D79A8F",
    accessoryColor: "#E6D4BF",
    hairStyle: "bun",
    eyeStyle: "closed",
    mouthStyle: "soft",
    accessory: "earring",
  },
  banjjak: {
    background: "#EEE8DE",
    glow: "#D8E0CB",
    skin: "#E2B89D",
    shirt: "#7F9361",
    hair: "#46352E",
    hairShade: "#6B564D",
    eyebrow: "#45342D",
    eye: "#342C28",
    lip: "#8F6258",
    blush: "#E2A08F",
    accessoryColor: "#AAB88A",
    hairStyle: "fringe",
    eyeStyle: "dots",
    mouthStyle: "smile",
    accessory: "earring",
  },
  jogak: {
    background: "#F4F0E7",
    glow: "#E0E7D5",
    skin: "#C88D6F",
    shirt: "#BAC59A",
    hair: "#1E1917",
    hairShade: "#4A3D37",
    eyebrow: "#211B19",
    eye: "#211B19",
    lip: "#8C5A54",
    blush: "#D99688",
    accessoryColor: "#CED8B8",
    hairStyle: "parted",
    eyeStyle: "smile",
    mouthStyle: "flat",
    accessory: "none",
  },
  mulgyeol: {
    background: "#EAEDE2",
    glow: "#F8F4ED",
    skin: "#E0B297",
    shirt: "#879A69",
    hair: "#6A5648",
    hairShade: "#8B7466",
    eyebrow: "#604E42",
    eye: "#433732",
    lip: "#A06960",
    blush: "#E4A696",
    accessoryColor: "#C9D2A2",
    hairStyle: "wave",
    eyeStyle: "dots",
    mouthStyle: "soft",
    accessory: "none",
  },
  yeoul: {
    background: "#EFE9DE",
    glow: "#DBE2CF",
    skin: "#EDCDB6",
    shirt: "#9CAE7E",
    hair: "#443731",
    hairShade: "#6B5A54",
    eyebrow: "#473933",
    eye: "#362E2B",
    lip: "#A36E67",
    blush: "#E9B2A4",
    accessoryColor: "#BFCB97",
    hairStyle: "rounded",
    eyeStyle: "closed",
    mouthStyle: "smile",
    accessory: "glasses",
  },
  darang: {
    background: "#F7F3EA",
    glow: "#DFE6D5",
    skin: "#D9A98D",
    shirt: "#8A9D70",
    hair: "#352923",
    hairShade: "#62504A",
    eyebrow: "#312722",
    eye: "#312722",
    lip: "#905E58",
    blush: "#DA9A8D",
    accessoryColor: "#D7E0BE",
    hairStyle: "crop",
    eyeStyle: "dots",
    mouthStyle: "smile",
    accessory: "none",
  },
  seubim: {
    background: "#E8EDE2",
    glow: "#F5F2EA",
    skin: "#EFC1A5",
    shirt: "#BEC8A9",
    hair: "#5F4D42",
    hairShade: "#826D61",
    eyebrow: "#5A493F",
    eye: "#3E3632",
    lip: "#AA7168",
    blush: "#EDB3A4",
    accessoryColor: "#BAC690",
    hairStyle: "bob",
    eyeStyle: "smile",
    mouthStyle: "soft",
    accessory: "clip",
  },
  ongi: {
    background: "#F2ECE2",
    glow: "#DCE5D2",
    skin: "#C88869",
    shirt: "#889B70",
    hair: "#241D1A",
    hairShade: "#584A44",
    eyebrow: "#241D1A",
    eye: "#241D1A",
    lip: "#8D5E58",
    blush: "#D79689",
    accessoryColor: "#D1D8B1",
    hairStyle: "curly",
    eyeStyle: "dots",
    mouthStyle: "flat",
    accessory: "earring",
  },
  byeolbit: {
    background: "#EDE7DC",
    glow: "#D8E0CB",
    skin: "#E6C2AA",
    shirt: "#A8B687",
    hair: "#4E3E37",
    hairShade: "#6F5C53",
    eyebrow: "#4A3B35",
    eye: "#352D29",
    lip: "#9F6960",
    blush: "#E3A79A",
    accessoryColor: "#C8D4A2",
    hairStyle: "fringe",
    eyeStyle: "smile",
    mouthStyle: "soft",
    accessory: "clip",
  },
};

function HairBack({
  style,
  color,
}: {
  style: HairStyle;
  color: string;
}) {
  switch (style) {
    case "bun":
      return (
        <>
          <circle cx="29" cy="10" r="5" fill={color} />
          <path d="M8 18C8 10 14 6 22 6C30 6 36 11 36 19V28H8V18Z" fill={color} />
        </>
      );
    case "curly":
      return (
        <>
          <circle cx="15" cy="13" r="5" fill={color} />
          <circle cx="22" cy="10" r="6" fill={color} />
          <circle cx="30" cy="13" r="5" fill={color} />
          <path d="M9 19C10 13 15 9 22 9C29 9 34 13 35 19V27H9V19Z" fill={color} />
        </>
      );
    case "wave":
      return <path d="M8 19C8 10 14 6 22 6C30 6 36 11 36 20V29H8V19Z" fill={color} />;
    case "bob":
      return <path d="M9 18C9 11 14 7 22 7C30 7 35 11 35 18V32H9V18Z" fill={color} />;
    case "parted":
      return <path d="M9 19C9 11 15 7 22 7C29 7 35 11 35 19V29H9V19Z" fill={color} />;
    case "rounded":
      return <path d="M8 18C8 11 14 6 22 6C30 6 36 11 36 18V27H8V18Z" fill={color} />;
    case "fringe":
      return <path d="M8 19C9 11 14 6 22 6C30 6 35 11 36 19V28H8V19Z" fill={color} />;
    case "crop":
    default:
      return <path d="M10 17C11 10 16 7 22 7C29 7 34 11 35 17V25H10V17Z" fill={color} />;
  }
}

function HairFront({
  style,
  color,
  shade,
}: {
  style: HairStyle;
  color: string;
  shade: string;
}) {
  switch (style) {
    case "wave":
      return (
        <>
          <path d="M12 16C13 10 17 7 22 7C27 7 31 10 33 15C31 14 28 13 25 14C22 15 20 18 17 18C15 18 13 17 12 16Z" fill={shade} />
          <path d="M10 18C11 12 16 8 22 8C27 8 31 11 33 17C30 16 28 16 26 18C24 20 22 22 18 22C15 22 12 20 10 18Z" fill={color} />
        </>
      );
    case "crop":
      return (
        <>
          <path d="M11 16C13 11 17 8 22 8C27 8 31 10 33 15C28 15 25 11 20 12C16 12 13 14 11 16Z" fill={shade} />
          <path d="M11 16C14 12 18 10 22 10C27 10 30 12 33 15C30 19 26 20 22 20C18 20 14 19 11 16Z" fill={color} />
        </>
      );
    case "bob":
      return (
        <>
          <path d="M11 15C13 9 18 7 22 7C27 7 31 10 33 15C31 15 29 16 27 19C25 21 24 22 22 22C19 22 17 20 15 18C13 16 12 15 11 15Z" fill={color} />
          <path d="M15 15C17 12 19 10 22 10C26 10 29 12 31 15C28 15 26 16 24 17C22 18 19 18 15 15Z" fill={shade} />
        </>
      );
    case "bun":
      return (
        <>
          <path d="M12 15C14 10 17 8 22 8C27 8 31 11 32 15C28 13 25 13 22 14C18 15 15 16 12 15Z" fill={shade} />
          <path d="M10 17C13 12 17 10 22 10C28 10 31 13 34 17C30 18 28 19 26 22C24 24 20 24 17 22C14 20 12 18 10 17Z" fill={color} />
        </>
      );
    case "fringe":
      return (
        <>
          <path d="M11 15C12 10 17 7 22 7C28 7 32 10 33 15L29 18L25 15L22 19L18 15L14 18L11 15Z" fill={color} />
          <path d="M15 14C17 12 19 11 22 11C25 11 27 12 29 14C26 14 25 15 22 16C19 15 18 14 15 14Z" fill={shade} />
        </>
      );
    case "parted":
      return (
        <>
          <path d="M12 16C13 10 17 7 22 7C27 7 31 10 33 16C29 14 26 12 22 12C18 12 15 14 12 16Z" fill={shade} />
          <path d="M11 17C14 10 18 8 21 8C20 12 20 14 17 18C15 21 13 22 11 22V17Z" fill={color} />
          <path d="M22 8C27 8 31 11 33 17V22C30 22 28 20 26 18C23 15 23 12 22 8Z" fill={color} />
        </>
      );
    case "rounded":
      return (
        <>
          <path d="M10 17C11 11 16 8 22 8C28 8 33 11 34 17C31 16 28 15 22 15C16 15 13 16 10 17Z" fill={shade} />
          <path d="M10 17C13 11 17 9 22 9C28 9 32 12 34 17C31 21 27 23 22 23C17 23 13 21 10 17Z" fill={color} />
        </>
      );
    case "curly":
      return (
        <>
          <circle cx="15" cy="16" r="4" fill={shade} />
          <circle cx="22" cy="14" r="4.5" fill={color} />
          <circle cx="29" cy="16" r="4" fill={shade} />
        </>
      );
    default:
      return null;
  }
}

function Accessory({
  style,
  color,
}: {
  style: AccessoryStyle;
  color: string;
}) {
  switch (style) {
    case "glasses":
      return (
        <g stroke={color} strokeWidth="1.5" strokeLinecap="round">
          <rect x="11.5" y="18.5" width="7" height="5.5" rx="2.75" />
          <rect x="25.5" y="18.5" width="7" height="5.5" rx="2.75" />
          <path d="M18.5 21.2H25.5" />
        </g>
      );
    case "clip":
      return (
        <>
          <circle cx="31.2" cy="12.2" r="2.2" fill={color} />
          <path
            d="M31.2 9.4L31.8 11.4L33.8 12L31.8 12.6L31.2 14.6L30.6 12.6L28.6 12L30.6 11.4L31.2 9.4Z"
            fill={color}
          />
        </>
      );
    case "earring":
      return (
        <>
          <circle cx="30.8" cy="26.8" r="1.7" fill="none" stroke={color} strokeWidth="1.2" />
          <circle cx="30.8" cy="24.3" r="0.9" fill={color} />
        </>
      );
    case "none":
    default:
      return null;
  }
}

function Eyes({
  style,
  color,
}: {
  style: EyeStyle;
  color: string;
}) {
  if (style === "dots") {
    return (
      <>
        <circle cx="18.2" cy="22" r="1.1" fill={color} />
        <circle cx="25.8" cy="22" r="1.1" fill={color} />
      </>
    );
  }

  if (style === "closed") {
    return (
      <g stroke={color} strokeWidth="1.4" strokeLinecap="round">
        <path d="M15.8 22.3C16.8 21.1 17.8 20.9 18.9 22.3" />
        <path d="M24.9 22.3C25.9 21.1 26.9 20.9 28 22.3" />
      </g>
    );
  }

  return (
    <g stroke={color} strokeWidth="1.4" strokeLinecap="round">
      <path d="M15.8 22C16.8 20.6 17.9 20.3 19.1 22" />
      <path d="M24.9 22C25.9 20.6 27 20.3 28.2 22" />
    </g>
  );
}

function Mouth({
  style,
  color,
}: {
  style: MouthStyle;
  color: string;
}) {
  if (style === "flat") {
    return <path d="M19.2 28.7H24.8" stroke={color} strokeWidth="1.3" strokeLinecap="round" />;
  }

  if (style === "smile") {
    return (
      <path
        d="M18.9 27.8C20 29.5 21.4 30.1 22.8 30.1C24.2 30.1 25.8 29.4 26.8 27.8"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    );
  }

  return (
    <path
      d="M19.5 28.6C20.3 29.3 21.2 29.6 22.2 29.6C23.2 29.6 24.2 29.2 25.1 28.6"
      stroke={color}
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  );
}

export function NotionFaceAvatar({
  variant,
  className = "",
}: {
  variant: NotionFaceAvatarVariant;
  className?: string;
}) {
  const spec = avatarSpecs[variant];

  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-full border border-dark-olive/10 ${className}`}
    >
      <svg
        viewBox="0 0 44 44"
        className="h-full w-full"
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="44" height="44" fill={spec.background} />
        <ellipse cx="11" cy="8.5" rx="10" ry="6" fill={spec.glow} />
        <path d="M5 44C6.2 35.5 13.2 31 22 31C30.8 31 37.8 35.5 39 44H5Z" fill={spec.shirt} />
        <rect x="19.2" y="26.5" width="5.6" height="6.2" rx="2.8" fill={spec.skin} />
        <HairBack style={spec.hairStyle} color={spec.hair} />
        <circle cx="14.8" cy="22.8" r="1.8" fill={spec.skin} />
        <circle cx="29.2" cy="22.8" r="1.8" fill={spec.skin} />
        <ellipse cx="22" cy="22" rx="8.9" ry="10.4" fill={spec.skin} />
        <HairFront style={spec.hairStyle} color={spec.hair} shade={spec.hairShade} />
        <path d="M18 18.2C18.8 17.4 20 17 21.1 17" stroke={spec.eyebrow} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M23 17C24.1 17 25.3 17.4 26 18.2" stroke={spec.eyebrow} strokeWidth="1.1" strokeLinecap="round" />
        <Eyes style={spec.eyeStyle} color={spec.eye} />
        <path d="M22 22.8V25.2" stroke="#8C6B62" strokeWidth="1" strokeLinecap="round" />
        <path d="M22 25.2C21.6 25.8 21.8 26.4 22.6 26.6" stroke="#8C6B62" strokeWidth="1" strokeLinecap="round" />
        <ellipse cx="15.8" cy="26.2" rx="2.3" ry="1.4" fill={spec.blush} opacity="0.45" />
        <ellipse cx="28.2" cy="26.2" rx="2.3" ry="1.4" fill={spec.blush} opacity="0.45" />
        <Mouth style={spec.mouthStyle} color={spec.lip} />
        <Accessory style={spec.accessory} color={spec.accessoryColor} />
      </svg>
    </div>
  );
}
