import emptyImage from "../images/portal/noData.png";
import { ReactFileInputCustom } from 'react-file-input-custom';
const DocumentDetails = () => {
  return (
    <div className='main-container px-md-5 p-2 p-0 mb-5 container'>
      <div className='citizenship-conatiner document-sub-container'>
        <h3>Citizenship</h3>
        <div className="d-flex justify-content-center">
          <div className='no-images-container'>
            <div className="">
              <img className='img-fluid' src={emptyImage} alt='' />
              <div className='citizen-ship-front-conatiner text-center mt-3'>No Images Uploded</div>
              <div className="import-btn mt-3 ps-3 text-center">
                <ReactFileInputCustom backgroundColor="#0A2343" text="Upload Image" />

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DocumentDetails;
