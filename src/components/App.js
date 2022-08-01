import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetial from "./VideoDetail";

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        // this.onTermSubmit('Nature')
    }

    onTermSubmit = async (term) => {
        const responce = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({
            videos: responce.data.items,
            selectedVideo: responce.data.items[0]
        });

    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
        console.log(video)
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui stackable grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetial video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;