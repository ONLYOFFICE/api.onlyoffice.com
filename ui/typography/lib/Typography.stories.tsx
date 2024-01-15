import type { JSX } from "preact"
import { Fragment, h } from "preact"
import typography from "./typography.css?inline"

const styles: string[] = [
  typography
]

export default {
  title: "UI Kit/Typography",
  decorators: [
    (Story: any): JSX.Element => (
      <>
        {styles.map((s) => (
          <style key={s} dangerouslySetInnerHTML={{ __html: s }} />
        ))}
        <Story />
      </>
    )
  ]
}
