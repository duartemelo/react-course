import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING")
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
};

export default React.memo(DemoOutput); // apenas se as props mudarem é q ele vai dar re-render!
// conseguimos assim cortar um ramo inteiro da app de dar re-render! 
// porque se demooutput nao da re-render, myparapraph tambem nao