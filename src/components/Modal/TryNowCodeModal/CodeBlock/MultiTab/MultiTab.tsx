const MultiTab = ({ tabs = 1 }: { tabs?: number }) => {
  return <>{`\u2003\u2003`.repeat(tabs)}</>;
};

export default MultiTab;
