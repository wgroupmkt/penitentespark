interface Props {
  text: string;
}

export default function Feature({ text }: Props) {
  return (
    <div className="flex items-center gap-3">

      <div className="h-3 w-3 rounded-full bg-orange-500" />

      <span className="text-lg text-slate-700">
        {text}
      </span>

    </div>
  );
}