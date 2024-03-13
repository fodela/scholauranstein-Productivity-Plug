const CTA = () => {
  return (
    <section className="bg-primary   py-16 ">
      <div className="container grid sm:grid-cols-3 gap-5 sm:gap-20">
        <div className="col-span-2  mb-5">
          <h2 className="text-2xl max-w-lg py-4 text-white">
            You should not have to choose between comfort and productivity.
          </h2>
          <p className="">You can have it all</p>
        </div>
        <button className=" px-6 py-2 text-lg bg-white text-black rounded-lg justify-self-center self-end">
          Order now
        </button>
      </div>
    </section>
  );
};

export default CTA;
