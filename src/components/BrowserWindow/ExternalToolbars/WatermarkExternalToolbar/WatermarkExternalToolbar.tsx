import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

const defaultText = "Confidential: %user_name%";

const defaultWatermark = {
  type: "rect",
  width: 160,
  height: 60,
  rotate: -45,
  transparent: 0.3,
  fill: [],
  stroke: [],
  align: 1,
  paragraphs: [
    {
      align: 2,
      runs: [
        {
          text: defaultText,
          fill: [128, 128, 128],
          "font-family": "Arial",
          "font-size": 28,
          bold: true,
        },
      ],
    },
  ],
};

const WatermarkExternalToolbar: React.FC = () => {
  return (
    <>
      <div className={styles["demo-section"]}>
        <div className={styles["controls-row"]}>
          <span className={styles["controls-label"]}>External controls</span>
          <input id="watermarkText" className={styles["text-input"]} type="text" defaultValue={defaultText} aria-label="Watermark text" />
          <select id="watermarkColor" className={styles.select} defaultValue="128,128,128" aria-label="Color">
            <option value="128,128,128">Color: Gray</option>
            <option value="192,0,0">Color: Red</option>
            <option value="0,82,204">Color: Blue</option>
          </select>
          <select id="watermarkOpacity" className={styles.select} defaultValue="0.3" aria-label="Opacity">
            <option value="0.15">Opacity: 15%</option>
            <option value="0.3">Opacity: 30%</option>
            <option value="0.6">Opacity: 60%</option>
          </select>
          <select id="watermarkRotate" className={styles.select} defaultValue="-45" aria-label="Angle">
            <option value="-45">Angle: Diagonal</option>
            <option value="0">Angle: Horizontal</option>
          </select>
          <button id="applyWatermark" className={styles.btn} disabled>
            Apply
          </button>
        </div>
      </div>
      <OnlyofficeEditor
        fileType={"docx"}
        code={""}
        height="550px"
        isDemo={true}
        config={{
          document: { options: { watermark_on_draw: defaultWatermark } },
          editorConfig: {
            customization: { compactToolbar: true },
            user: { id: "uid-1", name: "John Smith" },
          },
        }}
        externalScript={{
          beforeDocumentReady: ``,
          onDocumentReady: `
            document.getElementById("applyWatermark").disabled = false;
          `,
          otherFunctional: `
            const buildWatermark = () => {
              const watermark = ${JSON.stringify(defaultWatermark)};
              const run = watermark.paragraphs[0].runs[0];
              run.text = document.getElementById("watermarkText").value;
              run.fill = document.getElementById("watermarkColor").value.split(",").map(Number);
              watermark.transparent = Number(document.getElementById("watermarkOpacity").value);
              watermark.rotate = Number(document.getElementById("watermarkRotate").value);
              return watermark;
            };

            document.getElementById("applyWatermark").addEventListener("click", () => {
              connector.executeMethod("SetProperties", [{
                watermark_on_draw: JSON.stringify(buildWatermark()),
              }]);
            });

            document.getElementById("watermarkText").addEventListener("keydown", (e) => {
              if (e.key === "Enter") document.getElementById("applyWatermark").click();
            });
          `,
        }}
      />
    </>
  );
};

export default WatermarkExternalToolbar;
