<h1 align="center">
    Moubah</br>
    đ§ (WIP) đ§ </br>
</h1>
</br>

## âšī¸ Descritpion

Desktop application built with Electron to play YouTube videos without background music

<details>
<summary>đ Why this? Let's dive in...</summary>

</br>

> Desktop application ...

A web page would have been more convenient for the end user, but the processing of the video requires a high CPU and/or GPU consumption combined with non-javascript dependencies that cannot take place in a browser (client side).
A solution could have been to place this processing on the server side, but this would have had a considerable cost and the primary objective of this service is to be 100% free. This could happen in the future in cha Allah with the financial support of the community, but not now.

"What about a mobile app?"
Here, the problem with doing client-side processing is that the machine learning model trained to separate voice from audio is not currently compatible to run on a phone (as far as I know, this [PR](https://github.com/deezer/spleeter/issues/477) is still opened, this [project](https://github.com/FaceOnLive/Spleeter-Android-iOS) doesn't seem to work, and the processing time would have been to slow anyway).
As for the problem of server-side processing, it's the same as for the web version: not impossible, but it's not free

> ... built with Electron ...

A GUI built with a Python framework would have been technically simpler, but I turned to Electron to deepen my knowledge of the front end stack: JS / TS / React / HTML / CSS

> ... to play YouTube videos without background music

For the moment, only youtube videos are supported, but in the future, audios/videos can also be imported directly from the computer to have the background music removed, bi idhni Allah.
The app is centred around youtube as there is a lot of useful (e.g. tutorials) and/or entertaining (e.g. documentaries) content available on this platform with music in the background. This being haram in Islam, this app makes it... Moubah

</details>

</br>

<p align="center">
  <img src="moubah-example.gif" alt="Example of Moubah usage" />
</p>

**Download the app** : đ ~~Apple~~ | đĒ ~~Windows~~ | đ§ ~~Linux~~

</br>

## đ Tech Stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![gRPC](https://img.shields.io/badge/gRPC-244c5a.svg?style=for-the-badge&logoColor=white)

<!-- ![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) -->
<!-- ![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white) -->
<!-- ![Tailwind CSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) -->

</br>

### đē Architecture diagram

<p align="center">
  <img src="moubah-architecture.drawio.svg" alt="Moubah architecture diagram" />
</p>

</br>

### đģ Supported OS

| Windows | Mac (Intel) |                                 Mac (Apple silicon)                                  | Linux |
| :-----: | :---------: | :----------------------------------------------------------------------------------: | :---: |
|   â    |     đ      | â ([Python 3.8.10](https://www.python.org/downloads/release/python-3810/) required) |  â   |

> â Supported | đ Not tested yet | â Not support plannned yet

</br>

## đ§ Setup

### đĨ Download the source code

Use the `--recursive` option because of the git submodule:

```bash
git clone git@github.com:karim-bouchez/moubah.git --recursive
```

</br>

### đ Install dependencies

Install npm packages:

```bash
npm install -âsave-dev
```

</br>

Install the [music remover](https://github.com/karim-bouchez/music-remover) server:

```bash
cd music-remover
```

... then follow the "đ§ Setup" section [here](https://github.com/karim-bouchez/music-remover#-setup)

</br>

### âī¸ Run

```bash
npm start
# or debug it đĒ˛ with: npm run debug
```

</br>

### đĻ Create an executable file

```bash
npm run make
```

</br>

## đ  Troubleshooting

`no such file or directory ... protobuf/main.proto` on `npm run dev/prod` -> run: `git submodule update --init`

</br>

## đ¯ To-do list

-   [ ] đĒ˛ On mac: quit when the close button is clicked
-   [ ] đ Improve UI/UX
-   [ ] đĒ˛ First installation/run is very long -> make a progress bar or something
-   [ ] đ Support multi-languages (at least french and english)
-   [ ] đ§ŧ Use Hexagonal architecture
-   [ ] đ§ŧ Use TS instead of JS
-   [ ] đ§ŧ Use React framework
-   [ ] đ§ŧ Use tailwind css
-   [ ] đ Add e2e tests
-   [ ] đ improve logs (time + separate music-remover logs from moubah.log) and add several level of logs (like logging in Python)
-   [ ] đ Setup CI/CD
-   [ ] đĒ˛ Audio result isn't smooth, find why...
-   [ ] đ Add an uninstaller
-   [ ] đ Notification system on new release
-   [ ] đ Preview videos (without sound) on hover
-   [ ] đ Be able to see "directly" the video (and don't have to wait until the whole video is processed)
-   [ ] đ Be able to open Moubah from YouTube (see [here](https://docs.freetubeapp.io/usage/browser-extension/))
-   [ ] đ Add an ML filter on thumbnail that blur thumbnails with women

> đĒ˛ Fix bug | đ Add new feature | đ§ŧ Refactoring code
