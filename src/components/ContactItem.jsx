export default function ContactItem({ icon, title, value, color }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`text-2xl mt-1 ${color}`}>{icon}</div>

      <div className="flex flex-col">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </div>
  );
}
