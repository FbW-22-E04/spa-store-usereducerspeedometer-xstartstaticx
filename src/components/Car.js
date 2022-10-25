import React, { useContext, useState } from "react";
import { SpeedContext } from "./ContextAPI";
import ReactSpeedometer from "react-d3-speedometer";

export default function Car() {
  const { state, dispatchState } = useContext(SpeedContext);

  const [turnOn, setTurnOn] = useState(false);

  if (turnOn === false) {
    return (
      <div className="car">
        <h2>Ausgeschaltet</h2>
        <h3>{state} km/h</h3>
        <button onClick={() => setTurnOn(!turnOn)}>Anschalten</button>
        <button>Gas geben</button>
        <button onClick={() => dispatchState({ type: "brake" })}>
          Bremsen
        </button>
      </div>
    );
  } else {
    return (
      <div className="car">
        <ReactSpeedometer
          needleHeightRatio={0.7}
          maxValue={240}
          maxSegmentLabels={4}
          segments={3}
          customSegmentStops={[0, 96, 144, 192, 240]}
          segmentColors={["firebrick", "tomato", "gold", "limegreen"]}
          currentValueText={`${state} km/h`}
          value={parseInt(state)}
        />
        <h3>{state} km/h</h3>
        <button
          onClick={() => {
            if (state === 0) {
              setTurnOn(!turnOn);
            }
          }}
        >
          Ausschalten
        </button>
        <button onClick={() => dispatchState({ type: "accelerate" })}>
          Gas geben
        </button>
        <button onClick={() => dispatchState({ type: "brake" })}>
          Bremsen
        </button>
      </div>
    );
  }
}
