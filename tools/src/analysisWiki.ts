import * as https from 'node:https';
import { parse } from 'node-html-parser';
https.get('https://satisfactory.fandom.com/wiki/Adaptive_Control_Unit', (res) => {
    res.on("data", (data) => {
      const p = parse(data);
      const f= p.getElementById("firstHeading")
      if(f) {

      console.log(f);
      console.log("-------------------------------------");
      console.log(f.toString());
      console.log("-------------------------------------");
      console.log(f.childNodes[1]);
      console.log("-------------------------------------");
      console.log(f.childNodes[1].toString());
      console.log("-------------------------------------");
      console.log(f.childNodes[1].text);
      console.log("-------------------------------------");
      }
      const ts = p.getElementsByTagName("table")
      if (ts.length > 0){
        ts.forEach((t)=>{
          if(t.rawAttrs === 'class="wikitable" style="text-align:center"'){
      console.log("-------------------------------------");
          console.log(t)
      console.log("-------------------------------------");
          console.log(t.firstChild?.childNodes)


          }
        })
      }
    });
  }
);
