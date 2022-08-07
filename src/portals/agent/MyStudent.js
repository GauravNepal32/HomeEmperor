import { Link } from "react-router-dom";

const MyStudent = () => {
  return <>
    <div className="main-container container px-md-5">
      <div className="my-student-table-container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student Name</th>
              <th scope="col">Added On</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Aabishkar Shrestha</td>
              <td>2022-01-04</td>
              <td>USA Visa Processing</td>
              <td className="student-link-anchor"><Link to="/">View</Link></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Krishna Pokharel</td>
              <td>2022-01-05</td>
              <td>IELTS Preparation</td>
              <td className="student-link-anchor"><Link to="/">View</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </>;
};

export default MyStudent;
