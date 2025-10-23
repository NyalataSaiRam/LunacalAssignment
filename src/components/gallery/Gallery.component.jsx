import WidgetContainer from "../widget/WidgetContainer.component";
import './Gallery.css'
import img1 from '../../assets/image.jpg'
import { useEffect, useRef, useState } from "react";

const Gallery = () => {

    const [x, setX] = useState(0)
    const [images, setImages] = useState([img1, img1, img1, img1])
    const [disableLeft, setDisableLeft] = useState(false)
    const [disableRight, setDisableRight] = useState(false)
    const fileInputRef = useRef()

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            const fileUrl = URL.createObjectURL(file)
            setImages(prev => [...prev, fileUrl])
        }

        e.target.value = null;

    }

    useEffect(() => {
        setDisableLeft(false);
        setDisableRight(false);
    }, [images])

    const handleClick = (direction) => {

        const maxReplacement = (images.length - 3) * 210;
        if (direction === 'right') {
            setX(prev => {
                if (maxReplacement === Math.abs(prev)) {
                    setDisableRight(true)
                    return prev
                }
                if (disableLeft == true) setDisableLeft(false);
                return prev - 210;
            })
        } else {
            setX(prev => {
                if (prev < 0) {
                    if (disableRight == true) setDisableRight(false);
                    return prev + 210;
                }
                setDisableLeft(true)
                return prev;
            })
        }
    }

    return (
        <WidgetContainer>

            <div className="widget_title">Gallery</div>
            <button onClick={() => fileInputRef.current.click()} className="add_image_btn ">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M4.03226 8.82056C4.03226 9.02108 4.11191 9.21338 4.2537 9.35517C4.39549 9.49696 4.58779 9.57661 4.78831 9.57661C4.98882 9.57661 5.18113 9.49696 5.32291 9.35517C5.4647 9.21338 5.54435 9.02108 5.54435 8.82056V5.54435H8.82056C9.02108 5.54435 9.21338 5.4647 9.35517 5.32291C9.49696 5.18113 9.57661 4.98882 9.57661 4.78831C9.57661 4.58779 9.49696 4.39549 9.35517 4.2537C9.21338 4.11191 9.02108 4.03226 8.82056 4.03226H5.54435V0.756048C5.54435 0.555532 5.4647 0.363228 5.32291 0.221441C5.18113 0.0796549 4.98882 0 4.78831 0C4.58779 0 4.39549 0.0796549 4.2537 0.221441C4.11191 0.363228 4.03226 0.555532 4.03226 0.756048V4.03226H0.756048C0.555532 4.03226 0.363228 4.11191 0.221441 4.2537C0.0796549 4.39549 0 4.58779 0 4.78831C0 4.98882 0.0796549 5.18113 0.221441 5.32291C0.363228 5.4647 0.555532 5.54435 0.756048 5.54435H4.03226V8.82056Z" fill="white" />
                </svg>
                <div>
                    Add Image
                </div>
            </button>

            <button disabled={disableLeft} onClick={() => handleClick('left')} className="left_arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M1 7.99999H15.1944" stroke={disableLeft ? "#FFF" : "#6F787C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 15L1 8L8 1" stroke={disableLeft ? "#FFF" : "#6F787C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button disabled={disableRight} onClick={() => handleClick('right')} className="right_arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M15.1945 8.00001L1.00001 8.00001" stroke={disableRight ? "#FFF" : "#6F787C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.19446 1L15.1945 8L8.19446 15" stroke={disableRight ? "#FFF" : "#6F787C"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="slideWindow">
                <div style={{ transform: ` translateX(${x}px)` }} className="slider">
                    {
                        images.map((img, i) => (


                            <img key={i} src={img} alt={'image'} />

                        ))
                    }
                </div>
            </div>

            <input ref={fileInputRef} hidden onChange={handleFileInputChange} type="file" />

        </WidgetContainer>
    )
}

export default Gallery;

