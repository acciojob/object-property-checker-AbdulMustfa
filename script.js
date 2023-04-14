const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code her
	  return key in window.sampleObject;
	// return Object.prototype.hasOwnProperty.call(sampleObject, key);
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
