import type { ReactNode } from 'react'
import Link from '@docusaurus/Link'
import Heading from '@theme/Heading'

const CONFIG_EDITOR_CARDS = [
    {
        name: 'Text document',
        image: require('@site/static/assets/images/editor/word-playground.png').default + '#gh-light-mode-only',
        imageDark: require('@site/static/assets/images/editor/word-playground.dark.png').default + '#gh-dark-mode-only',
        url: 'pathname:///config-editor/?documentType=word',
        description: 'Configure the text document editor for creating and editing .docx files.',
    },
    {
        name: 'Spreadsheet',
        image: require('@site/static/assets/images/editor/cell-playground.png').default + '#gh-light-mode-only',
        imageDark: require('@site/static/assets/images/editor/cell-playground.dark.png').default + '#gh-dark-mode-only',
        url: 'pathname:///config-editor/?documentType=cell',
        description: 'Configure the spreadsheet editor for data analysis and management.',
    },
    {
        name: 'Presentation',
        image: require('@site/static/assets/images/editor/slide-playground.png').default + '#gh-light-mode-only',
        imageDark: require('@site/static/assets/images/editor/slide-playground.dark.png').default + '#gh-dark-mode-only',
        url: 'pathname:///config-editor/?documentType=slide',
        description: 'Configure the presentation editor for designing and delivering slideshows.',
    },
    {
        name: 'Form',
        image: require('@site/static/assets/images/editor/form-playground.png').default + '#gh-light-mode-only',
        imageDark: require('@site/static/assets/images/editor/form-playground.dark.png').default + '#gh-dark-mode-only',
        url: 'pathname:///config-editor/?documentType=form',
        description: 'Configure the form editor for creating and managing fillable forms.',
    },
    {
        name: 'PDF',
        image: require('@site/static/assets/images/editor/pdf-playground.png').default + '#gh-light-mode-only',
        imageDark: require('@site/static/assets/images/editor/pdf-playground.dark.png').default + '#gh-dark-mode-only',
        url: 'pathname:///config-editor/?documentType=pdf',
        description: 'Configure the PDF editor for viewing, editing, and annotating PDF documents.',
    },
]

type CardProps = {
    name: string
    image: string
    imageDark: string
    url: string
    description: string
}

function ConfigEditorCard({ name, image, imageDark, url, description }: CardProps) {
    return (
        <div className="col col--6 margin-bottom--lg">
            <div className="card">
                <div className="card__image">
                    <Link to={url}>
                        <img src={image} alt={name} />
                        <img src={imageDark} alt={name} />
                    </Link>
                </div>
                <div className="card__body">
                    <Heading as="h3">{name}</Heading>
                    <p>{description}</p>
                </div>
                <div className="card__footer">
                    <div className="button-group button-group--block">
                        <Link className="button button--secondary" to={url}>
                            Configure
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ConfigEditorCardsRow(): ReactNode {
    return (
        <div className="row">
            {CONFIG_EDITOR_CARDS.map((card) => (
                <ConfigEditorCard key={card.name} {...card} />
            ))}
        </div>
    )
}