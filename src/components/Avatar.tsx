type AvatarProps = {
  size?: number;
  label?: string;
  className?: string;
};

export default function Avatar({ size = 72, label = "Peter", className = "" }: AvatarProps) {
  return (
    <img
      src="/avatar.png"
      alt={label}
      width={size}
      height={size}
      className={`avatar-mark ${className}`.trim()}
      style={{ width: size, height: size }}
      decoding="async"
    />
  );
}
