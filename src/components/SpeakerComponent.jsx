
export default function SpeakerComponent({id,backgroundShape,personImage,personName,designation}) {

    let shapeClass;
    if(id == 0 || id == 3){
        shapeClass = 'circleImage'
    }else if(id == 1 || id == 4 ){
        shapeClass = 'rectangleImage'
    }else if(id == 2 || id == 5){
        shapeClass = 'triangleImage'
    }

  return (
   <>
    <div className="individualSpeaker">
                <img className={shapeClass} src={backgroundShape} alt="" />
                <img className={`personImage ${shapeClass === 'triangleImage'?'trianglePersonImage' : ''}`} src={personImage} alt="" />
                <div className={`personDetails ${shapeClass === 'triangleImage'?'triangleDetails' : ''}`}>
                  <h3 className='personName'>{personName}</h3>
                  <p className='personDesignation'>{designation}</p>
                </div>      
    </div>
   </>
  )
}
