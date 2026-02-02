import React, {type ReactNode} from 'react';
import Heading from '@theme/Heading';
import type {Props} from '@theme/MDXComponents/Heading';
import PageActions from '@site/src/components/PageActions';

export default function MDXHeading(props: Props): ReactNode {
  if (props.as === 'h1') {
    return (
      <>
        <Heading {...props} />
        <PageActions />
      </>
    );
  }

  return <Heading {...props} />;
}
