type Props = {
  size?: number;
};

export default function Loading({ size = 100 }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        src="/assets/logos/logo2.png"
        alt="logo"
        width={size}
        height={size}
        className="animate-pulse duration-800"
      />
    </div>
  );
}
