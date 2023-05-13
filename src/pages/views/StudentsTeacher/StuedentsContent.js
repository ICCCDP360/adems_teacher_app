import React, { useState } from "react";
import Sort from "../../../assets/images/sort.svg";
import Search from "../../../assets/images/search.svg";
import filter from "../../../assets/images/filter.svg";
import Print from "../../../assets/images/printfull.svg";
import Download from "../../../assets/images/download.svg";
import leftpath from "../../../assets/images/left.png";
import rightpath from "../../../assets/images/right.png";
import dot from "../../../assets/images/3dot.svg";
import { Dropdown } from "react-bootstrap";
import "./styles/StudentContent.scss";
import ReactPaginate from "react-paginate";
import Table from "react-bootstrap/Table";
const data = [
  {
    id: 1,
    studentName: "Kalai",
    contactNumber: "77897987878",
    goAdemId: "13458",
    rollNumber: "2A765",
    class: "9",
    section: "A",
    assignedTeacher: "malar",
    Action: "",
  },
  {
    id: 2,
    studentName: "Sangavi",
    contactNumber: "7305296087",
    goAdemId: "09856",
    rollNumber: "5B786",
    class: "10",
    section: "B",
    assignedTeacher: "mathi",
    Action: "",
  },
  {
    id: 3,
    studentName: "Ramesh",
    contactNumber: "7305296087",
    goAdemId: "13479",
    rollNumber: "7A543",
    class: "12",
    section: "A",
    assignedTeacher: "Raj",
    Action: "",
  },
  {
    id: 4,
    studentName: "Bhagya",
    contactNumber: "7305296087",
    goAdemId: "05648",
    rollNumber: "6B435",
    class: "7",
    section: "B",
    assignedTeacher: "Naveen",
    Action: "",
  },
  {
    id: 5,
    studentName: "Suresh",
    contactNumber: "7305296087",
    goAdemId: "12874",
    rollNumber: "8C543",
    class: "9",
    section: "C",
    assignedTeacher: "Balaji",
    Action: "",
  },
  {
    id: 6,
    studentName: "Kanish",
    contactNumber: "7305296087",
    goAdemId: "06725",
    rollNumber: "5A984",
    class: "12",
    section: "A",
    assignedTeacher: "Lokesh",
    Action: "",
  },
  {
    id: 7,
    studentName: "Radhana",
    contactNumber: "7305296087",
    goAdemId: "09358",
    rollNumber: "6B372",
    class: "7",
    section: "B",
    assignedTeacher: "Bharathi",
    Action: "",
  },
  {
    id: 8,
    studentName: "Aasifa",
    contactNumber: "7305296087",
    goAdemId: "17364",
    rollNumber: "3A654",
    class: "9",
    section: "A",
    assignedTeacher: "Karthika",
    Action: "",
  },
  {
    id: 9,
    studentName: "Ganesh",
    contactNumber: "7305296087",
    goAdemId: "06845",
    rollNumber: "6C345",
    class: "11",
    section: "C",
    assignedTeacher: "Prasanth",
    Action: "",
  },
  {
    id: 10,
    studentName: "Manoj",
    contactNumber: "7305296087",
    goAdemId: "14793",
    rollNumber: "8A345",
    class: "7",
    section: "A",
    assignedTeacher: "Pavithra",
    Action: "",
  },
  {
    id: 11,
    studentName: "Mathi",
    contactNumber: "7305296087",
    goAdemId: "07635",
    rollNumber: "7B543",
    class: "12",
    section: "B",
    assignedTeacher: "Hari",
    Action: "",
  },
];
const StuedentsContent = () => {
  const [search, setSearch] = useState("");
  const [posts] = useState(data.slice(0, 20));
  const [pageNumber, setPageNumber] = useState(0);

  const userperPage = 5;

  const pagesVisited = pageNumber * userperPage;

  const pageCount = Math.ceil(posts.length / userperPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="student-content-main-container">
      <div className="student-content-sub-container">
        <div className="student-content-sub-container-1">
          <Dropdown className="student-content-dropdown">
            <Dropdown.Toggle className="student-content-dropdown-toggle">
              All
            </Dropdown.Toggle>

            <Dropdown.Menu className="student-content-dropdownmenu">
              <Dropdown.Item className="student-content-dropdown-item">
                All
              </Dropdown.Item>
              <hr className="dropdown-item-hr"></hr>

              <Dropdown.Item className="student-content-dropdown-item">
                12
              </Dropdown.Item>
              <hr className="dropdown-item-hr"></hr>

              <Dropdown.Item className="student-content-dropdown-item">
                11
              </Dropdown.Item>
              <hr className="dropdown-item-hr"></hr>
              <Dropdown.Item className="student-content-dropdown-item">
                10
              </Dropdown.Item>
              <hr className="dropdown-item-hr"></hr>

              <Dropdown.Item className="student-content-dropdown-item">
                9
              </Dropdown.Item>
              <hr className="dropdown-item-hr"></hr>

              <Dropdown.Item className="student-content-dropdown-item">
                8
              </Dropdown.Item>
              <hr className="dropdown-item-hr"></hr>

              <Dropdown.Item className="student-content-dropdown-item">
                7
              </Dropdown.Item>
              <hr className="dropdown-item-hr"></hr>

              <Dropdown.Item className="student-content-dropdown-item">
                6
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p className="student-content-para-no">Number of Students: 1395</p>
        </div>
        <div className="student-content-para-main-container-1">
          <div className="student-content-para-main-container-2">
            <input
              className="student-content-para-input"
              type="search"
              id="gsearch"
              name="gsearch"
              style={{ cursor: "pointer" }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img
              className="img-search"
              style={{ cursor: "pointer" }}
              src={Search}
              alt="Search"
            />
          </div>
          <div className="four-img">
            <img
              className="sub-img"
              src={Sort}
              alt="Sort"
              style={{ cursor: "pointer" }}
            />
            <img
              className="sub-img"
              src={filter}
              alt="Sort"
              style={{ cursor: "pointer" }}
            />
            <img
              className="sub-img"
              src={Download}
              alt="Sort"
              style={{ cursor: "pointer" }}
            />
            <img src={Print} alt="Sort" style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <div>
        <Table responsive className="student-table-main-container mt-2">
          <tbody>
            <tr className="student-table-tr">
              {/* <th className="student-table-th">
                GoAdem <br />
                Rank
              </th> */}
              <th className="student-table-th">Student Name</th>
              <th className="student-table-th">Contact Number</th>
              <th className="student-table-th">GoAdem Id</th>
              <th className="student-table-th">Roll Number</th>
              <th className="student-table-th">Class</th>
              <th className="student-table-th">Section</th>
              <th className="student-table-th">
                Assigned <br /> Teacher
              </th>
              <th className="student-table-th">Actions</th>
            </tr>
            {posts

              .filter((value) => {
                return search.toLowerCase() === ""
                  ? value
                  : value.studentName.toLowerCase().includes(search) ||
                      value.contactNumber.toLowerCase().includes(search) ||
                      value.class.toLowerCase().includes(search) ||
                      value.goAdemId.toLowerCase().includes(search) ||
                      value.rollNumber.toLowerCase().includes(search) ||
                      value.section.toLowerCase().includes(search) ||
                      // value.id.toLowerCase().includes(search) ||
                      value.assignedTeacher.toLowerCase().includes(search);
              })
              .slice(pagesVisited, pagesVisited + userperPage)

              .map((value) => {
                return (
                  <tr className="student-table-map-tr" key={value.id}>
                    {/* <td className="student-table-map-td">{value.id}</td> */}
                    <td className="student-table-map-td">
                      {value.studentName}
                    </td>
                    <td className="student-table-map-td">
                      {value.contactNumber}
                    </td>
                    <td className="student-table-map-td">{value.goAdemId}</td>
                    <td className="student-table-map-td">{value.rollNumber}</td>
                    <td className="student-table-map-td">{value.class}</td>
                    <td className="student-table-map-td">{value.section}</td>
                    <td className="student-table-map-td">
                      {value.assignedTeacher}
                    </td>

                    <td className="student-map-td">
                      <Dropdown className="dropdown-table">
                        <Dropdown.Toggle className="table-dropdown-toggle">
                          <img
                            className="dropdown-img-dot"
                            src={dot}
                            alt="dot"
                          />
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                          className="table-dropdown-menu"
                          // style={{ border: "1.5px  solid #A2A2A2" }}
                        >
                          <Dropdown.Item>Edit</Dropdown.Item>
                          <Dropdown.Item className="dropdown-suspend">
                            Suspend
                          </Dropdown.Item>
                          <Dropdown.Item>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      <div className="mt-5" style={{ marginRight: "35px" }}>
        <ReactPaginate
          previousLabel={<img src={leftpath} alt="left" />}
          nextLabel={<img src={rightpath} />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default StuedentsContent;
