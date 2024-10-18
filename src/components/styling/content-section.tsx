export const ContentSection = ({
  children,
  title,
  size = "normal",
}: {
  children: JSX.Element;
  title: string;
  size?: "normal" | "large";
}) => {
  return (
    <>
      <div
        className={`relative flex w-full flex-col items-center rounded-md bg-secondary bg-opacity-20 ${size === "normal" ? "lg:w-1/2" : "lg:w-fit"}`}
      >
        <div className="mt-2 flex w-full flex-col items-center justify-center gap-4 p-4">
          <h1 className="font-mono text-2xl lg:text-3xl">{title}</h1>
          {children}
        </div>
      </div>
    </>
  );
};
