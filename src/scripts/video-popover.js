export function initVideoPopover() {
    /** @type {NodeListOf<HTMLAnchorElement>} */
    const videoLinks = document.querySelectorAll(
        ".portfolio-card-icons-item-link[aria-label='Video']",
    );
    /** @type {HTMLDialogElement} */
    const dialog = document.querySelector(".dialog-popover");
    /** @type {HTMLVideoElement} */
    const dialogVideo = dialog?.querySelector("video");

    for (let videoLink of videoLinks) {
        videoLink.addEventListener("click", function handleVideoPopover(event) {
            event.preventDefault();

            dialogVideo.src = videoLink.href;
            dialog.showPopover();
            dialogVideo.play();
        });
    }

    dialog.addEventListener("close", function handleVideoPopoverCloseCleanup() {
        dialogVideo.pause();
        dialogVideo.src = "";
    });
}
