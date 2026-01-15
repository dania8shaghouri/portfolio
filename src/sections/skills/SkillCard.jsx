export default function SkillCard({ title, icon: Icon, items, color }) {
  return (
    <div
      className="
        border border-gray-300
        rounded-xl shadow-sm p-10
        bg-white 
        w-full sm:w-67
        min-h-[21rem]
      "
    >
      <div className="flex items-center gap-3 mb-5">
        {Icon && <Icon className={`text-xl ${color}`} />}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="
                flex  gap-3
                px-3 py-2
                mt-2
                rounded-lg
                text-sm
                border border-gray-300
              "
            >
              <Icon
                className={`text-xl mt-1 ${item.iconColor ?? "text-gray-500"}`}
              />
              <div className="flex flex-col">
                <span className="font-medium">{item.name}</span>
                <p className="text-sm text-gray-500 ">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
