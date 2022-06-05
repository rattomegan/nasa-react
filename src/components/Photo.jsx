const Photo = ({ photoData }) => {
  return (
    <>
    {
      !photoData ?
        <div></div>
      :
        <div>
          {photoData.media_type === 'image' ?
            <img
              src={photoData.url}
              alt={photoData.title}
            /> 
          : 
            <iframe 
              title='space-video'
              src={photoData.url}
              frameBorder='0'
              gesture='media'
              allow='encryped-media'
              allowFullScreen
              className='photo'
            />
          }
 
          <div>
            <h1>{photoData.title}</h1>
            <p>{photoData.date}</p>
            <p>{photoData.explanation}</p>
          </div>

        </div>
    }
  </>

  )
}

export default Photo