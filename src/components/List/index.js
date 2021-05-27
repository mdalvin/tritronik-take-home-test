import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  ListContainer,
  ListWrapper,
  TaskAction,
  TaskButton,
  TaskCard,
  TaskDate,
  TaskInfo,
  TaskP,
  TaskTextWrapper,
  TaskTitle,
  WelcomeH2,
  WelcomeP,
  WelcomeWrapper,
} from "./ListElements";
import Swal from "sweetalert2";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const url = "https://note-dot-dev-tritronik.appspot.com/note";
  const token = "8e60a5f5-d344-4d7b-8a8c-99f53e6dca44";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(url, null, config)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you won't be able to retrieve this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1f386f",
      cancelButtonColor: "#fec14a",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete(url, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            return window.location.reload();
          });
        Swal.fire("Done!", "This note has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <ListContainer>
        <WelcomeWrapper>
          <WelcomeH2>
            Welcome to <span style={{ color: "#FEE453" }}>No</span>
            <span style={{ color: "#FEC14A" }}>Ta</span>
          </WelcomeH2>
          <WelcomeP>Just. Note. It.</WelcomeP>
        </WelcomeWrapper>
        <TaskTextWrapper>
          <TaskP>Your recorded notes:</TaskP>
        </TaskTextWrapper>
        <ListWrapper>
          {/* 

          {tasks.length !== 0 ? (tasks.map((task) => (
              <TaskCard styled={{backgroundColor:`${task.color}`}}>
                 <TaskInfo>
                   <TaskTitle>{task.note}</TaskTitle>
                   <TaskDate>{task.createdDate}</TaskDate>
                 </TaskInfo>
                 <TaskAction>
                   <TaskButton to="/edit">
                     <MdEdit />
                   </TaskButton>
                   <TaskButton
                    onClick={() => {
                      handleDelete(task.id);
                    }}
                  >
                    <MdDelete />
                  </TaskButton>
                </TaskAction>
              </TaskCard>
          ))) : ("")};
          
          */}

          <TaskCard>
            <TaskInfo>
              <TaskTitle>Go Shopping</TaskTitle>
              <TaskDate>2021-05-20</TaskDate>
            </TaskInfo>
            <TaskAction>
              <TaskButton to="/edit">
                <MdEdit />
              </TaskButton>
              <TaskButton
                onClick={() => {
                  handleDelete();
                }}
              >
                <MdDelete />
              </TaskButton>
            </TaskAction>
          </TaskCard>
          <TaskCard>
            <TaskInfo>
              <TaskTitle>Go Swimming</TaskTitle>
              <TaskDate>2021-05-25</TaskDate>
            </TaskInfo>
            <TaskAction>
              <TaskButton to="/edit">
                <MdEdit />
              </TaskButton>
              <TaskButton
                onClick={() => {
                  handleDelete();
                }}
              >
                <MdDelete />
              </TaskButton>
            </TaskAction>
          </TaskCard>
          <TaskCard>
            <TaskInfo>
              <TaskTitle>Go Hiking</TaskTitle>
              <TaskDate>2021-05-30</TaskDate>
            </TaskInfo>
            <TaskAction>
              <TaskButton to="/edit">
                <MdEdit />
              </TaskButton>
              <TaskButton
                onClick={() => {
                  handleDelete();
                }}
              >
                <MdDelete />
              </TaskButton>
            </TaskAction>
          </TaskCard>
          <TaskCard>
            <TaskInfo>
              <TaskTitle>Go Biking</TaskTitle>
              <TaskDate>2021-05-30</TaskDate>
            </TaskInfo>
            <TaskAction>
              <TaskButton to="/edit">
                <MdEdit />
              </TaskButton>
              <TaskButton
                onClick={() => {
                  handleDelete();
                }}
              >
                <MdDelete />
              </TaskButton>
            </TaskAction>
          </TaskCard>
          <TaskCard>
            <TaskInfo>
              <TaskTitle>Go Sleeping</TaskTitle>
              <TaskDate>2021-05-30</TaskDate>
            </TaskInfo>
            <TaskAction>
              <TaskButton to="/edit">
                <MdEdit />
              </TaskButton>
              <TaskButton
                onClick={() => {
                  handleDelete();
                }}
              >
                <MdDelete />
              </TaskButton>
            </TaskAction>
          </TaskCard>
          <TaskCard>
            <TaskInfo>
              <TaskTitle>Go Cooking</TaskTitle>
              <TaskDate>2021-05-30</TaskDate>
            </TaskInfo>
            <TaskAction>
              <TaskButton to="/edit">
                <MdEdit />
              </TaskButton>
              <TaskButton
                onClick={() => {
                  handleDelete();
                }}
              >
                <MdDelete />
              </TaskButton>
            </TaskAction>
          </TaskCard>
        </ListWrapper>
      </ListContainer>
    </>
  );
};

export default List;
