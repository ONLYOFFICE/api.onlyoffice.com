import React from "react";
import MultiTab from "../MultiTab/MultiTab";
import PaintedText from "../PaintedText/PaintedText";

type Props = {
  children: object;
  nesting?: number;
};

const ObjectInner = ({ children, nesting = 0 }: Props) => {
  const wrappedObjectInner: React.JSX.Element[] = [];
  let uniqueId = 0;

  const wrapObjectInner = (currentInner: object, nesting: number): void => {
    const lastEntryIndex: number = Object.entries(currentInner).length - 1;

    Object.entries(currentInner).forEach(([key, value], i) => {
      const id = uniqueId++;

      wrappedObjectInner.push(
        <React.Fragment key={`key-${id}`}>
          <MultiTab tabs={nesting} />
          <PaintedText red>{`"${key}"`}</PaintedText>
        </React.Fragment>
      );

      if (typeof value === "string") {
        const idVal = uniqueId++;
        wrappedObjectInner.push(
          <React.Fragment key={`value-${idVal}`}>
            <PaintedText black>:</PaintedText>
            <PaintedText red>{` "${value}"`}</PaintedText>
            {i !== lastEntryIndex && <PaintedText black>,</PaintedText>}
          </React.Fragment>
        );
      } else if (typeof value === "object" && value !== null) {
        const idOpen = uniqueId++;
        wrappedObjectInner.push(
          <React.Fragment key={`open-${idOpen}`}>
            <PaintedText black>{": {"}</PaintedText>
            <br key={`open-br-${idOpen}`} />
          </React.Fragment>
        );

        wrapObjectInner(value, nesting + 1);

        const idClose = uniqueId++;
        wrappedObjectInner.push(
          <React.Fragment key={`close-${idClose}`}>
            <MultiTab tabs={nesting} />
            <PaintedText black>
              {"}"}
              {i !== lastEntryIndex && ","}
            </PaintedText>
          </React.Fragment>
        );
      }

      wrappedObjectInner.push(<br key={`br-${uniqueId++}`} />);
    });
  };

  wrappedObjectInner.push(<br key={`br-start`} />);
  wrapObjectInner(children, nesting);

  return wrappedObjectInner;
};

export default ObjectInner;
