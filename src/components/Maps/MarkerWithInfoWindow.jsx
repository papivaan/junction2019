import React, { useState } from "react";

import { Marker, InfoWindow } from "react-google-maps"

const MarkerWithInfoWindow = (props) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Marker onClick={() => setOpen(true)} position={props.location}>
      {isOpen && (
        <InfoWindow onCloseClick={() => setOpen(false)} options={{ closeBoxURL: ``, enableEventPropagation: true }}>
          <div>
            <h4>{props.name}</h4>
            {props.site.map(s => (
              <div key={s.order} style={{ marginBottom: '5px' }}>
                <div>
                  <h5>{s.description}</h5>
                  <div>{`Työnjohtaja: ${s.supervisor}`}</div>
                  <div>{`Status: ${s.status.toString()}`}</div>
                  <div>{`Aloitus: ${s.start_limit_date}`}</div>
                  <div>{`Valmistuminen: ${s.end_limit_date}`}</div>
                  <br />
                </div>
              </div>
            ))}
          </div>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default MarkerWithInfoWindow;