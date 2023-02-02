import image from "./135.gif"

function Loading() {

    return (
        <div className='loading'>
            <img src={image} alt='load' width="20%"></img>
        </div>
        
    );
}

export default Loading;