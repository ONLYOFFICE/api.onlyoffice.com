import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {useThemeConfig} from '@docusaurus/theme-common';
import type {Props} from '@theme/AnnouncementBar/Content';
import styles from './styles.module.css';

export default function AnnouncementBarContent(props: Props): ReactNode {
  const {announcementBar} = useThemeConfig();
  const {content} = announcementBar!;
  return (
    <div
      {...props}
      className={clsx(styles.content, props.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: translate(
          {
            id: 'theme.AnnouncementBar.content',
            message: content,
            description: 'The content of the announcement bar',
          },
        ),
      }}
    />
  );
}
