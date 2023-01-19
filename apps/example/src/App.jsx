import "./App.css";
import AppBuilderReactSdk from "@appbuilder/react";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
function App() {
  
  const {phrase} = useParams();
  
  const startMeeting = async () => {
    await AppBuilderReactSdk.join(phrase);
  }

  useEffect(() => {
    startMeeting();
  }, [])

  return (
    <div className="App">
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <AppBuilderReactSdk.View />
      </div>
    </div>
  );
}

export default App;
