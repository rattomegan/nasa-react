const Photo = ({ photoData }) => {
  return (
    <>
    {
      !photoData ?
        <div>Loading...</div>
      :
        <div className='data-container'>
          {photoData.media_type === 'image' ?
            <div className='data-photo'>
              <img
                className='photo'
                src={photoData.url}
                alt={photoData.title}
              /> 
            </div>

          : 
            <div>
              <iframe 
                title='space-video'
                src={photoData.url}
                frameBorder='0'
                gesture='media'
                allow='encryped-media'
                allowFullScreen
                className='data-photo'
              />
            </div>

          }
 
          <div className='data-text'>
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