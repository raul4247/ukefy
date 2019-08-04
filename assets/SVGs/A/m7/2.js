import React from "react";
import Svg, { Text, G, Path, Circle } from "react-native-svg";

const Svg2 = props => (
  <Svg width={255} height={335} viewBox="0 0 102 134" {...props}>
    <Text
      fill="#12d3cf"
      x={52}
      y={14}
      textAnchor="middle"
      fontSize={15}
      fontFamily="Oswald-Regular"
    >
      {"Am7"}
    </Text>
    <Text
      x={-14}
      y={17}
      textAnchor="middle"
      fontSize={6}
      fontFamily="Oswald-Regular"
      transform="translate(20 24)"
    >
      {"3"}
    </Text>
    <G fill="#1c313a">
      <Path d="M20 26h2v80h-2zM40 26h2v80h-2zM60 26h2v80h-2zM80 26h2v80h-2z" />
    </G>
    <G fill="#1c313a">
      <Path d="M20 26h62v2H20zM20 46h62v2H20zM20 66h62v2H20zM20 86h62v2H20zM20 106h62v2H20z" />
    </G>
    <Circle r={7} fill="#67eaca" transform="translate(41 57)" />
    <Circle r={7} fill="#67eaca" transform="translate(61 77)" />
    <Circle r={7} fill="#67eaca" transform="translate(81 37)" />
    <G transform="translate(21 19)">
      <Circle r={3} fill="none" stroke="#67eaca" />
    </G>
    <G
      textAnchor="middle"
      fill="#12d3cf"
      fontSize={9}
      fontFamily="Oswald-Regular"
    >
      <Text transform="translate(21 122)">{"G"}</Text>
      <Text x={20} transform="translate(21 122)">
        {"E"}
      </Text>
      <Text x={40} transform="translate(21 122)">
        {"A"}
      </Text>
      <Text x={60} transform="translate(21 122)">
        {"C"}
      </Text>
    </G>
  </Svg>
);

export default Svg2;
