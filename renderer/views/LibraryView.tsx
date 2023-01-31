import React, { useEffect } from "react";
import VideoDTO from "../../main/dto/video";
import LibraryPlaceHolder from "../components/LibraryPlaceHolder";
import LocalVideoItem from "../components/LocalVideoItem";
import { useLocalVideo } from "../context/LocalVideoContext";

export let updateLocalVideo: (videoUpdated: VideoDTO) => void;

export default function LibraryView({ hidden }: { hidden: boolean }) {
    window.mainApi.log("debug", "LibraryView rendered!");
    console.log("LibraryView rendered!");

    const { localVideos, setLocalVideos } = useLocalVideo();

    updateLocalVideo = (videoUpdated) => {
        setLocalVideos(
            localVideos.map((video) =>
                video.id === videoUpdated.id ? videoUpdated : video
            )
        );
    };

    useEffect(() => {
        window.videoApi.getAll().then((videos) => {
            setLocalVideos(videos);
        });
    }, [hidden]);

    return (
        <>
            {!hidden && (
                <>
                    {localVideos.length ? (
                        <div className="mx-2 my-10 h-80 overflow-auto px-8 scrollbar-thin scrollbar-track-neutral-300 scrollbar-thumb-lime-500 scrollbar-track-rounded scrollbar-thumb-rounded">
                            {localVideos.map((video) => (
                                <React.Fragment key={video.id}>
                                    <LocalVideoItem video={video} />
                                </React.Fragment>
                            ))}
                        </div>
                    ) : (
                        <LibraryPlaceHolder />
                    )}
                </>
            )}
        </>
    );
}
