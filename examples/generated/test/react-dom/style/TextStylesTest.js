import React from "react"

import colors from "../colors"
import textStyles from "../textStyles"

export default class TextStylesTest extends React.Component {
  render() {
    return (
      <div style={Object.assign(styles.view, {})}>
        <span style={Object.assign(styles.text, {})}>
          {"Text goes here"}
        </span>
        <span style={Object.assign(styles.text1, {})}>
          {"Text goes here"}
        </span>
        <span style={Object.assign(styles.text2, {})}>
          {"Text goes here"}
        </span>
        <span style={Object.assign(styles.text3, {})}>
          {"Text goes here"}
        </span>
        <span style={Object.assign(styles.text4, {})}>
          {"Text goes here"}
        </span>
        <span style={Object.assign(styles.text5, {})}>
          {"Text goes here"}
        </span>
        <span style={Object.assign(styles.text6, {})}>
          {"Text goes here"}
        </span>
        <span style={Object.assign(styles.text7, {})}>
          {"Text goes here"}
        </span>
        <span style={Object.assign(styles.text8, {})}>
          {"Text goes here"}
        </span>
        <span style={Object.assign(styles.text9, {})}>
          {"Text goes here"}
        </span>
      </div>
    );
  }
};

let styles = {
  view: { alignSelf: "stretch", display: "flex" },
  text: { ...textStyles.display4, display: "flex" },
  text1: { ...textStyles.display3, display: "flex" },
  text2: { ...textStyles.display2, display: "flex" },
  text3: { ...textStyles.display1, display: "flex" },
  text4: { ...textStyles.headline, display: "flex" },
  text5: { ...textStyles.subheading2, display: "flex" },
  text6: { ...textStyles.subheading1, display: "flex" },
  text7: { ...textStyles.body2, display: "flex" },
  text8: { ...textStyles.body1, display: "flex" },
  text9: { ...textStyles.caption, display: "flex" }
}