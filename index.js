import React, { Component } from "react";
import { Platform, Text, StyleSheet } from "react-native";

export default class NumberAbbreviator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decimalsToShow: this.props.decimalsToShow, // number of decimal places to show
      formattedNumber: "not received", // output
      minNumberToFormat: this.props.minNumberToFormat,  // length number must be >== to format
      passedInNumber: this.props.passedInNumber, // number you are formatting
    };
  }

  async componentDidMount() {
    await this.abbrNum(this.state.passedInNumber, this.state.decimalsToShow); // max decimal places 4
  }

  abbrNum = (number, decPlaces) => {
      if (number >= this.state.minNumberToFormat ) {
    console.log(
      "abbr num triggered with input number: " +
        number +
        " and decplaces: " +
        decPlaces
    );
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);

    // Enumerate number abbreviations
    var abbrev = ["K", "M", "B", "T"];

    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3);

      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round((number * decPlaces) / size) / decPlaces;

        // Handle special case where we round up to the next abbreviation
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1;
          i++;
        }

        // Add the letter for the abbreviation
        number += abbrev[i];
        console.log("formatted = ", number);
        this.setState({
          formattedNumber: number
        });
        // We are done... stop
        break;
      }
    }

    return number;
    
} else {
    console.log(`Number smaller than ${this.state.minNumberToFormat} : ${number}`)
    let formattedSmallNum = number.toLocaleString("en", {
        style: "decimal",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
      })
    this.setState({
        formattedNumber: formattedSmallNum
      });
    }
  };

  render() {
    return (
      <Text style={styles.font}>
        {/* passed in number: {this.state.passedInNumber} formatted: */}
        ${this.state.formattedNumber}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontFamily: Platform.OS === "ios" ? "Avenir" : "sans-serif"
  }
});
