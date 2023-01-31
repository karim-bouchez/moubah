import React, { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { abbrNum } from "../utils/helpers";
import { useLocalVideo } from "../context/LocalVideoContext";
import VideoDTO from "../../main/dto/video";
import { VideoStatus } from "../../main/utils/enum";
import { useView } from "../context/ViewContext";
import { View } from "../utils/enums";
import { usePlayer } from "../context/PlayerContext";
import PreviewModal from "./PreviewModal";

export default function VideoResult({ videos }: { videos: VideoDTO[] }) {
    window.mainApi.log("debug", "VideoResult rendered!");

    const { setView } = useView();
    const { updateVideo } = usePlayer();
    const { localVideos, addLocalVideo } = useLocalVideo();
    const [videoIndex, setVideoIndex] = useState(0);
    const [modelShown, setModelShown] = React.useState(false);

    const currVideo = videos[videoIndex];
    let currLocalVideo = localVideos.find(
        (localVideo) => localVideo.id === currVideo.id
    );

    function prevVideo() {
        if (videoIndex - 1 >= 0) {
            setVideoIndex((currVideoIndex) => currVideoIndex - 1);
        }
    }

    function nextVideo() {
        if (videoIndex + 1 <= videos.length - 1) {
            setVideoIndex((currVideoIndex) => currVideoIndex + 1);
        }
    }

    function onClickThumbnail() {
        switch (currLocalVideo?.status) {
            case VideoStatus.done:
                updateVideo(currLocalVideo);
                setView(View.player);
                break;
            case VideoStatus.processing:
            case VideoStatus.downloading:
            case VideoStatus.initial:
                setView(View.library);
                break;
            default:
                removeMusic();
                break;
        }
    }

    function removeMusic() {
        const video = currVideo;
        window.videoApi.sendToDownload(video);
        addLocalVideo(video);
    }

    function renderButtonContent(status?: VideoStatus) {
        switch (status) {
            case VideoStatus.done:
                return "✅ Background music removed";
            case VideoStatus.processing:
                return "⚙️ Removing background music...";
            case VideoStatus.downloading:
            case VideoStatus.initial:
                return "📥 Downloading the video...";
            default:
                return "🔇 Remove background music";
        }
    }

    function preview() {
        // todo
        setModelShown(true);
    }

    return (
        <div className="grow flex flex-col justify-evenly items-center">
            <div className="flex items-center">
                <div>
                    <ArrowLeftIcon
                        className={`cursor-pointer h-10 m-20 ${
                            videoIndex === 0
                                ? "text-neutral-400 cursor-not-allowed"
                                : ""
                        }`}
                        onClick={prevVideo}
                    />
                </div>
                <div className="basis-4/6">
                    <div className="h-12 line-clamp-2">
                        Title: {currVideo.title}
                    </div>
                    <img
                        className="my-5 aspect-video shadow-xl"
                        src={currVideo.thumbnailUri}
                        alt="Thumbnail"
                    />
                    <div>
                        Duration: {currVideo.timestamp} | Views:{" "}
                        {abbrNum(currVideo.views)}
                    </div>
                    <div>Author: {currVideo.author.name}</div>
                </div>
                <div>
                    <ArrowRightIcon
                        className={`cursor-pointer h-10 m-20 ${
                            videoIndex === videos.length - 1
                                ? "text-neutral-400 cursor-not-allowed"
                                : ""
                        }`}
                        onClick={nextVideo}
                    />
                </div>
            </div>
            <div className="my-10 flex flex-col items-center">
                <button
                    className="m-1 text-neutral-600 hover:text-neutral-700 hover:underline"
                    onClick={preview}
                >
                    Preview the video
                </button>
                <button
                    onClick={onClickThumbnail}
                    className={
                        "p-3 bg-neutral-400 hover:bg-neutral-700 hover:text-neutral-400 rounded"
                    }
                >
                    {renderButtonContent(currLocalVideo?.status)}
                </button>
            </div>
            {modelShown && (
                <PreviewModal setShowModal={setModelShown} video={currVideo} />
            )}
        </div>
    );
}
