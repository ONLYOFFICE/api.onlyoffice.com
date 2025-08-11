import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Advanced samples

<DocCardList items={[...[...useCurrentSidebarCategory().items]]} />