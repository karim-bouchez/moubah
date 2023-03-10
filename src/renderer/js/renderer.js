import initIpcHandlers from "./ipc-handlers.js";

initIpcHandlers();

// Navigation bar

import { switchView } from "./view/nav-bar.js";
const searchNavLink = document.getElementById("search-nav-link");
const libraryNavLink = document.getElementById("library-nav-link");
const playerNavLink = document.getElementById("player-nav-link");
const contactNavLink = document.getElementById("contact-nav-link");

searchNavLink.onclick = switchView;
libraryNavLink.onclick = switchView;
playerNavLink.onclick = switchView;
contactNavLink.onclick = switchView;
searchNavLink.click();

// Search view

import {
    downloadVideo,
    onClickArrowRight,
    onClickArrowLeft,
    search,
    searchOnEnter,
} from "./view/search.js";

const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const downloadButton = document.getElementById("download-button");
const arrowLeft = document.getElementsByClassName("fa-arrow-left")[0];
const arrowRight = document.getElementsByClassName("fa-arrow-right")[0];

searchBar.onkeypress = searchOnEnter;
searchButton.onclick = search;
arrowRight.onclick = onClickArrowRight;
arrowLeft.onclick = onClickArrowLeft;
downloadButton.onclick = downloadVideo;

// Library view

import { refresh } from "./view/library.js";

const libraryRefreshButton = document.getElementById("library-refresh");
libraryRefreshButton.onclick = refresh;

// Footer

import { toogleDevTools, openLogsDir } from "./view/footer.js";

const devToolsButton = document.getElementById("dev-tools");
const logsButton = document.getElementById("logs");

devToolsButton.onclick = toogleDevTools;
logsButton.onclick = openLogsDir;
