
interface GalleryItemProps {

    name : string;
    Species : string;
    origin : string;
    img : string;
    status: string;


}

function GalleryItem(props : GalleryItemProps) {
    return (
        <div>
            <div className={'card'}>
                <h1 className={'card_text'}>
                    {props.name}
                </h1>

                <p>
                    <img src={props.img}/>
                </p>

                <p className={'card_text'}>
                    <h3>Art: {props.Species} &ndash; Status: {props.status}</h3>
                    <h3 className={'h3_last'}>Herkunft: {props.origin}</h3>
                </p>


            </div>
        </div>
    )
}


export default GalleryItem;