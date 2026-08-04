interface Props {
  title: string;
  icon: React.ElementType;
}

export default function ServiceCard({
  title,
  icon: Icon,
}: Props) {
  return (
    <div className="group rounded-2xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:bg-blue-950 hover:text-white">

      <Icon
        size={42}
        className="mx-auto text-orange-500 transition group-hover:scale-110"
      />

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

    </div>
  );
}