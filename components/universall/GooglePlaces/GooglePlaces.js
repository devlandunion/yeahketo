import styles from "./Style/style"
import React, { useState } from "react"
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"

const MY_API_KEY = "AIzaSyDkEIdHmcCCKXbjuk5jqel_oaRXdXx9bF0"

function GoogleSuggest({ meta, onChange, children, changePlace }) {
  const [search, setSearch] = useState("")
  const [value, setValue] = useState("")

  const handleInputChange = e => {
    setSearch(e.target.value)
    setValue(e.target.value)
    onChange(e.target.value)
  }

  const handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
    setSearch("")
    changePlace(geocodedPrediction)
    setValue(originalPrediction.structured_formatting.main_text)
    onChange(originalPrediction.structured_formatting.main_text)
  }

  const handleNoResult = () => {
    //console.log('No results for ', search);
  }

  const handleStatusUpdate = () => {
    //console.log(status);
  }

  return (
    <React.Fragment>
      <style jsx>{styles}</style>
      <div className="desktop-field promo-street">
        {children}
        <GoogleMapLoader
          params={{
            key: MY_API_KEY,
            libraries: "places,geocode"
          }}
          render={googleMaps =>
            googleMaps && (
              <GooglePlacesSuggest
                googleMaps={googleMaps}
                autocompletionRequest={{
                  input: search,
                  types: ["address"]
                  // Optional options
                  // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                }}
                // Optional props
                onNoResult={handleNoResult}
                onSelectSuggest={handleSelectSuggest}
                onStatusUpdate={handleStatusUpdate}
                textNoResults="No results" // null or "" if you want to disable the no results item
                customRender={prediction => (
                  <div className="customWrapper">
                    {prediction ? autoComplete(prediction) : "No results"}
                  </div>
                )}
              >
                <input
                  autoComplete="offf"
                  type="text"
                  value={value}
                  // placeholder="Search a location"
                  onChange={handleInputChange}
                  className={`field-input field-select ${(meta.touched || meta.dirty) &&
                    "field-valid"} ${meta.error &&
                    (meta.touched || meta.dirty) &&
                    "field-invalid"}`}
                  placeholder="Street and number, P.O. box, c/o."
                  id="street"
                />
              </GooglePlacesSuggest>
            )
          }
        />
        {meta.error && (meta.touched || meta.dirty) && (
          <span className="field-error" style={{
            position: "static"
          }}>{meta.error}</span>
        )}
        {(meta.touched || meta.dirty) && (
          <span
            className={`fa check ${meta.error ? "fa-times check-invalid" : "fa-check check-valid"}`}
          ></span>
        )}
      </div>
    </React.Fragment>
  )
}

function autoComplete(item) {
  const {structured_formatting} = item
  const cutLength = 35
  const firstMatchedString =
    structured_formatting &&
    structured_formatting.main_text_matched_substrings.length > 0 &&
    structured_formatting.main_text_matched_substrings[0]
  let labelParts = null
  const isSecondText = structured_formatting.main_text.length + structured_formatting.secondary_text.length <= cutLength ? true : false
  if (firstMatchedString) {
    labelParts = {
      before: structured_formatting.main_text.substr(0, firstMatchedString.offset),
      match: structured_formatting.main_text.substr(
        firstMatchedString.offset,
        firstMatchedString.length
      ),
      after: structured_formatting.main_text.substr(
        firstMatchedString.offset + firstMatchedString.length
      ),
      secondary_text: structured_formatting.secondary_text.substring(
        0, cutLength - structured_formatting.main_text.length
      ),
    }
  }
  const {before, match, after, secondary_text} = labelParts
  return(
    <React.Fragment>
      <style jsx>{styles}</style>
      <div className="customLocation">
        <div className="fa fa-map-marker"></div>
        <div>
          <span className="main-text">
            {before}
            <b>{match}</b>
            {after}
          </span>
          {isSecondText ? secondary_text : secondary_text + "..."}
        </div>
      </div>
    </React.Fragment>
  )
}

export default GoogleSuggest