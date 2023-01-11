import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
const typesList = ["Full-time", "Part-time", "Temporary-work", "Permanent"];
const statusList = ["In-progress", "Open", "Resolved", "Closed"];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      name: "",
      startDate: "",
      dueDate: "",
      type: "",
      status: "",
      action: "ADD TASK", //default ADD task
      tasks: [
        {
          name: "Writing code",
          type: "Full-time",
          status: "In-progress",
          startDate: "01/09/2023",
          dueDate: "01/09/2023",
        },
        {
          name: "Feeding the cat",
          type: "Part-time",
          status: "resolved",
          startDate: "01/09/2023",
          dueDate: "01/09/2023",
        },
        {
          name: "Reading books",
          type: "Temporary-work",
          status: "open",
          startDate: "01/09/2023",
          dueDate: "01/09/2023",
        },
        {
          name: "Watering the plants",
          type: "Temporary-work",
          status: "closed",
          startDate: "01/09/2023",
          dueDate: "01/09/2023",
        },
      ],
    };
    this.changeName = this.changeName.bind(this);
    this.changeType = this.changeType.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeStartDate = this.changeStartDate.bind(this);
    this.changeDueDate = this.changeDueDate.bind(this);
  }
  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changeType = (e) => {
    this.setState({
      type: e.target.value,
    });
  };
  changeStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  changeStartDate = (e) => {
    this.setState({
      startDate: e.target.value,
    });
  };
  changeDueDate = (e) => {
    this.setState({
      dueDate: e.target.value,
    });
  };

  addtask = () => {
    if (!this.state.tasks.find((task) => task.name === this.state.name)) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            name: this.state.name,
            type: this.state.type,
            status: this.state.status,
            startDate: this.state.startDate,
            dueDate: this.state.dueDate,
          },
        ],
        name: "",
        type: "",
        status: "",
        startDate: "",
        dueDate: "",
      });
    }
  };
  Edit = (task, index) => {
    this.setState({
      action: "UPDATE TASK",
      name: task.name,
      type: task.type,
      status: task.status,
      startDate: task.startDate,
      dueDate: task.dueDate,
      index: index,
    });
  };
  updatetask = () => {
    let data = this.state.tasks;
    data.map((task, index) => {
      if (this.state.index === index) {
        task.name = this.state.name;
        task.type = this.state.type;
        task.status = this.state.status;
        task.startDate = this.state.startDate;
        task.dueDate = this.state.dueDate;
      }
    });
    //set update tasks
    this.setState({
      tasks: data,
      name: "",
      type: "",
      status: "",
      startDate: "",
      dueDate: "",
      action: "ADD TASK",
    });
  };

  deletetask = (name) =>
    this.setState({
      tasks: this.state.tasks.filter((task) => task.name !== name),
    });

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <h1>{this.state.action}</h1>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name=""
                className="form-control"
                onChange={this.changeName}
                value={this.state.name}
              />
            </div>

            <div className="form-group">
              <label>Type</label>
              <select
                className="form-control"
                value={this.state.type}
                onChange={this.changeType}
              >
                {typesList.map((type) => (
                  <option>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                className="form-control"
                value={this.state.status}
                onChange={this.changeStatus}
              >
                {statusList.map((status) => (
                  <option>{status}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name=""
                className="form-control"
                onChange={this.changeStartDate}
                value={this.state.startDate}
              />
            </div>
            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                name=""
                className="form-control"
                onChange={this.changeDueDate}
                value={this.state.dueDate}
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={
                  this.state.action === "ADD TASK"
                    ? this.addtask
                    : this.updatetask
                }
                item
              >
                Save
              </button>
            </div>
          </div>

          <div className="col-md-10">
            <h1>List Tasks</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>Due Date</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasks.map((task, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td>{task.type}</td>
                    <td>{task.status}</td>
                    <td>{task.startDate}</td>
                    <td>{task.dueDate}</td>
                    <td>
                      <label
                        className="badge badge-warning"
                        onClick={() => this.Edit(task, index)}
                      >
                        Edit
                      </label>
                    </td>
                    <td>
                      <label
                        className="badge badge-danger"
                        onClick={() => this.deletetask(task.name)}
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
