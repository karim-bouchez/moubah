import React from "react";
import { useView } from "../context/ViewContext";
import { View } from "../utils/enums";

export default function PlayerPlaceHolder() {
    window.mainApi.log("debug", "PlayerPlaceHolder rendered!");
    const { setView } = useView();

    return (
        <div className="text-neutral-400 flex h-full w-full flex-col justify-center text-center">
            <span>
                Select a video in the
                <button
                    className="bg-neutral-200 hover:bg-neutral-400 hover:text-neutral-500 m-1 rounded p-1 font-semibold duration-200 hover:bg-opacity-50"
                    onClick={() => setView(View.library)}
                >
                    Library
                </button>
            </span>
        </div>
    );
}
