import PhotoAlbum from "react-photo-album";

const photos = [
    {
        src: "C:\Users\jayke\OneDrive\Desktop\JakeWebsite\src\assets\linkedin.png",
        width: 800,
        height: 600,
        srcSet: [
            { src: "C:\Users\jayke\OneDrive\Desktop\JakeWebsite\src\assets\linkedin.png", width: 400, height: 300 },
            { src: "C:\Users\jayke\OneDrive\Desktop\JakeWebsite\src\assets\linkedin.png", width: 200, height: 150 }
        ]
    },
    {
        src: "C:\Users\jayke\OneDrive\Desktop\JakeWebsite\src\assets\linkedin.png",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "C:\Users\jayke\OneDrive\Desktop\JakeWebsite\src\assets\linkedin.png", width: 800, height: 450 },
            { src: "C:\Users\jayke\OneDrive\Desktop\JakeWebsite\src\assets\linkedin.png", width: 400, height: 225 }
        ]
    }
];

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}