import React, { useEffect } from "react";
import axios from "axios";

const BootstrapTable = ({settings, setSettings}) => {

  useEffect(() => {
    axios
      .get("/settings")
      .then((response) => {
        setSettings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteClick = (id) => {
    axios
      .delete(`/settings/delete/${id}`)
      .then(() => {
        axios.get("/settings").then((response) => {
          setSettings(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Sub Title</th>
              <th>Image Url</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {settings.map((setting, i) => (
              <tr key={i}>
                <td>{setting.id}</td>
                <td>{setting.title}</td>
                <td>{setting.sub_title}</td>
                <td>{setting.image}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteClick(setting.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BootstrapTable;
