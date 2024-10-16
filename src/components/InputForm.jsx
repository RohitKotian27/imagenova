export default function InputForm({ loading, inputRef, imageGenerator }) {
  const cursorStatus = loading ? "cursor-not-allowed" : "cursor-pointer";
  return (
    <form
      onSubmit={(e) => imageGenerator(e)}
      className="flex flex-row w-full md:w-2/5 bg-slate-500 rounded-full h-14 mb-4"
    >
      <input
        ref={inputRef}
        className="w-full bg-transparent focus:outline-none px-4 placeholder:text-white placeholder:text-sm"
        placeholder="Describe the image you have in mind..."
        required
      />
      <button
        className={`rounded-full bg-cyan-500 px-8 font-semibold text-teal-50 ${cursorStatus}`}
      >
        Generate
      </button>
    </form>
  );
}
