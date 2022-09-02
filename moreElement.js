import elementMaker from "./elementMaker.js";

export default function moreElement() {
  let temp = [];
  for (let i = 0; i < 4; i++) {
    let elem = elementMaker("div", `bye-${i + 1}`);
    temp.push(elem);
    // console.log('hello');
  }
  return temp.join("");
}
