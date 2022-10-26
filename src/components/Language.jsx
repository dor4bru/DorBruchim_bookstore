import React from "react";
import i18n from "i18next";
import { Container, Select, Option } from "../styles/changeLangStyles";

export default class ChangeLang extends React.Component {

  state = {
    lang: "en"
  };

  langChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      localStorage.setItem("lang", this.state.lang);
      const lang = localStorage.getItem("lang");
      i18n.changeLanguage(lang);
    });
  };
  render() {
    const { lang } = this.state;

    return (
      <Container>
        <Select
          className="selectBox"
          onChange={this.langChange}
          name="lang"
          value={lang}>
          <Option className="optionsMenu" value="en">English</Option>
          <Option className="optionsMenu" value="sp">Spanish(española)</Option>
        </Select>
      </Container>
    );
  }
}
