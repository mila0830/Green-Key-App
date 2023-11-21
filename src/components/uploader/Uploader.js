import { useState } from 'react'
import './Uploader.css'
import { MdCloudUpload, MdDelete} from 'react-icons/md'
import { AiFillFileImage, AiFillFilePdf } from 'react-icons/ai'

function Uploader(){
    const [pdf, setPDF] = useState(null)
    const[fileName, setFileName] = useState("No selected file")
    return (
        <main>
            <form
            onClick={()=> document.querySelector(".input-field").click()}
            >
                <input type="file" accept='pdf/*' className='input-field' hidden 
                onChange={({ target : {files}}) => {
                    files[0] && setFileName(files[0].name)
                    if(files){
                        setPDF(URL.createObjectURL(files[0]))
                    }

                }}
                />

                {pdf ?
                <pdf src={pdf} width={60} height={60} alt={fileName} />
                :
                <>
                <MdCloudUpload color='#9bd565' size={60} />
                <p>Browse File to Upload </p>
                </>
                
            
            }
            </form>

            <section classNmae='uploaded-row'>
                <AiFillFilePdf color='#9bd565' />
                <span className='upload-content'>
                    {fileName} - 
                    <MdDelete 
                    onClick={() => {
                        setFileName("No Selected File")
                        setPDF(null)
                    }}
                    />
                </span>
            </section>
        </main>
    )
}

export default Uploader