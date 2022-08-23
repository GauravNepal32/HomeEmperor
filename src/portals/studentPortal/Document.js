import emptyImage from "../../images/portal/noData.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DocumentDetails = () => {
  const [availableDocument, setAvailableDocument] = useState([])
  const userToken = JSON.parse(sessionStorage.getItem('token')).token;
  const [renderApp, setRenderApp] = useState(false)


  const showsuccessToastMessage = (message) => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };
  const showserrorToastMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById('filename').value;
    const file = document.getElementById('fileattachment').files[0];
    const userToken = JSON.parse(sessionStorage.getItem('token')).token;
    try {
      const response = await axios.post('https://elscript.co/github/emperor-backend/api/store-file', { title: title, file: file }, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userToken}`,
        },
      })
      console.log(response.data)
      if (response.data.statusCode === 200) {
        loadData();
        showsuccessToastMessage(response.data.message);
      } else {
        showserrorToastMessage(response.data.message);
      }
    } catch (err) {
      console.log(err);
      showserrorToastMessage("Unable to connect to server");
    }
  }

  const loadData = async () => {
    try {
      const response = await axios.get('https://elscript.co/github/emperor-backend/api/get-files', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        }
      })
      setAvailableDocument(response.data.data)
      setRenderApp(true)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='main-container container'>
      <ToastContainer />
      {renderApp ? <>
      <div className='citizenship-conatiner document-sub-container'>
          <h3>Add Documents</h3>
          <div className=''>
            <form onSubmit={handleSubmit} action="">
              <div className='d-flex flex-column align-items-center justify-content-between mt-5'>
                <div className="file-name-input mt-3">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="filename" placeholder="File Name" />
                    <label htmlFor="filename">File Name</label>
                  </div>
                </div>
                <div className='import-btn mt-4 ps-5 text-center'>
                  <input type="file" id="fileattachment" name="attachment[]"></input>
                </div>
                <div className="mt-4 document-submit d-flex justify-content-center">
                  <input className="btn btn-type-1" type="submit" name="" id="" value={"SUBMIT"} />
              </div>
            </div>
            </form>
          </div>
        </div>
        <div className="your-document-container document-sub-container my-5">
          <h3>All Documents</h3>

          <table class="table document-table px-3">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">File Name</th>
                <th scope="col">File</th>
              </tr>
            </thead>
            <tbody>
              {availableDocument.map((documents, index) => (
                <tr key={documents.id}>
                  <td>{index + 1}</td>
                  <td>
                    <p>{documents.title}</p>
                  </td>
                  <td>
                    <a target="_blank" href={documents.file}>View Document</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

      </div>
      </> : <Loading />}

    </div>
  );
};

export default DocumentDetails;
