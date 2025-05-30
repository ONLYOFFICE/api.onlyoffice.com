import { useState, type ReactNode } from 'react';
import { TryNowCodeModal } from '@site/src/components/Modal';
import { code } from '@site/src/components/Modal/TryNowCodeModal/CodeBlock/types';
import codeblocksData from '@site/src/components/TryNow/codeblocksData.json';
import styles from './styles.module.css';

type FileFormatButtonProps = {
  format: string;
  type: 'document' | 'spreadsheet' | 'presentation' | 'pdf';
  category: string;
  actionName: string;
  isForm?: boolean;
  modalStates: {
    setIsCodeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setCodeModalData: React.Dispatch<React.SetStateAction<{ title: string; codes: code[] }>>;
  };
};

const FileFormatButton = ({ format, type, category, actionName, isForm = false, modalStates }: FileFormatButtonProps) => {
  const formatClass = styles[type + 'Format'];
  const { setIsCodeModalOpen, setCodeModalData } = modalStates;

  const handleOpenModal = () => {
    setCodeModalData({
      title: `OPEN ${format} ${actionName}`,
      codes: codeblocksData[format][category].map((codeblockData: code) => ({
        ...codeblockData,
        width: '100%',
        height: '100%',
      })),
    });
    setIsCodeModalOpen(true);
  };

  const handleEditorOpen = async () => {    
    codeblocksData[format][category].forEach((_: any, i: number) => {
      window.open(
        window.location.href + `editor/?format=${format}&type=${type}&category=${category}&codeIndex=${i}&isForm=${isForm}`,
        "_blank"
      );
    });
  };

  return (
    <div className={styles.formatButtonRow}>
      <span className={`${styles.formatLabel} ${formatClass}`} onClick={handleEditorOpen}>
        {format}
      </span>
      <span className={`${styles.codeButton} ${formatClass}`} onClick={handleOpenModal}>
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
      actionName: 'FOR EDITING',
      document: documentFormats,
      spreadsheet: spreadsheetFormats,
      presentation: presentationFormats,
      pdf: pdfFormats
    },
    {
      name: 'Co-Edit',
      actionName: 'FOR CO-EDITING',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    },
    {
      name: 'Strict Co-Edit',
      actionName: 'FOR CO-EDITING IN STRICT MODE',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    },
    {
      name: 'Editing forms',
      actionName: 'FORM FOR EDITING',
      document: [],
      spreadsheet: [],
      presentation: [],
      pdf: pdfFormats,
      isForm: true
    },
    {
      name: 'Filling in forms',
      actionName: 'FOR FILLING IN FORMS',
      document: [],
      spreadsheet: [],
      presentation: [],
      pdf: pdfFormats,
      isForm: true
    },
    {
      name: 'Local filter',
      actionName: 'WITHOUT ACCESS TO CHANGE THE FILTER',
      document: [],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [],
      pdf: []
    },
    {
      name: 'Review',
      actionName: 'FOR REVIEW',
      document: [documentFormats[0]],
      spreadsheet: [],
      presentation: [],
      pdf: []
    },
    {
      name: 'Restricted review',
      actionName: 'FOR RESTRICTED REVIEW',
      document: [documentFormats[0]],
      spreadsheet: [],
      presentation: [],
      pdf: []
    },
    {
      name: 'Content control settings restricted',
      actionName: 'WITHOUT ACCESS TO THE CONTENT CONTROL SETTINGS',
      document: [documentFormats[0]],
      spreadsheet: [],
      presentation: [],
      pdf: []
    },
    {
      name: 'Comment',
      actionName: 'FOR COMMENTING',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    },
    {
      name: 'Restricted comment',
      actionName: 'FOR RESTRICTED COMMENTING',
      document: [documentFormats[0]],
      spreadsheet: [],
      presentation: [],
      pdf: []
    },
    {
      name: 'View',
      actionName: 'FOR VIEWING',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    },
    {
      name: 'Rebranding',
      actionName: 'WITH REBRANDING',
      document: [documentFormats[0]],
      spreadsheet: [spreadsheetFormats[0]],
      presentation: [presentationFormats[0]],
      pdf: pdfFormats
    },
    {
      name: 'Embedded view',
      actionName: 'FILE FOR EMBEDDED VIEWING',
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

  const [isCodeModalOpen, setIsCodeModalOpen] = useState<boolean>(false);
  const [codeModalData, setCodeModalData] = useState<{ title: string; codes: code[] }>({ title: '', codes: [] });

  return (
    <>
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
                        actionName={categoryFormat.actionName}
                        isForm={categoryFormat.isForm}
                        modalStates={{ setIsCodeModalOpen: setIsCodeModalOpen, setCodeModalData: setCodeModalData }}
                      />
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <TryNowCodeModal isOpenState={[isCodeModalOpen, setIsCodeModalOpen]} title={codeModalData.title} codes={codeModalData.codes} />
    </>
  );
};
