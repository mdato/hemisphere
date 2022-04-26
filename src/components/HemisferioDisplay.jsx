import React from "react";
import "./Hemisferio.css";

let norte =
  "https://th.bing.com/th/id/R.2ef1dcd1214b8dd23154180e7866c68a?rik=5vVFUd1STVFXYg&pid=ImgRaw&r=0&sres=1&sresct=1";
let sur =
  "https://th.bing.com/th/id/R.51b48db0cc59d0ebe59364f3c712ceb9?rik=E5KO6LUZOmWrMg&pid=ImgRaw&r=0&sres=1&sresct=1";

const hemisConfig = {
  elNorte: {
    text: "You are in the northern hemisphere ! ",
    foto: norte,
  },
  elSur: {
    text: "You are in the southern hemisphere ! ",
    foto: sur,
  },
};

//export default function HemisferioDisplay(props) {
export default function HemisferioDisplay({ latitude, longitude }) {
  //console.log(props);
  console.log(latitude, longitude);
  const hemis = latitude > 0 ? "elNorte" : "elSur";
  const { text, foto } = hemisConfig[hemis];

  return (
    <div className={hemis}>
      <div className="ui raised text container segment">
        <div className="image">
          {/*<img src={foto} alt="hemis foto" />*/}

          <img src={foto} alt="new" />
        </div>
        <div className="ui teal bottom attached label">
          <h3>
            {text} {latitude} {longitude}
          </h3>
        </div>
      </div>
    </div>
  );
}
