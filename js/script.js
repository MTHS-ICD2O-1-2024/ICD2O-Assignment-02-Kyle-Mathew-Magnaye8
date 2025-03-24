// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: Kyle Matthew Magnaye
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Calculates the volume of a cube. "
 */
function calculateVolume() {
  // input
  const sideLength = parseFloat(document.getElementById("side-length").value)

  // process
  if (!isNaN(sideLength) && sideLength > 0) {
    const volume = Math.pow(sideLength, 3)
    // output
    document.getElementById("cube-volume").innerHTML =
      "The volume of the cube is: " + volume.toFixed(2) + " cubic units."
  } else {
    document.getElementById("cube-volume").innerHTML = "Please enter a valid positive number."
  }
}
