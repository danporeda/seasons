import { useState } from 'react';
import SeasonDisplay from './components/SeasonDisplay';
import { ImSpinner9 } from "react-icons/im";

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locError, setLocError] = useState(null);

  const success = (pos) => {
    const crd = pos.coords;
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
    // setIsLoading(false);
  }

  const error = async (err) => {
    setLocError(err.message);
  }

  window.navigator.geolocation.getCurrentPosition(success, error);

  return <div>
    {locError}
    <div style={{ display: locError ? "none" : "flex" }}>
      Latitude: {latitude || <ImSpinner9 />} - Longitude: {longitude || <ImSpinner9 />}
    </div>
    <div><SeasonDisplay lat={latitude} /></div>
  </div>
}

export default App;