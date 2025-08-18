export function initVideoPopover() {
    /** @type {NodeListOf<HTMLAnchorElement>} */
    const videoLinks = document.querySelectorAll(
        ".portfolio-card-icons-item-link[aria-label='Video']",
    );
    /** @type {HTMLDialogElement} */
    const popover = document.querySelector(".video-popover");
    /** @type {HTMLVideoElement} */
    const video = popover?.querySelector("video");

    for (let videoLink of videoLinks) {
        videoLink.addEventListener("click", function handleVideoPopover(event) {
            event.preventDefault();

            video.src = videoLink.href;
            popover.showPopover();
            video.play();
        });
    }

    popover.addEventListener(
        "close",
        function handleVideoPopoverCloseCleanup() {
            video.pause();
            video.src = "";
        },
    );
}
