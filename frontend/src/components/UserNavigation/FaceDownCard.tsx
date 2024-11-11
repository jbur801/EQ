const proxyPrefix = 'https://infinite-bayou-83293-7e3a584bfa26.herokuapp.com/'
const artLocationSrcPrefix = 'https://ga-index-public.s3.us-west-2.amazonaws.com/cards/'
const extension = '.jpg'

export const faceDownCard =(card:any,width=125,height=175)=> {
    return(
      <div id= {card.id} style={{width,height,position:'relative'}}>
        card
        <img src = {artLocationSrcPrefix+card.editions[0].slug+extension}         alt="Bottom"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      }}/>
        <img src={'/images/icons/ygo.jpg'}         alt="Top"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        opacity: 0.3, // Set opacity to 50%
      }}/>
    {/*     
        <span className={css.effectLabel}>Effect:</span> 
          <div dangerouslySetInnerHTML={{ __html:card.effect}}/>  */}
        </div>
    )

}
