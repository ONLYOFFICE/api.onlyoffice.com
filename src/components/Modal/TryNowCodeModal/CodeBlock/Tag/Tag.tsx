import MultiTab from "../MultiTab/MultiTab";

type Props = {
  children: React.ReactNode;
  nesting?: number;
  closing?: boolean;
  inline?: boolean;
};

const Tag = ({ children, nesting = 0, closing = false, inline = false }: Props) => {
  return (
    <>
      <MultiTab tabs={nesting} />
      <span>
        &lt;
        {closing && "/"}
        {children}
        &gt;
      </span>
      {!inline && <br />}
    </>
  );
};

export default Tag;
