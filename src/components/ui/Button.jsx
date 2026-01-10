export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition focus:outline-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#005b4b] to-[#0f766e] text-white hover:opacity-90",
    secondary: "border border-[#005b4b] text-[#005b4b] hover:bg-[#005b4b]/10",
    ghost: "text-[#005b4b] hover:bg-[#005b4b]/10",
    pink: "bg-[#fbd5e7] text-[#005b4b] hover:bg-[#f7c4dd]",
  };

  return (
    <button
      className={`${base} px-6 py-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
