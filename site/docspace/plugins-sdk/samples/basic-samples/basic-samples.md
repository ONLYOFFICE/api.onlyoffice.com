import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Basic samples

<DocCardList items={[...[...useCurrentSidebarCategory().items]]} />