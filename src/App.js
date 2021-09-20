import "./App.css";
import Video from "./Video";

import Data from "./Data";

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        {Data.map((data) => (
          <Video
            key={data.channel}
            url={data.url}
            channel={data.channel}
            description={data.description}
            song={data.song}
            likes={data.likes}
            messages={data.messages}
            shares={data.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
