import React, { useState } from "react";

import { Marker, InfoWindow } from "react-google-maps"
import { CopyToClipboard } from "react-copy-to-clipboard";

const MarkerWithInfoWindow = (props) => {
  const [isOpen, setOpen] = useState(false)
  const [hover, setHover] = useState(false)
  const [copiedText, setCopy] = useState('')
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
                  <div style={{ display: 'flex', alignItems: 'center' }}>{`OrderID: ${s.order}`}
                    <CopyToClipboard
                      text={s.order}
                      onCopy={() => setCopy(s.order)}
                    >
                      <button
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                        style={hover ? { padding: '5px', border: 'none', cursor: 'pointer' } : { padding: '5px', border: 'none' }}
                        id="tooltip982655500"
                        type="button"
                      >
                        <div style={{ display: 'flex', marginLeft: '3px', alignItems: 'center' }}>
                          <i className={copiedText === s.order ? "ni ni-check-bold" : "ni ni-ungroup"} />
                          <span>{copiedText === s.order ? "Copied to clipboard" : "Copy to clipboard"}</span>
                        </div>
                      </button>
                    </CopyToClipboard></div>
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