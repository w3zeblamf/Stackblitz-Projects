document.querySelector('.menu').addEventListener('click', () =>
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
    })
);

document.querySelectorAll('.wrapper').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.remove('change');
        });
    });
});

//Play video on hover

const videos = document.querySelectorAll('.video');
//console.log(video)

videos.forEach((video) => {
video.addEventListener('mouseover', () => {
    video.play();
});
    video.addEventListener('mouseout', () => {
        video.pause();
    })
});

//End ofPlay video on hover