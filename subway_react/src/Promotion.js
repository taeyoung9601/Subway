import React from 'react';
import { Sillim } from './component_태영';
import { Sinchon } from './component_준철';
import { Total } from './component_성락';
import { Jamsil } from './component_성태';
import { Cityhall } from './components_성미';
import App_gangnam from './components_연주/App_gangnam';

const Promotion = ({ id }) => {
  let content;

  switch (id) {
    case "0":
      content = <Sinchon />;
      break;
    case "1":
      content = <Cityhall />;
      break;
    case "2":
      content = <Jamsil />;
      break;
    case "3":
      content = <App_gangnam />;
      break;
    case "4":
      content = <Total />;
      break;
    case "5":
      content = <Sillim />;
      break;
    default:
      content = <div>Default Content</div>;
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Promotion;