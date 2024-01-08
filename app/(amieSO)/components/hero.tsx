import MovingHeading from "@/components/MovingHeading";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center py-20 text-blue-400">
      <div className="text-gray-400 text-5xl">AeroMake Aviation</div>
      <MovingHeading />
      <div className="aspect-video w-2/5 rounded-xl bg-black shadow-md">
        Fake video ;)
      </div>
    </section>
  );
};
