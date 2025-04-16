import type { ReactNode } from 'react';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';

const FileFormatButton: React.FC<{ 
  format: string, 
  type: 'document' | 'spreadsheet' | 'presentation' | 'pdf', 
  category: string 
}> = ({ format, type, category }) => {

  const handleCodeClick = () => {
    console.log(`Viewing source code for ${format} in ${category}`);
  };

  const formatClass = styles[type + 'Format'];

  return (
    <div className={styles.formatButtonRow}>
      <Link
        to={`try-docs/editor?format=${format}&type=${type}&category=${category}`}
        className={`${styles.formatLabel} ${formatClass}`}
      >
        {format}
      </Link>
      <span 
        onClick={handleCodeClick} 
        className={styles.codeButton}
      >
        {`</>`}
      </span>
    </div>
  );
};

export default function TryNowPage(): ReactNode {
  const documentFormats = ['DOCX', 'DOC', 'ODT', 'TXT'];
  const spreadsheetFormats = ['XLSX', 'XLS', 'ODS', 'CSV'];
  const presentationFormats = ['PPTX', 'PPSX', 'PPT', 'ODP'];
  const pdfFormats = ['PDF'];

  const categoriesFormats = [
    {
      name: 'Edit',
      document: documentFormats,
      spreadsheet: spreadsheetFormats,
      presentation: presentationFormats,
      pdf: pdfFormats
    },
    {
      name: 'Co-Edit',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    },
    {
      name: 'Strict Co-Edit',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    },
    {
      name: 'Editing forms',
      document: [],
      spreadsheet: [],
      presentation: [],
      pdf: pdfFormats
    },
    {
      name: 'Filling in forms',
      document: [],
      spreadsheet: [],
      presentation: [],
      pdf: pdfFormats
    },
    {
      name: 'Local filter',
      document: [],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [],
      pdf: []
    },
    {
      name: 'Review',
      document: [documentFormats[0]],
      spreadsheet: [],
      presentation: [],
      pdf: []
    },
    {
      name: 'Restricted review',
      document: [documentFormats[0]],
      spreadsheet: [],
      presentation: [],
      pdf: []
    },
    {
      name: 'Content control settings restricted',
      document: [documentFormats[0]],
      spreadsheet: [],
      presentation: [],
      pdf: []
    },
    {
      name: 'Comment',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    },
    {
      name: 'Restricted comment',
      document: [documentFormats[0]],
      spreadsheet: [],
      presentation: [],
      pdf: []
    },
    {
      name: 'View',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    },
    {
      name: 'Rebranding',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    },
    {
      name: 'Embedded view',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    }
  ];

  const columnConfigs = [
    {
      title: 'Documents',
      type: 'document',
      formats: documentFormats
    },
    {
      title: 'Spreadsheets',
      type: 'spreadsheet',
      formats: spreadsheetFormats
    },
    {
      title: 'Presentations',
      type: 'presentation',
      formats: presentationFormats
    },
    {
      title: 'PDF',
      type: 'pdf',
      formats: pdfFormats
    }
  ];

  return (
    <table className={styles.formatsTable}>
      <thead>
        <tr>
          <th></th>
          {columnConfigs.map(({ title }) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {categoriesFormats.map((categoryFormat) => (
          <tr key={categoryFormat.name}>
            <td className={styles.categoryCell}>{categoryFormat.name}</td>
            {columnConfigs.map(({ title, type }) => (
              <td key={title} className={styles.formatCell}>
                <div className={styles.formatButtonContainer}>
                  {categoryFormat[type as 'document' | 'spreadsheet' | 'presentation' | 'pdf'].map((format) => (
                    <FileFormatButton 
                      key={format}
                      format={format} 
                      type={type as any} 
                      category={categoryFormat.name} 
                    />
                  ))}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};