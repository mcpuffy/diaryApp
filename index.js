const entryForm = document.getElementById("entryForm");
const entriesSection = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector(".entries-nav");

let buttonCount = 1;

let addEntrytoDom = (e) => {
  e.preventDefault(); //prevents page from loading upon submit
  //create holder for diary entry
  let entryDiv = document.createElement("div");
  entryDiv.className = "single-entry";
  entryDiv.textContent = entryTextbox.value; //give the contents typed out to the entryDiv
  entryDiv.style.display = "none"; //to hide entry text - prevent clutter
  entriesSection.append(entryDiv); //add div element(entry) to entriesSection
  entryTextbox.value = ""; //clear textarea entry

  //create button for diary entry
  const displayEntryButton = document.createElement("button");
  displayEntryButton.className = "display-entry-button";
  displayEntryButton.textContent = buttonCount;
  entriesNav.append(displayEntryButton); //display buttons on entries-nav

  displayEntryButton.addEventListener(
    "click",
    () => { //function
      const allEntries = document.querySelectorAll('.single-entry');
      for(let x = 0; x< allEntries.length ; x++){
        allEntries[x].style.display = "none";
      }
      entryDiv.style.display = "block"; //display the div which was clicked
    }
  );

  buttonCount++; //increments button number
};

entryForm.addEventListener("submit", addEntrytoDom);
