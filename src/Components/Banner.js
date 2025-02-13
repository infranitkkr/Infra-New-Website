import React from "react";
import FlowingMenu from "../Animations/FlowMenu";

export default function Banner() {

  const demoItems = [
    { link: '#', text: 'Registerations are open', image: 'https://picsum.photos/600/400?random=1' },
  ];
  return (
    <div >
  <FlowingMenu items={demoItems} />

</div>
  );
}
