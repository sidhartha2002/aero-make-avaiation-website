import MovingHeading from "@/components/MovingHeading";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center py-20 text-blue-400">
      <MovingHeading />
      <div className="aspect-video w-2/5 rounded-xl bg-black shadow-md">
        Fake video ;)
      </div>
    </section>
  );
};
