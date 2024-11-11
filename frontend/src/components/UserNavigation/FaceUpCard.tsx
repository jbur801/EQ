const proxyPrefix = 'https://infinite-bayou-83293-7e3a584bfa26.herokuapp.com/'
const artLocationSrcPrefix = 'https://ga-index-public.s3.us-west-2.amazonaws.com/cards/'
const extension = '.jpg'

export const faceUpCard =(card:any,width=125,height=175)=> {
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
       </div>
    )

}