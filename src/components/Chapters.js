import React,{useState} from 'react'

const Chapters = ({chapters,chapterHandler}) => {
  const[activateId,setActivateId] = useState('')  
  return (
        <div className='min-vh-100 shadow-lg p-3 bg-red'>
        <h1 className='fs-5 fw-bold text-center'>Chapters</h1> <hr />
        <ul className='list-group text-end'>
              {chapters&&chapters.length>0?(chapters.map((chapter=>(
                <div key={chapter.id}>
                <li
                onClick={(e)=>{
                  setActivateId(chapter.id)
                  chapterHandler(chapter)
                }}
                  className=
                  {`cursor
                    list-group-item
                    bg-transparent 
                    border-0
                    text-light 
                    py-0
                    d-flex 
                    justify-content-between 
                    ${activateId===chapter.id&&'active'}
                    `} >
                  <span>{chapter.id}</span> <span>{chapter.name_arabic}</span>
                </li>
                <hr />
              </div>
              )))):
              
              
              ( 
              <div className='text-center'>
              <span className='spinner-border'></span>
            </div>
            )}
           
        </ul>
      </div>
    )
}

export default Chapters
