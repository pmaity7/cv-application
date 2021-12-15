import React, { Component } from "react";
import ExperienceForm from "./components/ExperienceForm";
import "./App.css";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
import PersonalSection from "./components/PersonalSection";
import ExperienceSection from "./components/ExperienceSection";
import HeaderComponent from "./components/HeaderComponent";
import PrintProvider, { Print, NoPrint } from "react-easy-print";
import EducationForm from "./components/EducationForm";
import EducationSection from "./components/EducationSection";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mobile: "",
      email: "",
      address: "",
      github: "",
      linkedIn: "",
      isNameEdit: false,
      showExperieneForm: false,
      experience: [],
      preview: false,
      education: [],
      showEducationForm: false,
    };

    this.editPersonalDetails = this.editPersonalDetails.bind(this);
    this.getPersonalDetails = this.getPersonalDetails.bind(this);
    this.addExperienceHandler = this.addExperienceHandler.bind(this);
    this.getExperienceDetails = this.getExperienceDetails.bind(this);
    this.updateExperienceDetails = this.updateExperienceDetails.bind(this);
    this.getEducationDetails = this.getEducationDetails.bind(this);
    this.addEducationHandler = this.addEducationHandler.bind(this);
    this.editEducationDetails = this.editEducationDetails.bind(this);
    this.deleteEducationDetails = this.deleteEducationDetails.bind(this);
    this.updateEducationDetails = this.updateEducationDetails.bind(this);
  }

  editPersonalDetails(bool) {
    this.setState({
      isNameEdit: bool,
    });
  }

  getPersonalDetails(n, e, m, a, g, l) {
    //alert("from App" + n + " " + e + " " + m);
    this.setState({
      name: n,
      email: e,
      mobile: m,
      address: a,
      github: g,
      linkedIn: l,
      isNameEdit: false,
    });
  }

  addExperienceHandler() {
    this.setState({
      showExperieneForm: true,
    });
  }

  getExperienceDetails(exp) {
    //alert(exp.company);
    let newExp = [...this.state.experience, exp];
    this.setState({
      showExperieneForm: false,
      experience: newExp,
    });
  }

  updateExperienceDetails(exp) {
    let oldExp = this.state.experience.filter((item) => item.id !== exp.id);

    let newExp = [...oldExp, exp];
    console.log("updateExperienceDetails " + newExp);
    this.setState({
      experience: newExp,
    });
  }

  editExperienceDiv = (id) => {
    // arr.splice(index, 0, item) insert at pos index
    //arr.indexOf(item)
    const [newExp] = this.state.experience.filter((item) => item.id === id);
    console.log("edit div" + newExp.company);
    newExp.editFlag = true;
    console.log("edit div" + newExp.editFlag);
    const Exp = this.state.experience.filter((item) => item.id !== id);
    console.log(Exp);
    let changeExperiences = [...Exp, newExp];
    this.setState({
      experience: changeExperiences,
    });
  };

  isExperienceDeleted = (id) => {
    const [delExp] = this.state.experience.filter((item) => item.id === id);
    console.log(delExp);
    let exp = this.state.experience.filter((item) => item.id !== id);
    console.log(exp);
    // newExp.deleteFlag = true;
    let newExp = [...exp];
    this.setState({
      experience: newExp,
    });
  };

  previewResume = () => {
    this.setState({
      preview: !this.state.preview,
    });
  };

  printResume = () => {
    window.print();
    //   var pdf = new jsPDF("p", "", "letter");
    //   var source = document.getElementById("HTMLtoPDF");
    //   console.log(source);
    //   var specialElementHandlers = {
    //     "#bypassme": function (element, renderer) {
    //       return true;
    //     },
    //   };

    //   var margins = {
    //     top: 20,
    //     left: 20,
    //     width: 400,
    //   };

    //   pdf.fromHTML(
    //     source, // HTML string or DOM elem ref.
    //     margins.left, // x coord
    //     margins.top, // y coord
    //     {
    //       width: margins.width, // max width of content on PDF
    //       elementHandlers: specialElementHandlers,
    //     },
    //     function (dispose) {
    //       // dispose: object with X, Y of the last line add to the PDF
    //       // this allow the insertion of new lines after html
    //       pdf.save("html2pdf.pdf");
    //     }
    //   );
  };

  getEducationDetails(education) {
    const edu = [...this.state.education, education];
    this.setState({
      education: edu,
      showEducationForm: false,
    });
    console.log(this.state.education);
  }

  addEducationHandler() {
    this.setState({
      showEducationForm: true,
    });
  }

  editEducationDetails(id) {
    const [newEdu] = this.state.education.filter((item) => item.id === id);
    console.log("edit div" + newEdu.company);
    newEdu.editFlag = true;
    console.log("edit div" + newEdu.editFlag);
    const Edu = this.state.education.filter((item) => item.id !== id);
    console.log(Edu);
    let ChangeEducation = [...Edu, newEdu];
    this.setState({
      education: ChangeEducation,
    });
  }

  deleteEducationDetails(id) {
    const [delEdu] = this.state.education.filter((item) => item.id === id);
    console.log(delEdu);
    let edu = this.state.education.filter((item) => item.id !== id);
    console.log(edu);
    // newExp.deleteFlag = true;
    let newEdu = [...edu];
    this.setState({
      education: newEdu,
    });
  }

  updateEducationDetails(edu) {
    let oldEdu = this.state.education.filter((item) => item.id !== edu.id);

    let newEdu = [...oldEdu, edu];

    this.setState({
      education: newEdu,
    });
  }

  render() {
    return (
      <PrintProvider>
        <Print>
          <div
            id="HTMLtoPDF"
            style={{
              margin: "2vw 2vw 0 2vw",
              padding: "0em",
              display: "flex",
              flexDirection: "column",
              alignItems: "normal",
              paddingTop: "1em",
              width: "90vw",
              minHeight: "80vh",
              backgroundColor: "white",
              marginBlockStart: "1em",
            }}
          >
            <NoPrint>
              <h3>
                <HeaderComponent heading="CV Application" />
              </h3>
            </NoPrint>
            <HeaderComponent heading="Personal Details" />
            <PersonalSection
              name={this.state.name}
              mobile={this.state.mobile}
              email={this.state.email}
              address={this.state.address}
              github={this.state.github}
              linkedin={this.state.linkedIn}
              getPersonalDetails={this.getPersonalDetails}
              isNameEdit={this.state.isNameEdit}
              editPersonalDetails={this.editPersonalDetails}
            />
            <HeaderComponent heading="Experience" />
            <ExperienceSection
              experience={this.state.experience}
              updateExperienceDetails={this.updateExperienceDetails}
              isExperienceDeleted={this.isExperienceDeleted}
              editExperienceDiv={this.editExperienceDiv}
            />
            <NoPrint>
              {this.state.showExperieneForm ? (
                <ExperienceForm
                  getExperienceDetails={this.getExperienceDetails}
                />
              ) : null}
              <br />

              {this.state.preview ? null : (
                <button
                  onClick={this.addExperienceHandler}
                  style={{
                    width: "90%",
                    marginLeft: "2.5em",
                    marginBottom: "1em",
                  }}
                >
                  Add Experience
                </button>
              )}
            </NoPrint>
            <HeaderComponent heading="Education" />

            {this.state.showEducationForm ? (
              <EducationForm getEducationDetails={this.getEducationDetails} />
            ) : null}
            {/* Education section add here */}

            <EducationSection
              education={this.state.education}
              editEducationDetails={this.editEducationDetails}
              updateEducationDetails={this.updateEducationDetails}
              deleteEducationDetails={this.deleteEducationDetails}
            />
            <NoPrint>
              {this.state.preview ? null : (
                <button
                  onClick={this.addEducationHandler}
                  style={{
                    width: "90%",
                    marginLeft: "2.5em",
                    marginBottom: "1em",
                  }}
                >
                  Add Education
                </button>
              )}
            </NoPrint>
          </div>
          <NoPrint>
            <button
              onClick={this.previewResume}
              style={{
                width: "90%",
                marginLeft: "2.5em",
              }}
            >
              {this.state.preview ? "Back" : "Preview"}
            </button>
            {this.state.preview ? (
              <button
                onClick={this.printResume}
                style={{
                  width: "90%",
                  marginLeft: "2.5em",
                }}
              >
                Print
              </button>
            ) : null}
          </NoPrint>
        </Print>
      </PrintProvider>
    );
  }
}

export default App;
