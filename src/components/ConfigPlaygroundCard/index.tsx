import type { ReactNode } from 'react'
import Link from '@docusaurus/Link'
import Heading from '@theme/Heading'

const CONFIG_PLAYGROUND_CARDS = [
    { type: 'word', name: 'Text document', description: 'Configure the text document editor for creating and editing .docx files.' },
    { type: 'cell', name: 'Spreadsheet', description: 'Configure the spreadsheet editor for data analysis and management.' },
    { type: 'slide', name: 'Presentation', description: 'Configure the presentation editor for designing and delivering slideshows.' },
    { type: 'form', name: 'Form', description: 'Configure the form editor for creating and managing fillable forms.' },
    { type: 'pdf', name: 'PDF', description: 'Configure the PDF editor for viewing, editing, and annotating PDF documents.' },
]

type CardProps = {
    type: string
    name: string
    description: string
}

function ConfigPlaygroundCard({ type, name, description }: CardProps) {
    const image = require(`@site/static/assets/images/editor/${type}-playground.png`).default + '#gh-light-mode-only'
    const imageDark = require(`@site/static/assets/images/editor/${type}-playground.dark.png`).default + '#gh-dark-mode-only'
    const url = `pathname:///config-playground/?documentType=${type}`

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

export function ConfigPlaygroundCardsRow(): ReactNode {
    return (
        <div className="row">
            {CONFIG_PLAYGROUND_CARDS.map((card) => (
                <ConfigPlaygroundCard key={card.type} {...card} />
            ))}
        </div>
    )
}
