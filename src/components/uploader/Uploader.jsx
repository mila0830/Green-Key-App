import { useState,useEffect } from 'react'
import './Uploader.css'
import { MdCloudUpload, MdDelete} from 'react-icons/md'
import { AiFillFileImage, AiFillFilePdf } from 'react-icons/ai'

function Uploader({selectedFile}){
    //follow Chat's example to move this to Upload
    
    const [pdf, setFile] = useState(null)
    const[fileName, setFileName] = useState("No selected file")
    const [fileType, setFileType] = useState(null);

    useEffect(() => {
        if (selectedFile) {
          setFile(selectedFile);
          setFileType('pdf');
          setFileName('Uploaded PDF');
        }
      }, [selectedFile]);
    
      const handleFileChange = ({ target: { files } }) => {
        if (files[0]) {
          setFileName(files[0].name);
    
          const fileReader = new FileReader();
          fileReader.onload = () => {
            setFile(fileReader.result);
            const isPdf = files[0].type === 'application/pdf';
            setFileType(isPdf ? 'pdf' : 'image');
          };
          fileReader.readAsDataURL(files[0]);
        }
      };
    
      const clearFile = () => {
        setFileName('No Selected File');
        setFile(null);
        setFileType(null);
      };

    return (
        <main>
            <form
            onClick={()=> document.querySelector(".input-field").click()}
            >
                <input type="file" accept='pdf/*' className='input-field' hidden 
                onChange={handleFileChange}
                />
                
                { pdf ?
                    null
                
                :
            
                <>
                <MdCloudUpload color='#9bd565' size={60} />
                <p>Browse File to Upload </p>
                </>
                
            
            }
            </form>

            <section className='uploaded-row'>
                <AiFillFilePdf color='#9bd565' />
                <span className='upload-content'>
                    {fileName} - 
                    <MdDelete 
                    onClick={() => {
                        setFileName("No Selected File")
                        setFile(null)
                    }}
                    />
                </span>
            </section>
        </main>
    )
}

export default Uploader