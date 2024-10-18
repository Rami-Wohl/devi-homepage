export const SectionTitle = ({ title }: { title: string }) => {
  return <h1 className="mb-8 w-full text-center text-2xl">{title}</h1>;
};

export const ListTitle = ({ title }: { title: string }) => {
  return <h2 className="mb-4 text-lg font-bold">{title}</h2>;
};

export const List = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <ul className="mb-8 flex flex-col gap-1 pl-2">{children}</ul>;
};

export const ListItem = ({ content }: { content: string }) => {
  return <li className="list-inside list-disc">{content}</li>;
};

export const ListItemUnmarked = ({ content }: { content: string }) => {
  return <li className="">{content}</li>;
};
